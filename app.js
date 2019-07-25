//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
console.log(argv);
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        //console.log(tarea);
        break;
    case 'listar':
        //console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            //console.log(tarea);
            console.log('==========Por hacer============='.green);
            console.log(tarea.descripcion);
            console.log('estado:', tarea.completado);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log('Borrar una tarea por hacer');
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no es reconocido');
        break;

}