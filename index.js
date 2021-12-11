//Author: Gabby

//declaring array for inserted points
const enteredPoints = [];

//running the graph lines with segments
var c = document.getElementById("cumulatedView");
var ctx = c.getContext("2d");
ctx.lineWidth = 1;  // used for all paths
ctx.strokeStyle = "red";
ctx.fillStyle = "orange";
ctx.font = "15px Arial";


// building y axys and notation
ctx.beginPath();
ctx.fillText("20", 130, 23);
ctx.fillText("Y", 103, 24);
ctx.fillText("-10", 130, 323);
ctx.fillText("Y", 100, 324);
ctx.moveTo(120, 20);
ctx.lineTo(120, 320);
ctx.stroke();

// building x axys and notation
ctx.beginPath();
ctx.fillText("-10", 6, 210);
ctx.fillText("X", 14, 240);
ctx.fillText("20", 312, 210);
ctx.fillText("X", 315, 240);
ctx.moveTo(20, 220);
ctx.lineTo(320, 220);
ctx.stroke();



//building x and y graph segments
for (let i = 2; i < 33; i++) {
    //x
    ctx.beginPath();
    ctx.moveTo(i * 10, 215);
    ctx.lineTo(i * 10, 225);
    ctx.stroke();
    //y
    ctx.beginPath();
    ctx.moveTo(115, i * 10);
    ctx.lineTo(125, i * 10);
    ctx.stroke();
}


function PointLocation(x,y){
    this.y = (parseInt(x)*10) + 120;
    this.x = 220 - (y*10);
}

function Coordonates (PointS, PointF){
    this.PointS = PointS;
    this.PointF = PointF;
    this.CreateLine = function () {
        var c = document.getElementById("cumulatedView");
        var ctx = c.getContext("2d");
        // set line width
        ctx.lineWidth = 1; 
        //draw line
        ctx.beginPath();
        ctx.strokeStyle = "yellow";
        ctx.moveTo(Object.values(PointS)[0], Object.values(PointS)[1]);
        ctx.lineTo(Object.values(PointF)[0], Object.values(PointF)[1]);
        ctx.stroke();
    }
}

function circle(){
    var c = document.getElementById("cumulatedView");
    var ctx = c.getContext("2d");
    // set line width
    ctx.lineWidth = 1;
    //draw line
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.arc(225, 125, 50, 0, 2 * Math.PI);
    ctx.stroke();
    
}
//extracting data
function extractData(){
    const x = document.getElementById("x").value;
    const y = document.getElementById("y").value;
    const x1 = document.getElementById("x1").value;
    const y1 = document.getElementById("y1").value;
    if (x == "" || y == "" || x1 == "" || y1 == ""){
        document.getElementById("points").innerHTML = "OOPS! " + "<br>"+ "One of the values are empty, please check try again!";
    }
    else if (x > 23 || x < -13 || y > 23 || y < -13 || x1 > 23 || x1 < -13 || y1 > 23 || y1 < -13 ) {
        document.getElementById("points").innerHTML = "OOPS! " + "<br>" + "One of the values are outside the limits, please check try again!";
    }
    else {
        const back = [x, y, x1, y1];
        return back;
    }
   
}


function add(){
    const data = extractData();
    //creating points objects
    const pointA = new PointLocation(data[0], data[1]);
    const pointB = new PointLocation(data[2], data[3]);
    //creating Coordonates object to draw the lines
    const line = new Coordonates(pointA, pointB);
    line.CreateLine();
}



function printPoints() {
    const data = extractData();
    const a = [];
    const a1 = [];
    a.push(data[0], data[1]);
    a1.push(data[2], data[3]);
    enteredPoints.push("Start Point : " + a + "<br>" + "Finish Point : " + a1 + "<br>");
    //printing the points inserted
    document.getElementById("points").innerHTML = enteredPoints;
}


