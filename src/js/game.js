console.log("game.js loaded sucessfully!!!");

const canvasElm =  document.createElement('canvas');
canvasElm.id = "tela";
canvasElm.style = "background-color:yellow";
console.log(canvasElm);
document.body.appendChild(canvasElm);


let viewPortWidth = null;
let viewPortHeight = null;

function detectViewportSize(){
    //https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
    if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
        viewPortWidth = window.innerWidth;
        viewPortHeight = window.innerHeight;
    } else {  
        viewPortWidth = document.documentElement.clientWidth;
        viewPortHeight = document.documentElement.clientHeight;
    }
}
function resizeCanvas(vpWidth, vpHeight,){
    canvasElm.width = vpWidth;
    canvasElm.height = vpHeight;
}
detectViewportSize();
resizeCanvas(viewPortWidth,viewPortHeight);

document.body.addEventListener("onresize", function() {
    detectViewportSize();
    resizeCanvas();
});



let larguraDaTela = window.innerWidth;
let alturaDaTela = window.innerHeight;
let larguraDoCanvas = window.innerWidth;
let alturaDoCanvas = window.innerHeight;     
    
var tela = document.querySelector("#tela");
tela.width = larguraDoCanvas;
tela.height = alturaDoCanvas;
console.log(tela);
    
    
function  getX(x){
    return (x/100) * larguraDaTela;
}

function  getY(y){
    return (y/100) * alturaDaTela;;
}

let pincel = tela.getContext("2d");
let confere=0;
let contagem = 0;

//faz o quadrado sumir
function limpaQuadrado() {
    pincel.clearRect(getX(79.5), getY(0.56), getX(16.7), getY(28.5));
    confere=confere+1;
}

//faz o retangulo sumir
function limpaRetangulo(){
    pincel.clearRect(getX(79.4),getY(69.8),getX(17),getY(29));
    confere=confere+1;
}
//faz o circulo sumir
function limpaCirculo() {
    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(getX(10), getY(15),getY(16), 0, 2*Math.PI);
    pincel.fill();
    confere=confere+1;
}
//faz o triangulo sumir
function limpaTriangulo(){
    pincel.clearRect(getX(1.2667),getY(58),getX(10.9333), getY(83.8333))
    confere=confere+1;    
}
//desenha quadrado
function quadrado(){
    pincel.fillStyle="green"; //cor
    pincel.fillRect(getX(80), getY(0.6),getX(16), getY(28) );
}


//desenha retangulo
function retangulo(){
    pincel.fillStyle="purple"; // cor
    pincel.fillRect(getX(79.5),getY(70),getX(16),getY(20));
}
//desenha circulo
function circulo(){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(getX(10), getY(15),getY(15), 0, 2*Math.PI);
    pincel.fill();
}

function AreaTriangulo(){
    var  ABX= getX(11)-getX(4);
    var ABY= getY(50)-getY(80);
    var ACX= getX(11)-getX(19);
    var ACY= getY(50)-getY(80);
    var BCX= getX(4)-getX(19);
    var BCY= getY(80)-getY(80);    
}
//desenha triangulo
function triangulo(){
    pincel.fillStyle="gray";
    pincel.beginPath();
    pincel.moveTo(getX(6), getY(58.3333));
    pincel.lineTo(getX(1.3333333333333333), getY(83.33333333333333));
    pincel.lineTo(getX(10.666666666666666), getY(83.33333333333333));
    pincel.fill();
}
function tempo(){		
    if(confere < 4){	
	contagem=contagem+1;
    	var str = document.getElementById("tempo").innerHTML;
    	var res = str.replace(contagem-1, contagem);
    	document.getElementById("tempo").innerHTML = res;
    }    
}

function disparacirculo(evento) {
    
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    
    var distanciaX=getX(10)-x;
    var distanciaY=getY(15)-y;
    var d=(distanciaY*distanciaY)+(distanciaX*distanciaX);
    var raizd=Math.sqrt(d);
    
    
    if(raizd <= getY(15)){
        limpaCirculo();
    }else{
        if((x > getX(80))
           &&(x < getX(96))
               &&(y>getY(0.55))
               &&(y
		  <getY(28.9))){
            	limpaQuadrado();
            	
            }else{
            	if((x>getX(79.4))
            	   &&(x
		      <getX(95))
            	   &&(y>getY(69.7))
            	   &&(y
		      <getY(90))){
		    
            	    limpaRetangulo();
            	    
            	}else{
            	    if((x>getX(1.2667))
            	       &&(x
			  <getX(10.6))
            	       &&(y>getY(80.8333))
            	       &&(y
			  <getY(83.3333))
            	       ||(x>getX(2.1))
            	       &&(x
			  <getX(9.6667))
            	       &&(y>getY(77.5))
            	       &&(y
			  <getY(80.8333))
            	       ||(x>getX(2.3))
            	       &&(x
			  <getX(8))
            	       &&(y>getY(75))
            	       &&(y
			  <getY(77.5))
            	       ||(x>getX(3.2))
            	       &&(x
			  <getX(8.5667))
            	       &&(y>getY(70))
            	       &&(y
			  <getY(75))
            	       ||(x>getX(4.1333))
            	       &&(x
			  <getX(7.7333))
            	       &&(y>getY(65))
            	       &&(y
			  <getY(70))
            	       ||(x>getX(5.1667))
            	       &&(x
			  <getX(6.6667))
            	       &&(y>getY(60))
            	       &&(y
			  <getY(65))
            	       ||(x>getX(5.7333))
            	       &&(x
			  <getX(6.0667))
            	       &&(y>getY(58.1667))
            	       &&(y
			  <getY(60)))
            	    {
                        console.log(x);
			console.log(y);
                        console.log("olá");
            		limpaTriangulo();
            		
            	    }
            	    
            	}
            	
            }
        }  
    }
    
    //conta os segundos
    setInterval(tempo, 1000);
    //chama as funções que desenham os objetos
    circulo();
    triangulo();
    quadrado();
    retangulo();
    //ativar evento com o double click
    tela.ondblclick = disparacirculo
    


