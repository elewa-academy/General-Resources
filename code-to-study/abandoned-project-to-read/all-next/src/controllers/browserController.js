class BrowserController extends Controller {
  browse(meth, arg1, arg2) {
    if (this[meth] !== undefined) {
      this[meth](arg1, arg2);
    } else {
      this.view.render();
    }  
  }
}

module.exports = BrowserController;