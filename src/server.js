const http = require('./app');

const port = 3000;

http.listen(port, () => {
    console.log('server listening on port ' , port);
});
