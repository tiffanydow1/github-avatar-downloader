var request = require('request');
var fs = require('fs');
var include = ('./secrets.js');

const repoOwner = process.argv[2];
const repoName = process.argv[3];


console.log("Welcome to the GitHub Avatar Downloader");

function getRepoContributors(repoOwner, repoName, cb) {

  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': include.GITHUB_TOKEN
    }
  };

  if (repoOwner || repoName === null) {
    console.log("Error!!!!! Please provide more information!");
  }

  request(options, function(err, res, body) {
    let parsedBody = JSON.parse(body);
    //cb(err, parsIntResult[0].avatar_url);

    for(i = 0; i < parsedBody.length; i++) {
      //var avatar_url = res.length[i].avatar_url;
      cb(err, parsedBody[i].avatar_url);
      downloadImageByURL(parsedBody[i].avatar_url, './avatars/' + parsedBody[i].login + '.png');
    }
  });
}

function downloadImageByURL (url, filePath) {

  request.get(url)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function (response) {
    console.log('Response Status Code: ', response.statusCode);
    console.log(response.headers['content-type']);
    console.log('Downloading image...');
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream(filePath));
}


getRepoContributors("jquery", function(err, result) {
  //console.log("Errors:", err);
  downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");
  console.log("Results:", result);
  //return result;
});












































