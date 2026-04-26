const logoBase64 = "data:image/jpeg;base64,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";

document.getElementById("logoImg").src = logoBase64;

// EQUIPMENT LIST
const equipmentList = [

"IDT",
"RMU",
"RIO PANEL",
"UPS & BATTERIES",

"INVERTER-01","INVERTER-02","INVERTER-03","INVERTER-04",
"INVERTER-05","INVERTER-06","INVERTER-07","INVERTER-08",

"INV-01-DCB-01","INV-01-DCB-02","INV-01-DCB-03","INV-01-DCB-04","INV-01-DCB-05",
"INV-02-DCB-01","INV-02-DCB-02","INV-02-DCB-03","INV-02-DCB-04","INV-02-DCB-05",
"INV-03-DCB-01","INV-03-DCB-02","INV-03-DCB-03","INV-03-DCB-04","INV-03-DCB-05",
"INV-04-DCB-01","INV-04-DCB-02","INV-04-DCB-03","INV-04-DCB-04","INV-04-DCB-05",
"INV-05-DCB-01","INV-05-DCB-02","INV-05-DCB-03","INV-05-DCB-04","INV-05-DCB-05",
"INV-06-DCB-01","INV-06-DCB-02","INV-06-DCB-03","INV-06-DCB-04","INV-06-DCB-05",
"INV-07-DCB-01","INV-07-DCB-02","INV-07-DCB-03","INV-07-DCB-04","INV-07-DCB-05",
"INV-08-DCB-01","INV-08-DCB-02","INV-08-DCB-03","INV-08-DCB-04","INV-08-DCB-05",

"NCU-01","NCU-02",
"PD BOX"

];


// PAGE LOAD
window.onload = function(){

const eq = document.getElementById("equipmentSelect");

equipmentList.forEach(e => {

let option = document.createElement("option");
option.text = e;
eq.add(option);

});

updateMVPS();

};


// PHASE → MVPS UPDATE
function updateMVPS(){

let phase = document.getElementById("phase").value;
let mvps = document.getElementById("mvps");

mvps.innerHTML="";

let max=72;

if(phase==="B") max=48;
if(phase==="C") max=96;

for(let i=1;i<=max;i++){

let num=i.toString().padStart(2,'0');

let opt=document.createElement("option");
opt.text=num;

mvps.add(opt);

}

}



// LOAD CHECKLIST


function loadChecklist(){



let eq=document.getElementById("equipment").value;

document.getElementById("checklistTitle").innerText =
eq + " - Preventive Maintenance Checklist";


// REMOVE BATTERY SECTION IF EXISTS
const batterySection = document.getElementById("batterySection");
if (batterySection) {
    batterySection.remove();
}

// MAP EQUIPMENT NAME
let type=eq;

if(type.includes("INVERTER")) type="INVERTER";
if(type.includes("IDT")) type="IDT";
if(type.includes("RMU")) type="RMU";
if(type.includes("RIO")) type="RIO_PANEL";
if(type.includes("UPS")) type="UPS_BATTERIES";
if(type.includes("NCU")) type="NCU";
if(type.includes("PD")) type="PD_BOX";


// TABLE RESET
const table=document.getElementById("checklistTable");

table.innerHTML=`

<tr>
<th>Sr No</th>
<th>Check Point</th>
<th>Requirement</th>
<th>Frequency</th>
<th>Remarks</th>
</tr>
`;


// LOAD DATA
let data=checklistDB[type];

if(!data){

alert("No checklist found for "+type);
return;

}



// CREATE ROWS
data.forEach(item=>{

table.innerHTML+=`

<tr>

<td>${item.sr}</td>
<td>${item.check}</td>
<td>${item.req}</td>
<td>${item.freq}</td>

<td><input style="width:100%"></td>

</tr>

`;

});


// UPS BATTERY TABLE
if(type==="UPS_BATTERIES"){

let batteryTable = `

<div id="batterySection">

<br>

<h3 style="text-align:center">Battery Voltage Measurements</h3>

<table border="1" style="width:100%;text-align:center">

<tr>
<th>Battery No</th>
<th>B-1</th>
<th>B-2</th>
<th>B-3</th>
<th>B-4</th>
<th>B-5</th>
<th>B-6</th>
<th>B-7</th>
<th>B-8</th>
</tr>

<tr>

<td>Volts</td>

<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>

</tr>

</table>

<br>

<table border="1" style="width:100%;text-align:center">

<tr>
<th>Battery No</th>
<th>B-9</th>
<th>B-10</th>
<th>B-11</th>
<th>B-12</th>
<th>B-13</th>
<th>B-14</th>
<th>B-15</th>
<th>B-16</th>
</tr>

<tr>

<td>Volts</td>

<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>
<td><input style="width:70px"></td>

</tr>

</table>

</div>

`;

document.getElementById("checklistTable").insertAdjacentHTML("afterend", batteryTable);

}

}

function convertInputsToText(){

let inputs=document.querySelectorAll("#report input");

inputs.forEach(input=>{

let span=document.createElement("span");
span.innerText=input.value;

span.style.padding="3px";

input.style.display="none";
input.parentNode.appendChild(span);

});

}

function restoreInputs(){

let spans=document.querySelectorAll("#report span");

spans.forEach(span=>{

let parent=span.parentNode;
let input=parent.querySelector("input");

if(input){

input.style.display="inline-block";

}

span.remove();

});

}

document.getElementById("techSign").addEventListener("change",function(){

let file=this.files[0];

if(file){

let reader=new FileReader();

reader.onload=function(e){

let img=document.createElement("img");

img.src=e.target.result;
img.style.height="40px";

document.getElementById("techSign").parentNode.appendChild(img);

}

reader.readAsDataURL(file);

}

});

// PDF GENERATION

async function generatePDF(){

const { jsPDF } = window.jspdf;

let report = document.getElementById("report");

let phase = document.getElementById("phase").value;
let mvps = document.getElementById("mvps").value;
let equipment = document.getElementById("equipment").value;
let equipId = document.getElementById("equipId").value;

// hide input borders
document.querySelectorAll("#report input,#report select").forEach(el=>{
el.style.border="none";
});

try{

const canvas = await html2canvas(report,{
scale:4,
useCORS:true,
backgroundColor:"#ffffff",
scrollY:-window.scrollY
});

const imgData = canvas.toDataURL("image/png");

const pdf = new jsPDF("landscape","mm","a4");

const pageWidth = 297;
const pageHeight = 210;

const imgWidth = pageWidth;
const imgHeight = canvas.height * imgWidth / canvas.width;

let heightLeft = imgHeight;
let position = 20; // leave space for logo

// ADD LOGO FIRST
pdf.addImage(logoBase64,"PNG",10,5,40,15);

// ADD PAGE IMAGE
pdf.addImage(imgData,"PNG",0,position,imgWidth,imgHeight);

heightLeft -= pageHeight;

while(heightLeft > 0){

position = heightLeft - imgHeight + 20;

pdf.addPage();

pdf.addImage(logoBase64,"PNG",10,5,40,15);

pdf.addImage(imgData,"PNG",0,position,imgWidth,imgHeight);

heightLeft -= pageHeight;

}

let filename = `Phase-${phase}_MVPS-${mvps}_${equipment}_${equipId}.pdf`;

pdf.save(filename);

}catch(err){

alert("PDF generation failed: "+err);

}

// restore borders
document.querySelectorAll("#report input,#report select").forEach(el=>{
el.style.border="";
});

}