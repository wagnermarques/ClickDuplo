var appExpress = express();
var path = require("path");
var fs = require("fs");

var http = require('http').Server(appExpress);
var io = require('socket.io')(http);


appExpress.use('/libraries', express.static('node_modules'));
appExpress.use(express.static(__dirname + '/public'));


appExpress.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


var onChatMsg = function(msg){
    console.log(msg);
    io.emit('chatMsg', msg);
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
