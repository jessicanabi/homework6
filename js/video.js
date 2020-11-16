var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	var x = document.querySelector("#volumeSlider").value;
	document.querySelector("#volume").innerHTML = x + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("Speed is " + video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
		video.play()
	}
	console.log("Current Location "+video.currentTime)
	video.play()
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = document.querySelector("#volumeSlider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	console.log("Volume is " + volumeSlider.value);
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
	console.log("In grayscale");


});


document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
	console.log("In grayscale");
});