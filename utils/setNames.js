const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/data");

// console.log(dirPath)

const getData = () => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        return console.log("Failed to list contents of directory: " + err);
      }
      files.forEach((file, i) => {
        let result;

        const filename = path.parse(`${dirPath}/${file}`).name 
        fs.readFile(`${dirPath}/${file}`, "utf8", (err, data) => {
            result = data.replace("Your name", filename)
            
            fs.writeFile(`${dirPath}/${file}`, result, 'utf8', function (err) {
                if (err) return console.log(err);
             });
        });
      });
    });
    return;
  };


getData();