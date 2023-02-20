console.log("test");

function difference() {
    let difference1 = document.getElementById('age1').value;
    let difference2 = document.getElementById('age2').value;
    let finalDiff = difference1 - difference2;
    document.getElementById("howold").innerHTML = "Die Differenz ist: " + finalDiff;
}

