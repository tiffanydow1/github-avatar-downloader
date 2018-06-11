var request = require('request');
var include = ('./secrets.js');


console.log("Welcome to the GitHub Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'GITHUB_TOKEN'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});
//function to use request lib to fetch list of contributors via HTTPS for given repo
//cb = callback function to handle asynchronous nature of results that get returned from getRepoContributors






















