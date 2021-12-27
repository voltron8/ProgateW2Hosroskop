let teks ="Keberuntungan Anda hari ini adalah";
const randomNumber = (Date.now())%10;


function changeButton(obj) {
    //obj.innerHTML = randomNumber;
    switch (true) {
        case (randomNumber <5):
            //alert("less than five");
            //obj.innerHTML = "Mengerikan";
            document.getElementById("demo").innerHTML = teks+"Mengerikan";
            break;

        case (randomNumber <8):
            //alert("less than five");
            //obj.innerHTML = "Boleh Juga";
            document.getElementById("demo").innerHTML = teks+"Boleh Juga";
            break;
        case (randomNumber <9):
            //alert("less than five");
            //obj.innerHTML = "Hebat";
            document.getElementById("demo").innerHTML = teks +" Hebat ";
            break;

    }
    //obj.style.color = "red";
}