import Grid from './Grid'
/**
 * 
 * @classdesc Represents A Mower
 */
export default class Mower {

	private _position: {x: number, y:number}
	private _orientation: string
	/**
	 * Commands Passed to The Mower
	 */
	private _instructions: string[] = []
	/** 
	 * Mower Orientations Mapping
	 * i.e. Right of North => Mower.Direction['R']['N'] === W
	 * @refer to README.md
	*/
	static Direction: any = {
		'R': {
			'N': 'W',
			'W': 'S',
			'S': 'E',
			'E': 'N'
		},
		'L': {
			'N': 'E',
			'E': 'S',
			'S': 'W',
			'W': 'N'
		}
	}

	/**
	 * Init
	 * @constructor Init Class Params
	 * @param position {x, y}
	 * @param orientation Char in [N,E,W,S]
	 */
	constructor(position: { x: number, y: number }, orientation: string) {
		this._position = position
		this._orientation = orientation
	}

	
	public get instructions() : string[] {
		return this._instructions
	}

	public set instructions(moves: string[]) {
		this._instructions = moves
	}

	public get position(): { x: number, y: number } {
		return this._position
	}
	
	get orientation(): string {
		return this._orientation
	}

	set orientation(orientation: string) {
		this._orientation = orientation
	}

	turn(direction: string): void {
		return this._orientation = Mower.Direction[direction][this._orientation]
	}

	advance(grid: Grid): void {
		switch (this.orientation) {
			case 'N':
				if (this._position.y < grid.height) this._position.y++
				break;
			case 'E':
				if (this._position.x < grid.width) this._position.x++
				break;
			case 'W':
				if (this._position.x > 0) this._position.x--
				break;
			case 'S':
				if (this._position.y > 0) this._position.y--
				break;
		}
	}
	
}
