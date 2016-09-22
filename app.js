//problem: need way to look at user's badge count and JavaScript points from web browser


//solution: use Node.js to look up profile info & serve up templates via HTTP
//1. create web server

//GENERAL NOTE: this process must be started in node.js (in terminal, "node app.js"). Once started, the message "Server running at http://127.0.0.1:3000/" will appear in terminal. However, to see the "Hello World" message, you must navigate to localhost:3000 on local machine browser. If process is not currently running in terminal (i.e. you have stopped it via crtl-c, ) and you type localhost:3000 into browser, you will get the following message (this example is for Firefox browser): "Unable to connect. Firefox can’t establish a connection to the server at localhost:3000. The site could be temporarily unavailable or too busy. Try again in a few moments. If you are unable to load any pages, check your computer’s network connection. If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the Web."

//const http = require('http');
//
//const hostname = '127.0.0.1';
//const port = 3000;
//
//const server = http.createServer((request, response) => {
//  response.statusCode = 200;
//  response.setHeader('Content-Type', 'text/plain');
//  response.end('Hello World\n');
//});
//
//server.listen(port, hostname, () => {
//  console.log(`Server running at http://${hostname}:${port}/`);
//});


//could also be written as:
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World\n');
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});




//2. handle HTTP route GET / and POST / i.e. Home
	//if url == "/" && GET
		//show search field
	//if url == "/" && POST
		//redirect to /:username

//3. Handle HTTP route GET /:username i.e. /TreehouseUsername
	//if url == "/..."
		//get JSON from Treehouse
			//on "end"
				//show profile
			//on "error"
				//show error

//4. function that handles reading of files & merges in the values
	//read from file and get string
		//merge values into string