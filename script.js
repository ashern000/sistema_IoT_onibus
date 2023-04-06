var windowX = 0;
const headerColor = document.querySelector("header");
const headerDivBlur = document.querySelector("header .blur")
const headerStyleOne = "background-color:transparent;border-bottom:none;";
const headerStyleTwo = "background-color:rgba(0,0,0,0.7);border-bottom:1px solid rgba(0,0,150,0.35);";
const headerStyleDivBlur = "filter:blur(3px); background-color:rgba(0,0,0,0.625);"
const headerStyleDivBlurTwo = "filter:blur(0px); background-color:rgba(0,0,0,0);"

addEventListener("scroll", ()=>{
    windowX = window.scrollY
    if(windowX < 549.3){
        headerColor.style.cssText =headerStyleOne; 
        headerDivBlur.style.cssText = headerStyleDivBlurTwo;

    }
    if (windowX > 550 && windowX < 1160) {
        headerColor.style.cssText = headerStyleTwo;
        headerDivBlur.style.cssText = headerStyleDivBlur;
    }
    if(windowX > 1179){
        headerColor.style.cssText = headerStyleOne;
        headerDivBlur.style.cssText = headerStyleDivBlurTwo;
    }
})

