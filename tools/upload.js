/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const fs = require('fs')
const GitHubApi = require('github');
const ghReleaseAssets = require('gh-release-assets')

let token = fs.readFileSync('token');
token = token.trim();

const github = new GitHubApi({
  protocol: "https",
  headers: {
    "user-agent": "HenryHuang-Release-GitHub-From-Travis"
  },
  Promise: require('bluebird'),
  followRedirects: false,
  timeout: 5000
});

github.authenticate({
  type: "oauth",
  token: token
});

let date = new Date();
let tagName = 'r-dist-' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds();

/**
 * Cleans up the output (build) directory.
 */
async function upload() {
  github.repos.createRelease({
    owner: 'henryhuang',
    repo: 'appshowpub',
    tag_name: tagName,
    target_commitish: 'dev',
    name: tarName
  }, function (err, res) {
    if (err) {
      throw e;
    }
    console.log(res);
    ghReleaseAssets({
      url: res.upload_url,
      token: [token],
      assets: ['release.zip']
    }, function (err, assets) {
      if (err) {
        throw e;
      }
      console.log(assets)
      console.log('Upload assets done!')
    })
  });
}

export default upload;
