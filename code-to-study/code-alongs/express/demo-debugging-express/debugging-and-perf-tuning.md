# Node.js Debugging Strategies

## BayNode Meetup, September 1, 2015

#### [http://www.meetup.com/BayNode/events/221768952/](http://www.meetup.com/BayNode/events/221768952/)

#### [http://www.meetup.com/Node-Hackers-at-Hacker-Dojo/events/220153489/](http://www.meetup.com/Node-Hackers-at-Hacker-Dojo/events/220153489/)

### Tony Pujals [@subfuzion](https://twitter.com/subfuzion)

---

Strategies
----------

* console.log (.trace, .info, .warn, .error), util.log, util.debuglog
* Morgan, Debug
* Logging libraries (Bunyan, Winston, ...)
* Logging services (LogEntries, Loggly, ...)
* node-inspector
* WebStorm
* APM - Application Performance Monitoring (AppDynamics, Node Relic, ...)

---

Nice to know
------------

* JSON.stringify
* util.inspect

* os and process package functions
  * https://nodejs.org/api/os.html (uptime, loadavg, totalmem, freemem)
  * https://nodejs.org/api/process.html#process_process_memoryusage

---

## Example repo and presentation published to GitHub

https://github.com/tonypujals/demo-debugging
