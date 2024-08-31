let tl = gsap.timeline();
let divInDivs = document.querySelectorAll(".divInDiv");

tl.from(divInDivs[0], {
    height: "100%",
},"a")

tl.from(divInDivs[1], {
    height: "100%",
    delay : 0.1
},"a")

tl.from(divInDivs[2], {
    delay : 0.1,
    height: "100%",
},"a").from(".page1BottomLeft" , {
    opacity : 0 ,
    scale : .9,
    y : 20
} , "b").from(".page1DownloadBtn" , {
    scale : .3,
    opacity : 0,
    delay : .2
},"b").from(".navLeft" , {
    delay : .2, 
    y : 100,
},"b").from(".navRight" , {
    y : 100,
    delay : .2
},"b").from(".page1InsideInovation h4" , {
    y : 50,
},"c").from(".page1H1 h1" , {
    y : 200,
    delay : .2
},"c").from(".page1BtnCall" , {
    delay : .2,
    opacity : 0,
    scale:.4,
},"c")
