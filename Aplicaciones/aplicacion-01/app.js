
const datos = () => {
    let nombre = document.getElementById("nombre").value;
    let color = document.getElementById("color").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;

    const array = {
        "Nombre": nombre,
        "Color favorito": color,
        "Edad": edad,
        "Genero": genero
    }
    console.log("Este es el resultado por el momento: ", array);
}

const cambiosArray = () => {
    let nombres = ["Juan", "Pedro", "Maria"];

    let agregarNombre = document.getElementById("agregarNombre").value;
    let variosNombres = document.getElementById("variosNombres").value;
    let variosNombres2 = document.getElementById("variosNombres2").value;
    let variosNombres3 = document.getElementById("variosNombres3").value;

    if (document.getElementById("agregarNombre").value !== "") {
        nombres.push([agregarNombre]);

        console.log(nombres);
    }
    
    if (document.getElementById("variosNombres").value !== "" &&
        document.getElementById("variosNombres2").value !== "" &&
        document.getElementById("variosNombres3").value !== "") {
        nombres.push([variosNombres, variosNombres2, variosNombres3]);

        console.log(nombres);
    }
    
    if (document.getElementById("agregarNombre").value === "" &&
        document.getElementById("variosNombres").value === "" &&
        document.getElementById("variosNombres2").value === "" &&
        document.getElementById("variosNombres3").value === "") {
        console.log("Los campos solicitados de los ultimos formularios están vacios");
    }
}