// pod management 

let podTotal = 3; 

function drawPods(){
const g=document.getElementById("pods");
g.innerHTML="";
for(let i=0;i<podTotal;i++){
let x=200+i*110;
g.innerHTML+=`<rect class="pod" x="${x}" y="470" width="80" height="40" rx="10"></rect>
<text x="${x+40}" y="495" text-anchor="middle" fill="white">Pod</text>`;
}
document.getElementById("podCount").innerText=podTotal;
}

function scaleUp(){podTotal++;drawPods();}
function scaleDown(){if(podTotal>1)podTotal--;drawPods();}

drawPods();