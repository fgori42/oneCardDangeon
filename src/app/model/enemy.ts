import { take } from "rxjs"

export class Enemy{
	private id: number;
	private life: number;
    private velocity: number;
    private power: number;
    private shield: number;
    private reach: number;
    position: number[];
	private type: string;
	private canAttack: boolean = false;
	
	constructor(position: number[])
	constructor(
		position: number[],
		id: number,
		life: number,
		velocity: number,
		power: number,
		shield: number,
		reach: number,
		type: string
	)
	
	constructor(
		position: number[],
		id?: number,
		life?: number,
		velocity?: number,
		power?: number,
		shield?: number,
		reach?: number,
		type?: string
	){
		this.life = life ?? 10;
		this.velocity = velocity ?? 1;
		this.power = power ?? 1;
		this.shield = shield ?? 0;
		this.reach = reach ?? 1;
		this.position = position;
		this.type = type ?? "default";
		this.id = id ?? 1;
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
