import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
    _brand: string;
    _color: Colors;
    _door: number;

    constructor(brand: string, color: Colors, door: number){
        this._brand = brand;
        this._color = color;
        this._door = door;
    }

    turnOn(): void {
        console.log("Ligando carro.");
    }

    turnOff(): void {
        console.log("Desligando carro.");
    }

    turn(direction: Directions): void {
        console.log(`Virando para a ${direction}.`);
    }

    speedUp(): void {
        console.log("Acelerando carro.");
    }

    speedDown(): void {
        console.log("Reduzindo a velocidade do carro.");
    }

    stop(): void {
        console.log("Parando carro.");
    }

    honk(): void {
        console.log("Buzinando: BIP BIP");
    }

    openTheDoor(door: Doors): void {
        // this.validateDoors(door);
        console.log(`Abrindo a porta: ${door}.`);
    }

    closeTheDoor(door: Doors): void {
        // this.validateDoors(door);
        console.log(`Fechando a porta: ${door}.`);
    }
}

export default Car;