var not = document.getElementById('not');
var btn = document.getElementById('btn');
btn.addEventListener("click",chg);
function chg(){
    var name = document.getElementById("name").value;
    console.log(name);
    if(name === "Ritesh" || name==="Kaveri"){
        console.log("d44d");
        not.style.display="block";
        setTimeout(() => {
            not.style.display="none";
            }, 3000);
    }
    else{
        console.log("Fail");
    }
    }
