function main() {
    const N = parseInt(readLine())
    if( N%2 == 1 ) {
        console.log('Weird')
        return
    } else if(N >= 2 && N <= 5){
        console.log('Not Weird')
        return
    }else if (N >= 6 && N <= 20){
        console.log('Weird')
        return
    }
    console.log('Not Weird')
}

// function main() {
//     const N = parseInt(readLine())
//     if( N%2 == 1 || N >= 6 && N <= 20 ) {
//         console.log('Weird')
//     } else if (N >= 2 && N <= 5 || N ){
//         console.log('Not Weird')
//     }
// }

// function main() {
//     const N = parseInt(readLine())
//     if( N%2 == 1 || N >= 6 && N <= 20 ) {
//         console.log('Weird')
//     } else if (N >= 2 && N <= 5 || !isNaN(N) ){
//         console.log('Not Weird')
//     }else{
//         console.log('No soy un numero')
//     }
// }

// function main() {
//     const N = parseInt(readLine())
//     if( N%2 == 1 || N >= 6 && N <= 20 ) console.log('Weird')
//     else if (N >= 2 && N <= 5 || !isNaN(N)) console.log('Not Weird')
//     else console.log('No soy un numero')
// }
