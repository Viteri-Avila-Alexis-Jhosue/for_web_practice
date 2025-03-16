import GymService from '../services/GymService.js';

class GymController {
    constructor() {
        this.gymService = new GymService();
    }

    registerClient(client) {
        this.gymService.addClient(client);
    }

    registerTrainer(trainer) {
        this.gymService.addTrainer(trainer);
    }

    getClients() {
        return this.gymService.getClients();
    }

    getTrainers() {
        return this.gymService.getTrainers();
    }
}

export default GymController;
