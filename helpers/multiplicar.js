const fs = require("fs");
require("colors");

const crearArchivo = async (base = 5, listar = false, hasta) => {
    try {
        let salida = "";

        for (let i = 1; i < hasta + 1; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

        if (listar) {
            console.log("=================".blue);
            console.log(`Tabla del ${base}`.red);
            console.log("=================".blue);
            console.log(salida);
        }

        return `Tabla del ${base}`;
    } catch (error) {
        console.err(error);
        throw error;
    }
};

module.exports = {
    crearArchivo
};
