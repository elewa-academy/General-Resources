'use strict';

var Lazyframe = function Lazyframe() {

  var settings = void 0;

  var elements = [];

  var defaults = {
    vendor: undefined,
    id: undefined,
    src: undefined,
    thumbnail: undefined,
    title: undefined,
    apikey: undefined,
    initialized: false,
    parameters: undefined,
    y: undefined,
    debounce: 250,
    lazyload: true,
    initinview: false,
    onLoad: function onLoad(l) {},
    onAppend: function onAppend(l) {},
    onThumbnailLoad: function onThumbnailLoad(img) {}
  };

  var constants = {
    regex: {
      youtube: /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/,
      vimeo: /vimeo\.com\/(?:video\/)?([0-9]*)(?:\?|)/,
      vine: /vine.co\/v\/(.*)/
    },
    condition: {
      youtube: function youtube(m) {
        return m && m[1].length == 11 ? m[1] : false;
      },
      vimeo: function vimeo(m) {
        return m && m[1].length === 9 || m[1].length === 8 ? m[1] : false;
      },
      vine: function vine(m) {
        return m && m[1].length === 11 ? m[1] : false;
      }
    },
    src: {
      youtube: function youtube(s) {
        return 'https://www.youtube.com/embed/' + s.id + '/?' + s.parameters;
      },
      vimeo: function vimeo(s) {
        return 'https://player.vimeo.com/video/' + s.id + '/?' + s.parameters;
      },
      vine: function vine(s) {
        return 'https://vine.co/v/' + s.id + '/embed/simple';
      }
    },
    endpoints: {
      youtube: function youtube(s) {
        return 'https://www.googleapis.com/youtube/v3/videos?id=' + s.id + '&key=' + s.apikey + '&fields=items(snippet(title,thumbnails))&part=snippet';
      },
      vimeo: function vimeo(s) {
        return 'https://vimeo.com/api/oembed.json?url=https%3A//vimeo.com/' + s.id;
      },
      vine: function vine(s) {
        return 'https://vine.co/oembed.json?url=https%3A%2F%2Fvine.co%2Fv%2F' + s.id;
      }
    },
    response: {
      youtube: {
        title: function title(r) {
          return r.items['0'].snippet.title;
        },
        thumbnail: function thumbnail(r) {
          var thumb = r.items["0"].snippet.thumbnails;
          var url = thumb.maxres ? thumb.maxres.url : thumb.standard.url;
          return url;
        }
      },
      vimeo: {
        title: function title(r) {
          return r.title;
        },
        thumbnail: function thumbnail(r) {
          return r.thumbnail_url;
        }
      },
      vine: {
        title: function title(r) {
          return r.title;
        },
        thumbnail: function thumbnail(r) {
          return r.thumbnail_url;
        }
      }
    }
  };

  function init(elements) {
    settings = Object.assign({}, defaults, arguments.length <= 1 ? undefined : arguments[1]);

    if (typeof elements === 'string') {

      var selector = document.querySelectorAll(elements);
      for (var i = 0; i < selector.length; i++) {
        loop(selector[i]);
      }
    } else if (typeof elements.length === 'undefined') {
      loop(elements);
    } else if (elements.length > 1) {

      for (var _i = 0; _i < elements.length; _i++) {
        loop(elements[_i]);
      }
    } else {
      loop(elements[0]);
    }

    if (settings.lazyload) {
      scroll();
    }
  }

  function loop(el) {
    var _this = this;

    if (el instanceof HTMLElement === false || el.classList.contains('lazyframe--loaded')) return;

    var lazyframe = {
      el: el,
      settings: setup(el)
    };

    lazyframe.el.addEventListener('click', function () {
      lazyframe.el.appendChild(lazyframe.iframe);

      var iframe = el.querySelectorAll('iframe');
      lazyframe.settings.onAppend.call(_this, iframe[0]);
    });

    if (settings.lazyload) {
      build(lazyframe);
    } else {
      api(lazyframe, !!lazyframe.settings.thumbnail);
    }
  }

  function setup(el) {

    var attr = Array.prototype.slice.apply(el.attributes).filter(function (att) {
      return att.value !== '';
    }).reduce(function (obj, curr) {
      var name = curr.name.indexOf('data-') === 0 ? curr.name.split('data-')[1] : curr.name;
      obj[name] = curr.value;
      return obj;
    }, {});

    var options = Object.assign({}, settings, attr, {
      y: el.offsetTop,
      parameters: extractParams(attr.src)
    });

    if (options.vendor) {
      var match = options.src.match(constants.regex[options.vendor]);
      options.id = constants.condition[options.vendor](match);
    }

    return options;
  }

  function extractParams(url) {
    var params = url.split('?');

    if (params[1]) {
      params = params[1];
      var hasAutoplay = params.indexOf('autoplay') !== -1;
      return hasAutoplay ? params : params + '&autoplay=1';
    } else {
      return 'autoplay=1';
    }
  }

  function useApi(settings) {

    if (!settings.vendor) return false;

    if (!settings.title || !settings.thumbnail) {
      if (settings.vendor === 'youtube') {
        return !!settings.apikey;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  function api(lazyframe) {
    var _this2 = this;

    if (useApi(lazyframe.settings)) {
      send(lazyframe, function (err, data) {
        if (err) return;

        var response = data[0];
        var _l = data[1];

        if (!_l.settings.title) {
          _l.settings.title = constants.response[_l.settings.vendor].title(response);
        }
        if (!_l.settings.thumbnail) {
          var url = constants.response[_l.settings.vendor].thumbnail(response);
          _l.settings.thumbnail = url;
          lazyframe.settings.onThumbnailLoad.call(_this2, url);
        }
        build(_l, true);
      });
    } else {
      build(lazyframe, true);
    }
  }

  function send(lazyframe, cb) {

    var endpoint = constants.endpoints[lazyframe.settings.vendor](lazyframe.settings);
    var request = new XMLHttpRequest();

    request.open('GET', endpoint, true);

    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        cb(null, [data, lazyframe]);
      } else {
        cb(true);
      }
    };

    request.onerror = function () {
      cb(true);
    };

    request.send();
  }

  function scroll() {
    var _this3 = this;

    var height = window.innerHeight;
    var count = elements.length;
    var initElement = function initElement(el, i) {
      el.settings.initialized = true;
      el.el.classList.add('lazyframe--loaded');
      count--;
      api(el);

      if (el.settings.initinview) {
        el.el.click();
      }

      el.settings.onLoad.call(_this3, el);
    };

    elements.filter(function (el) {
      return el.settings.y < height;
    }).forEach(initElement);

    var onScroll = debounce(function () {

      up = lastY < window.scrollY;
      lastY = window.scrollY;

      if (up) {
        elements.filter(function (el) {
          return el.settings.y < height + lastY && el.settings.initialized === false;
        }).forEach(initElement);
      }

      if (count === 0) {
        window.removeEventListener('scroll', onScroll, false);
      }
    }, settings.debounce);

    var lastY = 0;
    var t = false,
        up = false;
    window.addEventListener('scroll', onScroll, false);

    function debounce(func, wait, immediate) {
      var timeout = void 0;
      return function () {
        var context = this,
            args = arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  }

  function build(lazyframe, loadImage) {

    lazyframe.iframe = getIframe(lazyframe.settings);

    if (lazyframe.settings.thumbnail && loadImage) {
      lazyframe.el.style.backgroundImage = 'url(' + lazyframe.settings.thumbnail + ')';
    }

    if (lazyframe.settings.title && lazyframe.el.children.length === 0) {
      var docfrag = document.createDocumentFragment(),
          titleNode = document.createElement('span');

      titleNode.className = 'lazyframe__title';
      titleNode.innerHTML = lazyframe.settings.title;
      docfrag.appendChild(titleNode);

      lazyframe.el.appendChild(docfrag);
    }

    if (!settings.lazyload) {
      lazyframe.el.classList.add('lazyframe--loaded');
      lazyframe.settings.onLoad.call(this, lazyframe);
      elements.push(lazyframe);
    }

    if (!lazyframe.settings.initialized) {
      elements.push(lazyframe);
    }
  }

  function getIframe(settings) {

    var docfrag = document.createDocumentFragment(),
        iframeNode = document.createElement('iframe');

    if (settings.vendor) {
      settings.src = constants.src[settings.vendor](settings);
    }

    iframeNode.setAttribute('id', 'lazyframe-' + settings.id);
    iframeNode.setAttribute('src', settings.src);
    iframeNode.setAttribute('frameborder', 0);
    iframeNode.setAttribute('allowfullscreen', '');

    if (settings.vendor === 'vine') {
      var scriptNode = document.createElement('script');
      scriptNode.setAttribute('src', 'https://platform.vine.co/static/scripts/embed.js');
      docfrag.appendChild(scriptNode);
    }

    docfrag.appendChild(iframeNode);
    return docfrag;
  }

  return init;
};

// const lf = Lazyframe();

// export default lf;

var elements = document.querySelectorAll('.lazyframe');

lazyframe(elements, {
  apikey: 'AIzaSyBhloBPcVZBYHq4mUJ1qzjiT9Ri_LyjWC4' // Sorry, will only work on this domain
});
//# sourceMappingURL=bundle.js.map
