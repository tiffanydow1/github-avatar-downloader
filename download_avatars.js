var request = require('request');

console.log("Welcome to the GitHub Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Results:", result);
});
//function to use request lib to fetch list of contributors via HTTPS for given repo
//cb = callback function to handle asynchronous nature of results that get returned from getRepoContributors