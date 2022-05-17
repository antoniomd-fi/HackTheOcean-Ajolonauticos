function login() {

    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("telefono").value;
    let website= document.getElementById("website").value;
    let message = document.getElementById("mensaje").value;

    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://ajofirm.azurewebsites.net/form",
        contentType: "application/json",
        data:JSON.stringify({
            "name": name,
            "email":email,
            "phone":phone,
            "website":website,
            "message":message
        }),
        success: function (result) {
            console.log("data is :" + result)
            if (result.code == 200) {
                alerta ("Inicio de sesión exitoso");
                window.location.href = "../home/home_page.html";
            }else {
                alert(result.message)
            }
        }
    });
}