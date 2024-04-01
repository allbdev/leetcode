/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

let minMaxH = {min: 0, max: H - 1}
let minMaxW = {min: 0, max: W - 1}
let current = [X0, Y0]

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    let nextMove = ''
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');

    if (bombDir.includes('L')) {
        const mid = minMaxW.min + Math.floor((Number(current[0] - minMaxW.min)) / 2)
        if (minMaxW.min >= mid) {
            minMaxW.min = minMaxW.min - Math.ceil((minMaxW.max - minMaxW.min) / 2)
            minMaxW.max = Number(current[0])
        } else {
            minMaxW.min = mid
        }

        if (minMaxW.min < 0) {
            minMaxW.min = 0
        }
        nextMove = `${minMaxW.min}`
    }

    if (bombDir.includes('R')) {
        const mid = minMaxW.max - Math.floor((Number(minMaxW.max - current[0])) / 2)
        if (minMaxW.max <= mid) {
            minMaxW.max = minMaxW.max + Math.ceil((minMaxW.max - minMaxW.min) / 2)
            minMaxW.min = Number(current[0])
        } else {
            minMaxW.max = mid
        }

        if (minMaxW.max > W - 1) {
            minMaxW.max = W - 1
        }
        nextMove = `${minMaxW.max}`
    }

    if (bombDir.includes('U')) {
        const mid = minMaxH.min + Math.floor((Number(current[1] - minMaxH.min)) / 2)

        if (minMaxH.min >= mid) {
            minMaxH.min = minMaxH.min - Math.ceil((minMaxH.max - minMaxH.min) / 2)
            minMaxH.max = Number(current[1])
        } else {
            minMaxH.min = mid
        }

        if (minMaxH.min < 0) {
            minMaxH.min = 0
        }
        nextMove += nextMove.length < 1 ? `${current[0]} ${minMaxH.min}` : ` ${minMaxH.min}`
    } else if (bombDir.includes('D')) {
        const mid = minMaxH.max - Math.floor((Number(minMaxH.max - current[1])) / 2)
        if (minMaxH.max <= mid) {
            minMaxH.max = minMaxH.max + Math.ceil((minMaxH.max - minMaxH.min) / 2)
            minMaxH.min = Number(current[1])
        } else {
            minMaxH.max = mid
        }

        if (minMaxH.max > H - 1) {
            minMaxH.max = H - 1
        }
        nextMove += nextMove.length < 1 ? `${current[0]} ${minMaxH.max}` : ` ${minMaxH.max}`
    } else {
        nextMove += ` ${current[1]}`
    }

    current = nextMove.split(' ')
    // the location of the next window Batman should jump to.
    console.log(nextMove);
}
