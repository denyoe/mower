import Lawn from './utils/Lawn'

const argv = process.argv

if( argv.length === 3 ) {
    // correct number of arguments
    // start mowing
    let path = argv[2]
    let lawn: Lawn = new Lawn()
    lawn.init(path).mow()
} else {
    console.error('Incorrect Number of Arguments. \nRefer to README.md for instructions')
}
