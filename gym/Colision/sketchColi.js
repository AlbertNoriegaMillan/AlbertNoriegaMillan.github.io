/////pelotas al azar
let ball
let ballp
let colicion
let color
let id=0
var lista=[];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('gray');

}

function draw() {


	colision();

}
function colision() {
	lista.forEach(function(i){
    	ballp=i;
    	ballp.draw();
    	ballp.move();
    	
    	lista.forEach(function(i){
			colicion=i;

			if (ballp.getId != colicion.getId) {
				
				if ((ballp.posX>=colicion.posX && ballp.posX<=colicion.posX+40) && (ballp.posY>=colicion.posY && ballp.posY<=colicion.posY+40)) {
    				ballp.cambiarDireccion();
    				colicion.cambiarDireccion()
    				console.log('coliciono id= '+ ballp.getId + 'con id= ' + colicion.getId)
    				console.log('coliciono x= '+ ballp.posX + 'con y= ' + ballp.posY + '//// x= '+ colicion.posX + 'con y= ' + colicion.posY)
    			
    			}else{

    			}
			}else{

			}
    		
    	
		});
    	
	});
}

function mousePressed () {
	
	ball = new Ball(floor(Math.random() * windowWidth),floor(Math.random() * windowHeight),getRandomColor(),floor(windowWidth),floor(windowHeight),id)
	lista.push(ball);
	id+=1
	

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}