import Mower from '../utils/Mower'
import Grid from '../utils/Grid'
import Lawn from '../utils/Lawn'

describe('Lawn Tests', () => {
    describe('Positioning Test', () => {
        it('should skip mower when it is initially positioned outside of the lawn', () => {
            let lawn: Lawn = new Lawn()
            lawn.grid.width = 2
            lawn.grid.height = 2

            let mower: Mower = new Mower({ x: 1, y: 3 }, 'N')

            lawn.addMower(mower)

            expect(lawn.mowers.length).toBeFalsy()
        })
    })
})
