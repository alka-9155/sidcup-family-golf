var cursor = document.querySelector(".cursor");
var cursorBg = document.querySelector(".cursorBg");
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursorBg.style.left = dets.x + "px";
    cursorBg.style.top = dets.y + "px";
})

var navItems = document.querySelectorAll(".nav h4,.nav img");
navItems.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        // cursor.style.transform = `translate(${-40+"px"},${-40+"px"})`;
        // cursor.style.height = 80+"px";
        // cursor.style.width = 80+"px";
        // cursor.style.backgroundColor = "transparent";
        // cursor.style.border = "2px solid #fff";
        cursor.style.scale = "3";
        cursor.style.backgroundColor = "transparent";
        cursor.style.border = "1px solid #fff";

    })
    val.addEventListener("mouseleave",function(){
        // cursor.style.transform = `translate(${0+"px"},${0+"px"})`;
        // cursor.style.height = 25+"px";
        // cursor.style.width = 25+"px";
        // cursor.style.backgroundColor = "#95C11E";
        // cursor.style.border = "none";
        cursor.style.scale = "1";
        cursor.style.backgroundColor = "#95C11E";
        cursor.style.border = "none";

    })
})

var elem = document.querySelectorAll(".page4 .elem h4");
var stroke = document.querySelector(".page4 h1");
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        stroke.style.webkitTextStroke = "2px #95C11E"
    })
    val.addEventListener("mouseleave",function(){
        stroke.style.webkitTextStroke = "2px #fff"
    })
})




gsap.to(".nav",{
    backgroundColor: "#000",
    height:100,
    duration:0.3,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        // markers: true,
        start:"top -5%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from(".aboutUs img, .aboutUs .aboutUsIn",{
    scale:0,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:".aboutUs",
        scroller:"body",
        scrub: 3,
        // markers:true,
        start: "top 70%",
        end: "top 69.9%",
    }
})

gsap.from(".card",{
    scale:0.7,
    opacity:0,
    duration: 1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        scrub: 2,
        // markers:true,
        start: "top 70%",
        end: "top 69.9%",
    }
})

gsap.from("#colon1",{
    top: "20%",
    left: "10%",
    duration:0.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 49.9%",
        scrub:3
    }
})
gsap.from("#colon2",{
    bottom: "20%",
    right: "10%",
    duration:1,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 48%",
        scrub:3
    }
})

gsap.from(".page4 h1",{
    y: 50,
    duration:1,
    scrollTrigger:{
        trigger:".page4 h1",
        scroller:"body",
        // markers:true,
        start: "top 99%",
        end: "top 95%",
        scrub:3
    }
})
