class Client {
    constructor(id, name, age, weight, height) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI() {
        return (this.weight / (this.height ** 2)).toFixed(2);
    }
}

export default Client;
