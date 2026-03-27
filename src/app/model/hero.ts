import { Enemy } from "./enemy";

class BlackDice {
    private value: number;
    constructor()
    {
        this.value = 1;
    }

    roll(): void{
        this.value = Math.floor(Math.random() * 6) + 1;
    }

    getValue(): number{
        return this.value;
    }
}

export class Hero {
    private  lifeTotal : number = 6;
    life: number;
    
    velocity: number;
    power: number;
    shield: number;
    reach: number;
    blackDice: BlackDice[] = [new BlackDice(), new BlackDice(), new BlackDice()];
    position: number[] = [0, 0];

    constructor(position: number[]){
        this.life = this.lifeTotal;
        this.power = 1;
        this.shield = 1;
        this.velocity = 1;
        this.reach = 2;
        this.position = position;
    }

    getDamege(amount :number): void{
        amount /= (this.shield + this.blackDice[2].getValue());
        this.life -= amount;
        if (this.life <= 0)
        {
        //    TODO
        }
    }

    recovery():void{
        this.life = this.lifeTotal;
    }
    
    changePosition(newPosition: number[]): void{
        this.position = newPosition;
    }

    makeDamage(enemy: Enemy): void{
        enemy.takeDamage(this.power + this.blackDice[1].getValue());
    }

}
