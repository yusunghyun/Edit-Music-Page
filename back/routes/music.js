const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
const authService = require('../jwt/auth.js')
const fs = require('fs')
const path = require('path')
const {upload} = require('../modules/multer-conn.js')
const nodeid3 = require('node-id3')
const { Music } = require("../models");

router.get("/musiclist", async (req,res,next) => {
  const item = await Music.findAll()
  res.json(item)
})

router.post("/musiclist",upload.single('mp3'), async(req, res, next) => {
  try{
      if(req.isFileValidate){
      let filepath = path.join(__dirname,`../public/uploads/${req.file.filename}`)
      console.log(filepath)
      let n3 = nodeid3.read(filepath)
      let {TRCK,TALB} = n3.raw
      let {title,artist} = n3
      let music = await Music.create({
        title,
        artist,
        track:TRCK,
        album:TALB,
        filepath,
        filename:req.file.filename
      })
      const item = await Music.findAll()
      res.json(item)
    }
    else {
      console.log("else안")
      res.send('업로드 할 수 없는 파일입니다!')
    }
  } catch(err){
    res.json(err)
  }
});

router.put("/musiclist", async (req,res,next) => {
  const { id } = req.body
  let body = req.body

  if (!id) return res.status(400).json({error: 'no id'})

  const item = await Music.findOne({
    where: { id }
  })
  if (!item) return res.status(404).json({error: 'no card'})

  Object.keys(body).forEach(key => {
    let value = body[key]
    if (typeof value === 'string') value = value.trim()
    if (value)  {
      item[key] = value
    }
  })

  await item.save()
  res.json(item)
})

router.delete("/musiclist", async (req,res,next) => {
  try{
    const { id } = req.body
    let {filepath} = await Music.findOne({where:{id}})
    console.log('id : '+id)
    console.log('filepath : '+filepath)
    fs.unlinkSync(filepath, function(err) {
      if (err) throw err;
      console.log('file deleted');
    });

    await Music.destroy({ where:  {id}  })  
    const item = await Music.findAll()
    res.json(item)
  } catch(err){
    res.json(err)
  }
})


module.exports = router;
