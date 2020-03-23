var multer  = require('multer')
var path=require('path');
var fs=require('fs');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log('req'+req)
    console.log('file'+file)
    cb(null, getPath()) // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
  }
})
function getPath(){
  console.log('엥')
  var newPath = path.join(__dirname,'../public/uploads/'); //makePath때매 1912 붙 ㅋ
  if(!fs.existsSync(newPath)){//존재하지않다면 폴더를 만들어랏!
    fs.mkdirSync(newPath);
  }
  return newPath; //1912라는 폴더를 만들어라! 1912는 makePath에서 만듬!
};
var allowExt = ['.mp3']//허용 선 수기 입력
var chkFile = (req,file,cb) => {//업로드하기 전 필터 작업
  var ext = path.extname(file.originalname).toLowerCase();
  
  if(allowExt.indexOf(ext) !== -1){
    req.isFileValidate = true;
    cb(null,true);
  }
  else{
    req.isFileValidate = false;
    cb(null,false);
  }
};
var upload = multer({ storage: storage, fileFilter : chkFile,limits:fieldSize='50mb' })
multer.m
module.exports={upload};