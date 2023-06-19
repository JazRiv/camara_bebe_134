list = [];
estado = false;

function setup(){
    canvas = createCanvas(400, 300);
    background("pink");
    video = createCapture(VIDEO);
    video.hide();
    modelo = ml5.objectDetector("cocosd", listo);
    canvas.center();
}

function preload(){
    alarma = loadSound("danger_sms.mp3");
}

function draw(){
    image(video, 0, 0, 400, 300);
    if (estado == true){
        modelo.detect(canvas, show);
        for (var contador = 0; contador<list.length; contador = contador + 1){
            noFill();
            stroke("red");
            strokeWeight(5);
            var object = list[0];
            rect(object.x, object.y, object.width, object.height);
            bebe = object.label;
            alarma.stop();
            if (bebe == "person"){
                document.getElementById("estado").innerHTML = "Se encontro al bebé";
            } else {
                document.getElementById("estado").innerHTML = "Bebé no detectado";
                alarma.play();
                alarma.setVolume(0.3);
            }
        } 
    }
}

function listo(){
    console.log("3 2 1 Despege");
    estado = true;
}

function show(error, answer){
    if(!error){
        console.log(answer);
        list = answer;
    }
}

