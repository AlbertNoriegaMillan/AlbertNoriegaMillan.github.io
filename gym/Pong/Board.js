class Board {
    
    constructor (w,h,c){
        this.w = w;
        this.h = h;
        this.c = c;
    }
    
    draw() {
        push()
        noStroke()
        fill(this.c)
        rect(0,0,this.w,this.h)
        pop()
        stroke('white')
        strokeWeight(5)
        line(floor(this.w/2),0,floor(this.w/2),this.h)
    }
    
}