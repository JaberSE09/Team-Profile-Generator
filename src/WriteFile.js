const fs = require("fs");

const writeFile = (team) => {
  fs.writeFile("./dist/index.html", team, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
      // when the profile has been created
    } else {
      console.log("Team Profile Created! Check the dist for index.html file");
    }
  });
};
module.exports = writeFile;
