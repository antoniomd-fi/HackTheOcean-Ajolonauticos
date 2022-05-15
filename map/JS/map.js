function openPopUp(){
    document.getElementById("pop-up").style.display="block";
}
function closePopUp(){
    document.getElementById("pop-up").style.display="none";
}
const url = `https://flowing-blowfish-70.hasura.app/api/rest/especies`;
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
            var ale = Math.floor(Math.random()*16+0);
            let animalImg = data.DatosEspecies[ale].img; 
            Imge(animalImg); 
            let animalname = data.DatosEspecies[ale].nombrecm;
            document.getElementById("nombreAnimal").innerHTML = animalname;

            let animalnamesc = data.DatosEspecies[ale].nombresc; 
            document.getElementById("nombreCientifico").innerHTML = animalnamesc;

            let animalcat = data.DatosEspecies[ale].categoria;  
            document.getElementById("categoria").innerHTML = animalcat;

            let animaldist = data.DatosEspecies[ale].distribucion; 
            document.getElementById("distribucion").innerHTML = animaldist; 

            let animalend = data.DatosEspecies[ale].endemico;  
            document.getElementById("endemico").innerHTML = animalend;

            let animalinf = data.DatosEspecies[ale].infog;
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
