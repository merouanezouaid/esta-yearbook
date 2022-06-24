const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/data");
let postlist = [];

const getData = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMetadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metadataIndices }) => {
          if (metadataIndices.length > 0) {
            let metadata = lines.slice(
              metadataIndices[0] + 1,
              metadataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            return obj;
          }
        };
        const lines = contents.split("\n");
        const metadataIndices = lines.reduce(getMetadataIndices, []);
        const metadata = parseMetadata({ lines, metadataIndices });
        const date = new Date(metadata.date);
        post = {
          picture: metadata.picture ? metadata.picture : "No picture given",
          name: metadata.name ? metadata.name : "No name given",
          quote: metadata.quote ? metadata.quote : "No quote given",
        };
        postlist.push(post);
        if (i === files.length - 1) {
          const sortedList = postlist.sort((a, b) => {
            return a.id < b.id ? 1 : -1;
          });
          let data = JSON.stringify(sortedList);
          data = data.replace(/\\r/g, "");
          //   console.log(JSON.parse(data));
          fs.writeFileSync("../src/data.json", data);
        }
      });
    });
  });
  return;
};

getData();
