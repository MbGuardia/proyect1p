const rep =(code)=>{
  var audio =document.querySelector('#'+code);
  if (!audio) return;
  audio.currentTime=0;
  audio.play();
}
