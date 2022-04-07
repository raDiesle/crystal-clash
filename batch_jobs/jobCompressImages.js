const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

var read = require('fs-readdir-recursive')

// SOURCE FOLDER
const SRC_FOLDER = "batch_jobs/images_from_game";
const TARGET_FOLDER = "./public/generated/img/";

function readFilesSync(dir) {
  const files = [];




  fs.readdirSync(dir).forEach((filename) => {
    const name = path.parse(filename).name;
    const ext = path.parse(filename).ext;
    const filepath = path.resolve(dir, filename);
    const stat = fs.statSync(filepath);
    const isFile = stat.isFile();

    if (isFile) files.push({ filepath, name, ext, stat });
  });

  files.sort((a, b) => {
    // natural sort alphanumeric strings
    // https://stackoverflow.com/a/38641281
    return a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
  });

  return files;
}

if (!fs.existsSync(TARGET_FOLDER)) {
  fs.mkdirSync(TARGET_FOLDER);
}

const WEBP = ".webp";
const JPG = ".jpg";
const FILE_EXT = WEBP;

const files = readFilesSync(SRC_FOLDER);

var tga2png = require('tga2png');

const generateImages = (file, width) => {
  const fileSlashes = file.replace("\\", "/");
  const filePathRemoveEnding = fileSlashes.substring(0, fileSlashes.length - 4);
  return tga2png(SRC_FOLDER + "/" + fileSlashes, TARGET_FOLDER + filePathRemoveEnding + '.png').then(buf => {
    console.log('the png buffer is', buf);
  }, err => {
    console.log('error', err);
  });
};

const results = read(SRC_FOLDER);
results.forEach((file) => {
  console.log(file);
  generateImages(file, 78);
  //  generateImages(file, 48);
});
