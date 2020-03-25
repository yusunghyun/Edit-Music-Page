const express = require("express");
const router = express.Router();
// const bcrypt = require("bcrypt");
const { User } = require("../models");
// const { alertLoc } = require("../modules/util.js");
const authService = require('../jwt/auth.js')

router.post("/register", async (req, res, next) => {
  let { userid,username, password } = req.body;
  console.log('-------------------------------------')
  console.log("s")
  console.log('-------------------------------------')
  try {
    let result = await User.findOne({ where: { userid } }); //가입중 이미 있나 찾아보자!!
    if (result) {
      res.json({err:"이미 존재하는 아이디입니다"}); 
    } else {
      // let hash = await bcrypt.hash(password, 9);
      let resultUser = await User.create({
        userid,
        username,
        password,
      });
      const accessToken = authService.signToken(resultUser.id)
      
  		res.json({ accessToken, id:resultUser.id })
    }
  } catch (err) {
    console.error(err);
  }
});

router.post("/login",async(req, res, next) => {
	const { userid, password } = req.body

  const user = await User.findOne({
    where: { userid, password }
  })

  if (!user) return res.status(401).json({ error: 'Login failure' })

  const accessToken = authService.signToken(user.id)
  
  res.json({ accessToken, id:user.id })
});

router.post('/logout',(req,res,next)=>{
  console.log('122222222222222222222222222222')
  res.json('logout성공')
});

router.put("/update",authService.ensureAuth(),async(req, res, next) => {
	const { id,password } = req.body

  if (!id) return res.status(400).json({error: 'no id'})

  const user = await User.findOne({
    where: { id }
  })
  if (!user) return res.status(404).json({error: 'no list'})

  user.password = password

  await user.save()

  res.json('비번변경성공')
});

module.exports = router;
