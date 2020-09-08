/* const moveable = document.querySelector(".moveable")

moveable.onmousedown = function(){
    console.log("pressionado")

    move()

    moveable.onmouseup = function(){
        console.log("soltei")
        
        window.removeEventListener("mousemove", moving, false)
    }
    
}

function move(){
    window.addEventListener("mousemove", moving)
}

function moving(e) {
    document.getElementById("x-value").textContent = e.x
    document.getElementById("y-value").textContent = e.y
    
    let moveableX = moveable.offsetWidth
    let moveableY = moveable.offsetHeight
    
    let posX = e.x
    let posY = e.y
    
    let X = posX - (moveableX/2)
    let Y = posY - (moveableY/2)
    
    moveable.style.top = `${Y}px`
    moveable.style.left = `${X}px`
} */



const sizeCircle = document.querySelector(".sizeCircle")

sizeCircle.onmousedown = function(){
    console.log("pressionado")

    size()

    window.onmouseup = function(){
        window.removeEventListener("mousemove", sizing, false)
    }
    
}

function size(){
    window.addEventListener("mousemove", sizing)
}

function sizing(e) {

    let sizeRect = document.querySelector(".sizeRect")
    let sizeRectWidth = sizeRect.offsetWidth
    let sizeRectLeft = sizeRect.offsetLeft

    let sizeCircleWidth = sizeCircle.offsetWidth
        
    let mousePosX = e.x

    if(sizeRectLeft <= mousePosX){
        if(sizeRectLeft + sizeRectWidth >= mousePosX){
            sizeCircle.style.left = `${mousePosX - sizeRectLeft - sizeCircleWidth/2}px`
        }
    }
} 


const body = document.querySelector("body")
        const canvas = document.createElement("canvas")
        body.appendChild(canvas)
        canvas.style.width = "500px"
        canvas.style.height = "500px"
        const ctx = canvas.getContext("2d")

/* 
window.onclick = function(e){   
        ctx.clearRect(0, 0, 400, 400)
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(e.x, e.y, 10, 0, 2*Math.PI)
        ctx.stroke()
} */




