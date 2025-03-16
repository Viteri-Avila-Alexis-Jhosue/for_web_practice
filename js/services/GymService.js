class GymService {
    constructor() {
        this.clients = [];
        this.trainers = [];
    }

    addClient(client) {
        this.clients.push(client);
    }

    addTrainer(trainer) {
        this.trainers.push(trainer);
    }

    getClients() {
        return this.clients;
    }

    getTrainers() {
        return this.trainers;
    }
}

export default GymService;
