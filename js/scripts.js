 function myFunction() {
    var value =[
    parseInt(document.getElementById("value1").value),
    parseInt(document.getElementById("value2").value),
    parseInt(document.getElementById("value3").value)
     ];
    if  (value[0]+value[1] > value[2] &&
         value[0]+ value[2]>value[1] && 
         value[1]+value[2]>value[0]){
        if (value[0]===value[1] && 
            value[0]===value[2] && 
            value[1]===value[2]){
            alert("equilateral triangle");
        }
        else if (value[0]===value[1]||
            value[0]===value[2]||
            value[1]===value[2]){
            alert("isoceles triangle");
        }
        else {
            alert("scalene triangle")
        }
    }
       
    else {
        alert("Not a triangle");
    } 
}
