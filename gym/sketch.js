const p1 = {x:10, y:10}
const p2 = {x:1519, y:714}

const p3 = {x:1519, y:10}
const p4 = {x:10, y:714}

const p5 = {x:765, y:10}
const p6 = {x:765, y:714}

const p7 = {x:10, y:360}
const p8 = {x:1519, y:362}

function setup(){
createCanvas(windowWidth,windowHeight)
background('black')
}

function draw() {
    stroke("white")
    ecuacion(p1,p2)
    ecuacion2(p3,p4)
    ecuacion3(p5,p6)
    ecuacion4(p7,p8)
}



function ecuacion(p1,p2){   
    const dx = p2.x - p1.x
    const dy = p2.y - p1.y
    
    const m = dy / dx
    const b = p1.y - m * p1.x
    
    point(p1.x, p1.y)
    
    let x = p1.x + 1
    let y
    while (x != p2.x){
        y = m*x+b
        point (x,y)
        x++
    }
}



function ecuacion2(p3,p4)
{
    const dx = p4.x - p3.x
    const dy = p4.y - p3.y
    
    const m = dy / dx
    const b = p3.y - m * p3.x
    
    point(p3.x, p3.y)
    
    let x = p3.x + 1
    let y
    while (x != p4.x){
        y = m*x+b
        point (x,y)
        x--
    }
}

function ecuacion3(p5,p6){   
    const dx = p6.x - p5.x
    const dy = p6.y - p5.y
    
    const m = dy / dx
    const b = p5.y - m * p5.x
    //const p5 = {x:759, y:10}
    //const p6 = {x:759, y:714}
    point(p5.x, p5.y)
    
    let x
    let y = p5.y + 1
    //NO APLICA POR QUE NO SE SACA DELTA NUM IGUALES EN X 
    //x = m*x+b
    while (y != p6.y){
        point (p5.x,y)
        y++
    }
}

function ecuacion4(p7,p8){   
    const dx = p8.x - p7.x
    const dy = p8.y - p7.y
    
    const m = dy / dx
    const b = p7.y - m * p7.x
    //const p5 = {x:759, y:10}
    //const p6 = {x:759, y:714}
    point(p7.x, p7.y)
    
    let x = p7.x + 1
    let y 
    //NO APLICA POR QUE NO SE SACA DELTA NUM IGUALES EN y 
    //x = m*x+b
    while (x != p8.x){
        point (x,p8.y)
        x++
    }
}
