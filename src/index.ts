import Lawn from './utils/Lawn'
import Grid from './utils/Grid'
import Mower from './utils/Mower'



const argv = process.argv

if( argv.length === 3 ) {
    // correct number of arguments
    let path = argv[2]
    let lawn: Lawn = new Lawn(path).mow()
} else {
    console.error('Incorrect Number of Arguments. \nPlease Check the README.md for instructions')
}



export const Run = {
    mow: () => {
        // 
    }
}
