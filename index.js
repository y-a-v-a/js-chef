/**
 * @author y_a_v_a
 * @license wtfpl v2
 * copyleft 2017 - no wrongs reversed
 */
const fs = require('fs');
const chefRunner = require('./lib/ChefRunner');

const sourceDir = './chef';
const chefRegExp = /^.*\.chef$/;

// read file content and pass to chefRunner
function readAndProcessFile(fileName) {
  fs.readFile(fileName, 'utf8', (error, content) => {
    if (error) {
      console.log(error);
      return;
    }

    chefRunner.run(content);
  });
}

// read ./chef dir and pass to readAndProcessFile
fs.readdir(sourceDir, (error, files) => {
  if (error) {
    console.log(error);
    return;
  }

  for(let i = 0; i < files.length; i++) {
    let file = files[i];

    if (chefRegExp.test(file)) {
      let filePath = `${sourceDir}/${file}`;
      readAndProcessFile(filePath);
    }
  }
});
