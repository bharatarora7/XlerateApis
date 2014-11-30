var authParam = process.argv[2];
var server = require("./XlerateApi/xlerateserver");
if (authParam !== undefined && authParam !== null) {
    server.Start(authParam); 
}
else { 
server.Start(null); 
}

