const { Person } = require("./Person")

class Manager extends Person{
    #salary;
    clients = [];
    constructor(name, cpf, salary){
        super(name, cpf);
        this.#salary = salary;
        this.clients = []
    }
    addClient(client){
        this.clients.push(client)
    }
}

module.exports ={ Manager }