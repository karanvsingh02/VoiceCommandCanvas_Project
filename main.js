x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apple = "";
var i=0;

function preload(){
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening. Please say the number of apples to be drawn";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = Number(content);
    console.log ("The speech has been recognized: " + content);
    console.log ("The speech has been recognized: " + to_number);

    if(Number.isInteger(to_number)){
      document.getElementById("status").innerHTML = "Started drawing apple";
      draw_apple = "set";
    }else{
      document.getElementById("status").innerHTML = "The app has not recognized a number. Please try again.";
    }

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width, screen_height-150)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    
  }
  for( i=0 ; i < to_number; i++){
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
    console.log(" the value of i is " +i);
  }
  speak();
  draw_apple = "";
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}
