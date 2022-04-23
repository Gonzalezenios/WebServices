const { promises: fs } = require('fs');

class Container {

    constructor(archivo) {
        this.archivo = archivo;
    };

    async getAll() {
        try {
            const object = await fs.readFile(this.archivo, "utf-8");
            return JSON.parse(object);
        } catch (error) {
            return [];
        }
    };
}



module.exports = Container