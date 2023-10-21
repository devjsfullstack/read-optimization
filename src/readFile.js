import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'
import { argv } from 'node:process'

export const readingFile = async () => {
    try {
        return await createInterface({
            input: createReadStream(`${process.env.FILE_PATH}`),
            output: process.stdout,
            terminal: false
        })
    } catch (error) {
        console.error(error)
    }
}