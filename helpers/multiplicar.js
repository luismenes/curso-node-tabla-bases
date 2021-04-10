const fs = require('fs'); // nos ayuda a crear un rchivo txt
const colors = require('colors');

//UTILIZANDO PROMESAS == async
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {


        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} * ${i} = ${base * i}\n`;
            consola += `${base} ${ '*'.red } ${i} ${'='.red} ${base * i}\n`;

        }

        if (listar) {

            console.log('================'.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('================'.green);
            console.log(consola);
        }

        // con estas lineas creamos el archivo .txt
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }





}

module.exports = {
    crearArchivo
}