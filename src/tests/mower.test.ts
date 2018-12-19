import Mower from '../utils/Mower'
import Grid from '../utils/Grid'

describe('Lawn Mower Movements', () => {
    describe('Directions tests', () => {
        it('should correctly get "Left" direction when turning from "North" orientation', () => {
            let mower: Mower = new Mower({ x: 1, y: 3 }, 'N')

            expect(mower.turn('L')).toStrictEqual('E')
        })

        it('should correctly get "Righ" direction when turning from "East" orientation', () => {
            let mower: Mower = new Mower({ x: 1, y: 3 }, 'E')

            expect(mower.turn('R')).toStrictEqual('N')
        })
    })

    describe('Positions Test', () => {
        it('should not move outside of the lawn grid', () => {
            let mower: Mower = new Mower({ x: 1, y: 3 }, 'N')
            let grid: Grid = new Grid(3, 3)

            // try to advance
            mower.advance(grid)

            // assert mower does not move
            expect(mower.position.y).toStrictEqual(3)

            // change orientation
            mower.turn('L')
            expect(mower.orientation).toStrictEqual('E')
            // try to advance East
            mower.advance(grid)

            // assert mower moves this time [move not ouside of lawn]
            expect(mower.position.x).toStrictEqual(2)
        })
    })
})
