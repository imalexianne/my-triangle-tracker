 function myFunction() {
    var value =[
    parseInt(document.getElementById("value1").value),
    parseInt(document.getElementById("value2").value),
    parseInt(document.getElementById("value3").value)
     ];
     console.log(value);
    if  (value[0]+value[1] > value[2] &&
         value[0]+ value[2]>value[1] && 
         value[1]+value[2]>value[0]){
        if (value[0]===value[1] && 
            value[0]===value[2] && 
            value[1]===value[2]){
            console.log("equilateral triangle");
            alert("equilateral triangle");
        }
        else if (value[0]===value[1]||
            value[0]===value[2]||
            value[1]===value[2]){
            console.log("isoceles triangle");
            alert("isoceles triangle");
        }
        else {
            console.log("scalene triangle");
            alert("scalene triangle");
        }
    }
       
    else {
        console.log("Not a triangle");
        alert("Not a triangle");
    } 
}
