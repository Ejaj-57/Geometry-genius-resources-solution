// common function


// common function for calculate button
function buttonCalculate(elementId, parameter1, parameter2){
    document.getElementById(elementId).addEventListener('click', function(parameter1, parameter2){
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
    })
}
