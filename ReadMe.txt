//Bharat Arora
/// For security 
enabling the security pass the sproject properties script arguments as -s  (without security and without mongo db dependency)
for without security pass the -ws argument 

XleraeServer.js file 
Disable the following code
authHandler.verifyCredentials(request, response, function (err, client){

for running without authentication 

Minumun requirement for authication is to have a mongo db user and passing the following 
in fiddler

In case mongo db has the user , then-
Authorization: Basic MTIzNDpiaGFyYXQ=
Content-Type: application/json


in case the mongo db does not have any user
use the post command inside fiddler 

http://localhost:8080/client/postclients

with Body as follows-

{"client":{"id":"1234","name":"bharat", "secret":"bharat","userId":"1234"}}

