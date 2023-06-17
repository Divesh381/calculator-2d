// console.log("hello");
// Function that display value
function dis(val) {
    document.getElementById("result").value += val
    console.log(val);
}
// const backCross=document.getElementById('#backCross');

// document.getElementsByTagName('#backCross')[0].onclick = function () {
//     var list = document.getElementById(val), item = list.lastElementChild;
//     list.removeChild(item);
// };

function myFunction(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '÷'
        || event.key == '%')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
        cal.onkeyup = function (event) {
            if (event.keyCode === 13) {
                // console.log("Enter");
                let x = document.getElementById("result").value
                // console.log(x);
                solve();
            }
        }
// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    // console.log(x);
    let y = math.evaluate(x)
    // console.log(y);
    document.getElementById("result").value = y
}

 // Function that clear the display
 function clr() {
    document.getElementById("result").value = ""

}


function sound(){
    var snd = new Audio('sound1.mp3')//wav is also supported
    snd.play()//plays the sound
}


// const audio = new Audio('sound1.mp3');
const buttons = document.querySelectorAll(".btn-calcu");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    sound();
    // audio.play();
  });
});