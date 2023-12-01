// common function
function areaCalculation(parameter1, parameter2){

}



document.getElementById('btn-triangle-area').addEventListener
('click', function(){
    // getting input1
    const input1Field = document.getElementById('triangle-b');
    const input1String = input1Field.value;
    const input1Value = parseInt(input1String);
    // getting input2
    const input2Field = document.getElementById('triangle-h');
    const input2String = input2Field.value;
    const input2Value = parseInt(input2String);
    // calculating area
    const areaTriangle = 0.5 * input1Value * input2Value;

    // setting area value into area calculation card
    const triangleAreaValueField = document.getElementById('triangle-area-value');
    triangleAreaValueField.innerText = areaTriangle;
})