"use strict";

fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    const results = data.results[0];
    console.log(results);
    document.getElementById(
      "nombre"
    ).innerHTML = `CV de ${results.name.title} ${results.name.first} ${results.name.last}`;
  })
  .catch((error) => console.error(error));
