const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
const authService = require('../jwt/auth.js')
const fs = require('fs')
const path = require('path')
const nodeID3 = require('node-id3')
const {upload} = require('../modules/multer-conn.js')


router.post("/musiclist",upload.single('mp3'), (req, res, next) => {
  if(req.isFileValidate){
    console.log("if안")
    res.json(req.file)
  }
  else {
    console.log("else안")
    res.send('업로드 할 수 없는 파일입니다!')
  }
});

module.exports = router;
