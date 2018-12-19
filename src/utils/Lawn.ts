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
	constructor(path: string = 'mower.txt') {
		this.grid = new Grid(0, 0)

		this.init(path)
	}

	get mowers(): Mower[] {
		return this._mowers;
	}

	private _addMower(mower: Mower) {
		this._mowers.push(mower)
	}

	init(path: string) {
		// const stream = fs.createReadStream(path, 'utf8')

		let commands: any
		try {
			commands = fs.readFileSync(path, 'utf8').split('\n')
		} catch (error) {
			throw "File Not Found: " + path;
		}		

		let lawn_grid: number[] = commands[0].split(' ').map((el) => {
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
			console.log(inital_pos, instructions)
			this._addMower(mower)
		}
		// this.mow()

		// console.log(this.mowers)

		// let Lines: string[] = []
			
		// stream
		// 	.on('error', (e) => {
		// 		console.log('An Error Occured: ', e)
		// 	})
		// 	.on('data', (chunk) => {
		// 		Lines = chunk.split('\n')
		// 	})
		// 	.on('end', () => {
		// 		console.log(Lines)
		// 	})
		
		

		// let mower: Mower = new Mower({ x: 3, y: 3 }, 'E');
		// let mower: Mower = new Mower({ x: 1, y: 2 }, 'N');
		// this._addMower(new Mower({ x: 1, y: 2 }, 'N'))
		// this._addMower(new Mower({ x: 3, y: 3 }, 'E'))
	}

	mow(): Lawn {
		
		this.mowers.map((mower) => {
			// let moves: string[] = 'LFLFLFLFF'.split('')
			// let moves: string[] = 'FFRFFRFRRF'.split('')
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

			console.log(mower.position, mower.orientation)
		})

		return this
	}
	
}