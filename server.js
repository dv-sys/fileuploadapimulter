const app = require('./app');
const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.warn('server is listning on port : ' + port);
})