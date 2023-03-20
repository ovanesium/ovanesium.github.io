"use strict";

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const results = data.results[0];
    console.log(results);
    document.getElementById(
      "nombre"
    ).innerHTML = `${results.name.title} ${results.name.first} ${results.name.last}`;
    document.getElementById("foto-perfil").src = results.picture.large;
    document.getElementById("email").innerHTML = results.email;
    document.getElementById("telefono").innerHTML = `+54 ${results.phone}`;
  })
  .catch((error) => console.error(error));
