function preload(){
   img1= loadImage("1.jpg");
    img2= loadImage("2.jpg");
    img3= loadImage("3.jpg");
    img4= loadImage("4.jpg");

}

function setup(){

    Canvas=createCanvas(600,480);
    Canvas.position(400,250);
    Vid=createCapture(VIDEO);
    Vid.hide();

}

function draw(){

    image(Vid,0,0,600,480);
    image(img1,0,0,100,480);
    image(img2,500,0,100,480);
    image(img3,1,2,600,100);
    image(img4,1,450,600,50);

    

}

function take_snapshot(){

    save('birthdayframe.png');

}
