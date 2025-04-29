var typed = new Typed(".dev", {
    strings: ["Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let valueDisplay = document.querySelectorAll(".num");
let interval = 4000;

valueDisplay.forEach((value) => {
    let startValue = 0;
    let endValue = parseInt(value.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        value.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter)
        }
    }, duration);
})