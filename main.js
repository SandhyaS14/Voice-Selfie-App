var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    if(Content == "take my selfie"){
    console.log("Taking your selfie ---");
    speak();
    }
}

function speak() {
    synth = window.speechSynthesis;

    speak_data = "taking selfie in 5 seconds"

    utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function() {
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src="+data_uri+">";
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}