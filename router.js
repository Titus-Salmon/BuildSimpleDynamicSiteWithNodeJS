var Profile = require("./profile.js");

// handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
	//if url == "/" && GET
	if(request.url === "/") {
		//show search field
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		response.write("Search\n");
		response.end("Footer\n");
	}
	//if url == "/" && POST
		//redirect to /:username
}

// Handle HTTP route GET /:username i.e. /TreehouseUsername
function userRoute(request, response) {
	//if url == "/..."
	var username = request.url.replace("/", "");
	if (username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		
		//get JSON from Treehouse
		var studentProfile = new Profile(username);
		
			//on "end"
		studentProfile.on("end", function (profileJSON) {
			//show profile
			//store JSON values we need
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javaScriptPoints: profileJSON.points.JavaScript,
			}
			//simple response
			response.write(values.username + " has " + values.badges + " badges\n");
			response.end("Footer\n");
			
		});
		
		//on "error"
		studentProfile.on("error", function (errorJSON) {
			//show error
			response.write(errorJSON.message + "\n")
			response.end("Footer\n");
		});	
	}
}

module.exports.homeRoute = homeRoute;
module.exports.userRoute = userRoute;
