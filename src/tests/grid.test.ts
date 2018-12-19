import Grid from '../utils/Grid'

describe('Grid Lass Operations', () => {
    test('Correctly sets weight and height', () => {
        let grid: Grid = new Grid(1, 5)
        expect(grid.width).toStrictEqual(1)
        expect(grid.height).toStrictEqual(5)
    })

    test('Can modify its own weight and height', () => {
        let grid: Grid = new Grid(1, 5)
        grid.width = 3
        expect(grid.width).toStrictEqual(3)
    })
})