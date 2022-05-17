const url = `https://flowing-blowfish-70.hasura.app/api/rest/especies`;

function openPopUp(idByState){
    document.getElementById("pop-up").style.display="block";
    var id = idByState
    fetch(url).then((res1) => {
        if (res1.status != "200") {
            console.log(res1);
        }
        else {
            return res1.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let animalImg = data.DatosEspecies[id].img; 
            Imge(animalImg); 
            let animalname = data.DatosEspecies[id].nombrecm;
            document.getElementById("nombreAnimal").innerHTML = animalname;

            let animalnamesc = data.DatosEspecies[id].nombresc; 
            document.getElementById("nombreCientifico").innerHTML = animalnamesc;

            let animalcat = data.DatosEspecies[id].categoria;  
            document.getElementById("categoria").innerHTML = animalcat;

            let animaldist = data.DatosEspecies[id].distribucion; 
            document.getElementById("distribucion").innerHTML = animaldist; 

            let animalend = data.DatosEspecies[id].endemico;  
            document.getElementById("endemico").innerHTML = animalend;

            let animalinf = data.DatosEspecies[id].infog;
            document.getElementById("info").innerHTML = animalinf;  
            
        }
    });

    const Imge = (urlimg) => {
        const aImage = document.getElementById("imgp");
        aImage.src = urlimg;
    }
const animalname = (animalname) =>{
    document.getElementById("nombreAnimal").innerHTML = animalname
}
}
function closePopUp(){
    document.getElementById("pop-up").style.display="none";
}


    
