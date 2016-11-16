/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import zipFolder from 'zip-folder';

/**
 * Cleans up the output (build) directory.
 */
async function release() {
  await zipFolder('build', 'release.zip', function(err) {
    if(err) {
      console.log('oh no!', err);
    } else {
      console.log('release done!');
    }
  });
}

export default release;
