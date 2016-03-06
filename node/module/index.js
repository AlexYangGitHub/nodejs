var server = require('./server.js');

server.start();

// 20160306 模組化 分為兩個部分。第一：在要使用模組的檔案中，去 requrie 進來。第二：模組本身要用 exports 把模組的 function 傳入。其他模組才可以使用。