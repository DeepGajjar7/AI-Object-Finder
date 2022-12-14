var song="";
var model_status="";
var objects=[];

function preload(){

}

function setup(){ 
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();
    video.size(380,380);
}

function start(){
    objectdetector=ml5.objectDetector('cocossd',modeloaded)
    document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
  image(video,0,0,380,380);
    if (model_status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectdetector.detect(video,gotresults)
        for (i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: objects detected";
     
        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill();
            stroke(r,g,b)
            var object=document.getElementById("object").value;
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            if (objects[i].label==object){
                document.getElementById("number_of_objects").innerHTML="object found"
            }
            else{
                document.getElementById("number_of_objects").innerHTML="object not found"
            }
            }
    }
}

function modeloaded(){
    console.log("model is loaded");
    model_status="true";
}

function gotresults(error,results){
    if(error){
        console.log(error)
    }

    else{
        console.log(results)
        objects=results;
    }
}













