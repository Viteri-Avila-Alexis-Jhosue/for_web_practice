import Client from './models/Client.js';
import Trainer from './models/Trainer.js';
import GymController from './controllers/GymController.js';

const gymController = new GymController();

// Manejo de clientes
document.getElementById('client-form').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('client-id').value;
    const name = document.getElementById('client-name').value;
    const age = parseInt(document.getElementById('client-age').value);
    const weight = parseFloat(document.getElementById('client-weight').value);
    const height = parseFloat(document.getElementById('client-height').value);

    const client = new Client(id, name, age, weight, height);
    gymController.registerClient(client);

    document.getElementById('clients').innerHTML += `<li>${name} - IMC: ${client.calculateBMI()}</li>`;
    e.target.reset();
});

// Manejo de entrenadores
document.getElementById('trainer-form').addEventListener('submit', e => {
    e.preventDefault();
    const id = document.getElementById('trainer-id').value;
    const name = document.getElementById('trainer-name').value;
    const specialty = document.getElementById('trainer-specialty').value;

    const trainer = new Trainer(id, name, specialty);
    gymController.registerTrainer(trainer);

    document.getElementById('trainers').innerHTML += `<li>${name} - Especialidad: ${specialty}</li>`;
    e.target.reset();
});
