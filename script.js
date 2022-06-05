var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.addEventListener("click",play);

function play(){
	if(mySong.paused){
		mySong.play();
			icon.src = "media/pause.png"
	}else{
		mySong.pause();
		icon.src = "media/play.png"
	}
}