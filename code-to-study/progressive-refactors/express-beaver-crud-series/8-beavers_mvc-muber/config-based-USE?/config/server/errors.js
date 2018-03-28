module.exports = function(server){
    // catch 404 and forward to error handler
    server.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers

    // development error handler
    // will print stacktrace
    if (server.get('env') === 'development') {
        server.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render(pathTo.view('static/error'), {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    server.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render(pathTo.view('static/error'), {
            message: err.message,
            error: {}
        });
    })
}