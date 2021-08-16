const express = require("express");
const router = express.Router();
const shell = require("shelljs");
const path = require("path");
const fs = require("fs");

router.get("*", (req, res) => {
  res.send("hello world");
});

router.post("/", (req, res) => {
  //Create a cpp file with req.body.code codes/code.cpp
  const dirCodes = path.join(__dirname, "codes");
  if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
  }
  const filename = "code.cpp";
  const filepath = path.join(dirCodes, filename);
  fs.writeFileSync(filepath, req.body.code);

  //Create a output file outputs/ouput.out
  const outputPath = path.join(__dirname, "outputs");
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  const outPath = path.join(outputPath, "output.out");

  //Create input file inputs/input.in
  const inPath = path.join(__dirname, "inputs");
  if (!fs.existsSync(inPath)) {
    fs.mkdirSync(inPath, { recursive: true });
  }
  const inputPath = path.join(inPath, "input.in");
  fs.writeFileSync(inputPath, req.body.input || "");

  //Execute the cpp file and save to output.out
  shell.exec(`g++ ${filepath} -o ${outPath}`, (error, stdout, stderr) => {
    if (error) {
      res.json({ output: stderr });
    } else {
      shell.exec(`${outPath} < ${inputPath}`, (error, stdout, stderr) => {
        if (!error) res.json({ output: stdout || stderr });
      });
    }
  });
});

module.exports = router;
