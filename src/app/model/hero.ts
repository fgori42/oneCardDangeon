export class Hero {
    private  lifeTotal : number = 6;
    life: number;
    
    velocity: number;
    power: number;
    shield: number;
    reach: number;
    constructor(){
        this.life = this.lifeTotal;
        this.power = 1;
        this.shield = 1;
        this.velocity = 1;
        this.reach = 2;
    }

    getDamege(amount :number): void{
        this.life -= amount;
        if (this.life <= 0)
        {}
    }
}
