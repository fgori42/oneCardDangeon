import { take } from "rxjs"

export class Enemy{
	private id: number;
	private life: number;
    private velocity: number;
    private power: number;
    private shield: number;
    private reach: number;
    private position: number[];
	private type: string;
	private canAttack: boolean = false;
	
	constructor(
		id: number,
		life: number,
		velocity: number,
		power: number,
		shield: number,
		reach: number,
		position: number[],
		type: string
	){
		this.life = life;
		this.velocity = velocity;
		this.power = power;
		this.shield = shield;
		this.reach = reach;
		this.position = position;
		this.type = type;
		this.id = id;
	}

	takeDamage(amount: number): void{
		amount /= this.shield;
		this.life -= amount;
		if (this.life <= 0)
		{
			//TODO
		}
	}

	

}
