//RequestHandler
var querystring = require("querystring");

// Start handler
function start(request,response, postData) {
console.log("Request handler 'start' was called.");
var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>' +
'WelCome to E2EAPI' +
'</body>'+
'</html>';
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><head><h1>Welcome to E2EAPI </h1></head><body> <p>");
    response.write(body);
    response.end();
}


// Upload Handler
function upload(request,response, postData) {
console.log("Request handler 'upload' was called.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("You've sent the text: "+
querystring.parse(postData).text);
response.end();
}

//GetProfile Handler
function getProfile(id, fields) {
    var Profile = {};
    
    if (id !== "" && id !== null)
        Profile.id = id;
    else
        throw new Error("Profile does not exists");
    
    Profile.name = "Bharat Arora";
    Profile.email = "bharat.arora7@gmail.com";
    
    Profile.gender = "Male";
    Profile.isActive = "True";
    if (fields !== null)
    var attrs = fields.split(',');
    
    return Profile;
}

//GetProfile Handler
function retrieveProfiles(ids) {
   var Profiles =[];
    //var Profile = {};
    
    var Profile = {};
    
    if (ids !== "" || ids !== null)
        Profile.id = "1";
    else
        throw new Error("Profile does not exists");
    
    Profile.name = "Bharat Arora";
    Profile.email = "bharat.arora7@gmail.com";
    
    Profile.gender = "Male";
    Profile.isActive = "True";
    
    Profiles.push(Profile);

    Profile = {};
    Profile.id = "2";
    Profile.name = "Rajan M";
    Profile.email = "Rajan.M@gmail.com";
    
    Profile.gender = "Male";
    Profile.isActive = "True";
    
    Profiles.push(Profile);
    return Profiles;
    
}


//Export methods which are required to be part of routes or
// the methods we need routes to be created
exports.start = start;
exports.getProfile = getProfile;
exports.upload = upload;
exports.retrieveProfiles = retrieveProfiles;
