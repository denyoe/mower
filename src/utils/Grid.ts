/**
 * Lawn Grid
 * @classdesc Grid
 */
export default class Grid {

	private _width: number
	private _height: number

	/**
	 * Init
	 * @constructor Init Class Params
	 * @param width int
	 * @param height int
	 */
	constructor(width: number, height: number) {
		this._width = width
		this._height = height
	}

	set width(width: number) {
		this._width = width
	}

	get width(): number {
		return this._width
	}

	set height(width: number) {
		this._height = width
	}

	get height(): number {
		return this._height
	}
	
}
