class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
}

let persona;

function crearPersona() {
    const nombreInput = document.getElementById("nombre").value;
    const edadInput = document.getElementById("edad").value;
    const dniInput = document.getElementById("dni").value;
    const sexoInput = document.getElementById("sexo").value.toUpperCase();
    const pesoInput = document.getElementById("peso").value;
    const alturaInput = document.getElementById("altura").value;
    const anioNacimientoInput = document.getElementById("anioNacimiento").value;

    persona = new Persona(nombreInput, edadInput, dniInput, sexoInput, pesoInput, alturaInput, anioNacimientoInput);

    console.log("Nombre:", persona.nombre);
    console.log("Edad:", persona.edad);
    console.log("DNI:", persona.dni);
    console.log("Sexo:", persona.sexo);
    console.log("Peso:", persona.peso);
    console.log("Altura:", persona.altura);
    console.log("Año de Nacimiento:", persona.anioNacimiento);
    console.log("Se ha creado correctamente la persona.");
}

function mostrarDatos() {
    const mensajeElement = document.getElementById("mensaje");

    if (persona) {
        const mensaje = `Los datos cargados son: Nombre: ${persona.nombre}, Edad: ${persona.edad}, DNI: ${persona.dni}, Sexo: ${persona.sexo}, Peso: ${persona.peso}, Altura: ${persona.altura}, Año de Nacimiento: ${persona.anioNacimiento}`;
        mensajeElement.textContent = mensaje;
    } else {
        mensajeElement.textContent = "No se ha creado ninguna persona aún.";
    }
}

function mostrarGeneracion() {
    const mensajeElement = document.getElementById("mensaje");

    if (persona) {
        const anioNacimiento = parseInt(persona.anioNacimiento);
        let generacion;
        let rasgoCaracteristico;

        if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
            generacion = "Generación Z";
            rasgoCaracteristico = "Irreverencia";
        } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
            generacion = "Generación Y";
            rasgoCaracteristico = "Frustración";
        } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
            generacion = "Generación X";
            rasgoCaracteristico = "Obsesión por el éxito";
        } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
            generacion = "Baby Boom";
            rasgoCaracteristico = "Ambición";
        } else if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
            generacion = "Silent Generation";
            rasgoCaracteristico = "Austeridad";
        } else {
            generacion = "No se pudo determinar la generación.";
            rasgoCaracteristico = "";
        }

        const mensaje = `La generación de ${persona.nombre} es ${generacion}, caracterizada por ${rasgoCaracteristico}.`;
        mensajeElement.textContent = mensaje;
    } else {
        mensajeElement.textContent = "No se ha creado ninguna persona aún.";
    }
}

function esMayorDeEdad() {
    const mensajeElement = document.getElementById("mensaje");

    if (persona) {
        const edad = parseInt(persona.edad);

        if (edad >= 18) {
            mensajeElement.textContent = `${persona.nombre} es mayor de edad.`;
        } else {
            mensajeElement.textContent = `${persona.nombre} no es mayor de edad.`;
        }
    } else {
        mensajeElement.textContent = "No se ha creado ninguna persona aún.";
    }
}
