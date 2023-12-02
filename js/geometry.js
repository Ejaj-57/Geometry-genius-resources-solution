// common function
function areaCalculation(parameter1, parameter2){
// getting input1
const input1Field = document.getElementById(parameter1);
const input1String = input1Field.value;
const input1Value = parseInt(input1String);
// getting input2
const input2Field = document.getElementById(parameter2);
const input2String = input2Field.value;
const input2Value = parseInt(input2String);

// multiply
const commonArea = input1Value * input2Value;
return commonArea;
}



document.getElementById('btn-triangle-area').addEventListener
('click', function(){
    // calculating triangle area
    const commonAreaTriangle = areaCalculation('triangle-b', 'triangle-h');
    const areaTriangle = 0.5 * commonAreaTriangle;
   
    
   
    // setting area value into area calculation card
    const triangleAreaValueField = document.getElementById('triangle-area-value');
    triangleAreaValueField.innerText = areaTriangle;
})

 // calculating area of rectangle
 document.getElementById('btn-rectangle-area').addEventListener('click', function(){
    const areaRectangle = areaCalculation('rec-w', 'rec-l');
    console.group(areaRectangle);

    // setting area value into area calculation card
    const rectangleAreaNameField = document.getElementById('shapeName');
    rectangleAreaNameField.innerText = 'Area of Rectangle = ';
    const rectangleAreaValueField = document.getElementById('resultValue');
    rectangleAreaValueField.innerText = areaRectangle;
 }) 
 


 // calculating area of Paralallogram  
 document.getElementById('btn-parallelogram-area').addEventListener('click', function(){
    const areaParallalogram = areaCalculation('para-b', 'para-h');
    console.log(areaParallalogram)
 }) 


 // calculating area of Rhombus
 document.getElementById('btn-rhombus-area').addEventListener('click', function(){
    const commonAreaRhombus = areaCalculation('rhom-d1', 'rhom-d2');
 const areaRhombus = 0.5 * commonAreaRhombus;
 console.log(areaRhombus)
 })   



 // calculating area of Pentagon
 document.getElementById('btn-pentagon-area').addEventListener('click', function(){
    const commonAreaPentagon = areaCalculation('pent-p', 'pent-b');
    const areaPentagon = 0.5 * commonAreaPentagon;
    console.log(areaPentagon)
 })   



 // calculating area of Ellipse
 document.getElementById('btn-ellipse-area').addEventListener('click', function(){
    const commonAreaEllipse = areaCalculation('ell-a', 'ell-b');
 const areaEllipse = 3.14 * commonAreaEllipse;
 console.log(areaEllipse);
 })   


//  setting calculated result by Id 

 