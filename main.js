canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

nasa_images=["1.jpg","2.jpg","3.jpg","4.jpg","mars.jpg"];
random=Math.floor(Math.random()*5);
console.log(random);



background_image=nasa_images[random];
rover_image="rover.png";

function add(){

bg_img= new Image();
bg_img.onload= uploadbackground;
bg_img.src=background_image;

rover_img= new Image();
rover_img.onload=uploadrover;
rover_img.src=rover_image;
}


function  uploadbackground(){
ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){

keypressed=e.keyCode;
console.log(keypressed);

if(keypressed == '37'){
    left();
console.log("left is presseds");

}

if(keypressed == '38'){
    up();
console.log("up is presseds");
}

if(keypressed == '39'){
    right();
console.log("right is presseds");
}

if(keypressed == '40'){
    down();
console.log("down is presseds");
}

}

function up(){
    if(rover_y>0){
rover_y=rover_y-10;
console.log("X= "+rover_x+" Y="+rover_y);
uploadbackground();
uploadrover();
}
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("X= "+rover_x+" Y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>0){
rover_x=rover_x-10;
console.log("X= "+rover_x+" Y="+rover_y);
uploadbackground();
uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("X= "+rover_x+" Y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}