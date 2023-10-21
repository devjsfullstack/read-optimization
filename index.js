import { readingFile } from "./src/readFile.js";

readingFile().then(stream => {

    let index = 0,
        record = '',
        query = 'INSERT INTO cobranza (nombre,apellidos,correo,fecha_nacimiento,dni,felefono_fijo,telefono_movil,ciudad,seguridad_social,tarjeta_credito,caducidad,cvv,numero_cuenta,createdAt) VALUES '

    stream.on('line', line => {
        if (index !== 0) {

            line = `('${line.replace(/,/g, "','")}'),`

            if (record.indexOf(line) === -1) {
                query += line
            }
        }

        ++index

        if (index === 3) {

            console.log(query.slice(0, query.length-1), index)
            console.log()
            
            index = 0
            query = ''
            query = 'INSERT INTO cobranza (nombre,apellidos,correo,fecha_nacimiento,dni,felefono_fijo,telefono_movil,ciudad,seguridad_social,tarjeta_credito,caducidad,cvv,numero_cuenta,createdAt) VALUES '
        }
    })

    stream.on('pause', () => {
        console.log('¡Proceso Finalizado!')
    })
}).catch(error => console.error(error))