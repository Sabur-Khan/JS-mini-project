function Total(){
    var sub1 = parseInt(document.getElementById("bang").value);
    var sub2 = parseInt(document.getElementById("eng").value);
    var sub3 = parseInt(document.getElementById("mat").value);
    if(sub1 > 100 || sub2 > 100 || sub3 > 100){
        alert("Ostad Apne number basi decan");
    }else{
        var totals = sub1 + sub2 + sub3;
        document.getElementById("total").innerHTML = "Bangla Marks: "+sub1+"<br> English Marks: "+sub2+"<br> Math Marks: "+sub3+"<br> Total Marks "+totals;
    }
}
function Avrage(){
    var sub1 = parseInt(document.getElementById("bang").value);
    var sub2 = parseInt(document.getElementById("eng").value);
    var sub3 = parseInt(document.getElementById("mat").value);
    if(sub1 > 100 || sub2 > 100 || sub3 > 100){
        alert("Ostad Apne number basi decan");
    }else{
        var avg = sub1 + sub2 + sub3;
        var totalAvg = avg / 5;
        document.getElementById("avrage").innerHTML = "Total Point: "+ totalAvg;
    }
}
function Grade(){
    var sub1 = parseInt(document.getElementById("bang").value);
    var sub2 = parseInt(document.getElementById("eng").value);
    var sub3 = parseInt(document.getElementById("mat").value);

    if(sub1 > 100 || sub2 > 100 || sub3 > 100){
        alert("Ostad Apne number basi decan");
        
    }
    else{
        var totalAvgs = sub1 + sub2 + sub3;
        var totals = totalAvgs / 5;

        if (totals >= 80 && totals <= 100) {
            document.getElementById("grade").innerHTML = "You Got A+ Grade";
        }
        else if (totals >= 75 && totals <= 80) {
            document.getElementById("grade").innerHTML = "You Got A+ Grade";
        }
        else if (totals >= 70 && totals <= 75) {
            document.getElementById("grade").innerHTML = "You Got A Grade";
        }
        else if (totals >= 65 && totals <= 70) {
            document.getElementById("grade").innerHTML = "You Got B Grade";
        }
        else if (totals >= 50 && totals <= 60) {
            document.getElementById("grade").innerHTML = "You Got C Grade";
        }
        else if (totals >= 40 && totals <= 50) {
            document.getElementById("grade").innerHTML = "You Got C Grade";
        }

        else {
            document.getElementById("grade").innerHTML = "You Got F Grade";
        }
    }
}