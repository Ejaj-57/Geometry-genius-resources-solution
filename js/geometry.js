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
    const commonAreaTriangle = areaCalculation('triangle-b', 'triangle-h');
    console.log(commonAreaTriangle);

    // calculating area
    const areaTriangle = 0.5 * commonAreaTriangle;

    // setting area value into area calculation card
    const triangleAreaValueField = document.getElementById('triangle-area-value');
    triangleAreaValueField.innerText = areaTriangle;
})