import Grid from './Grid'
import Mower from './Mower'
import fs from 'fs'

/**
 * 
 * @classdesc Lawn
 */
export default class Lawn {

	grid: Grid
	private _mowers: Mower[] = []

	/**
	 * Init
	 * @constructor Init Class Params
	 * @param grid [Grid]
	 */
	constructor() {
		this.grid = new Grid(0, 0)
	}

	get mowers(): Mower[] {
		return this._mowers;
	}

	/**
	 * Adds Mowers to the Grid
	 * @param mower [Mower]
	 * TODO: Deal with collision
	 */
	public addMower(mower: Mower) {
		if (mower.position.x <= this.grid.width && mower.position.y <= this.grid.height) {			
			this._mowers.push(mower)
		} else {
			// console.error('Skipping mower...', mower.position)
		}
	}

	/**
	 * 
	 * @param path Path to Mower Commands File
	 */
	init(path: string) {
		let commands: any
		try {
			commands = fs.readFileSync(path, 'utf8').split('\n')
		} catch (error) {
			throw "File Not Found: " + path;
		}		

		let lawn_grid: number[] = commands[0].split(' ').map((el: string) => {
			return parseInt(el)
		})

		this.grid.width = lawn_grid[0]
		this.grid.height = lawn_grid[1]
		commands.shift() // remove first line

		for(let i = 0; i < commands.length - 1; i+=2) {
			let inital_pos: string[] = commands[i].split(' ') // line [inital position]
			let instructions = commands[i+1].split('') // next line [instructions]
			let mower: Mower = new Mower({ x: parseInt(inital_pos[0]), y: parseInt(inital_pos[1]) }, inital_pos[2])
			mower.instructions = instructions
			this.addMower(mower)
		}

		return this
	}

	mow(): Lawn {
		
		this.mowers.map((mower) => {
			let moves: string[] = mower.instructions
			for (let i = 0; i < moves.length; i++) {
				switch (moves[i]) {
					case 'F':
						mower.advance(this.grid)
						break;
					case 'R':
						mower.turn('R')
						break;
					case 'L':
						mower.turn('L')
						break;
				}
			}

			console.log(mower.position.x, mower.position.y, mower.orientation)
		})

		return this
	}
	
}