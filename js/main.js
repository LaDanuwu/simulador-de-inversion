function inversion() {
    let contPost = document.querySelector(".post-simulation");
    let contPre = document.querySelector(".pre-simulation");

    // Guardo al input, y con el value agarro el valor
    let cNombres = document.getElementById("nombres").value;
    let cTelefono = document.querySelector("#telefono").value;
    let cEmail = document.querySelector("#email").value;
    let cMonto = document.getElementById("inversion").value;
    let cTiempo = document.querySelector("#tiempo").value; 

    contPost.classList.remove("disabled");
    contPre.classList.add("disabled");

    // Cambiar texto ya escrito
    document.querySelector("#nombres-show").innerHTML = cNombres;
    document.getElementById("email-show").innerHTML = cEmail;

    switch(cTiempo) {
        // En el caso de que el valor de cTiempo sea 1
        case "1":
            // Cambiar texto innerHTML
            document.querySelector("#tiempo-show").innerHTML = "12 Meses";
            document.querySelector("#interes-show").innerHTML = "0.8%";

            let g = cMonto * 0.096;
            let gTot = g + parseInt(cMonto);

            document.querySelector("#total-show").innerHTML = gTot;
            document.querySelector("#ganancia-show").innerHTML = g;

            // Para terminar las instrucciones del caso 1
            break;
        case "2":
            document.querySelector("#tiempo-show").innerHTML = "24 Meses";
            document.querySelector("#interes-show").innerHTML = "1.3%";

            let g2 = cMonto * 0.312;
            let gTot2 = g2 + parseInt(cMonto);

            document.querySelector("#total-show").innerHTML = gTot2;
            document.querySelector("#ganancia-show").innerHTML = g2;

            break;
        case "3":
            document.querySelector("#tiempo-show").innerHTML = "36 Meses";
            document.querySelector("#interes-show").innerHTML = "1.7%";

            let g3 = cMonto * 0.612;
            let gTot3 = g3 + parseInt(cMonto);

            document.querySelector("#total-show").innerHTML = gTot3;
            document.querySelector("#ganancia-show").innerHTML = g3;

        default:
            break;
    }

    // alert ("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);
    // console.log("Bienvenido usuario " + cNombres + " Su telefono es: " + cTelefono);

    // let i = 100;
    // while (i >= 0){
    //     console.log(i);
    //     alert (i);
    //     i--;
    // }


}