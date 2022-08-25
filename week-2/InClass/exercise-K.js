const listaDeEstudiantes = [
  "Oswaldo", "Wiston", "Karelis", "Andrea","Miguel","Linda","Gabriel"
];
function estudiantesArrays(nombreDeLosEstudiantes) {
    for (let estudiantes = 0; estudiantes < listaDeEstudiantes.length; estudiantes++) {
    console.log(`The name of student is: ${nombreDeLosEstudiantes[estudiantes]}`);
    
}
}
estudiantesArrays(listaDeEstudiantes)