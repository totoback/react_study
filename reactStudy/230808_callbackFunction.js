//callbackFunction 콜백함수ㄴ
function checkMood (mood,goodCallBack,badCallBack){
  if(mood === "good"){
    //기분좋을떄
    goodCallBack()
  }else{
    //기분안좋을떄
    badCallBack()
  }
}
function cry (){
  console.log("Action :: CRY")
}
function sing(){
  console.log("Action :: SING")
}
function dance(){
  console.log("Action :: dance")
}
checkMood("good",sing,cry)