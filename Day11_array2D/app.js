function main(n) {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = n.split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }
    let suma = 0
    let mayor = -999999
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            suma= arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            mayor = (suma > mayor) ? suma : mayor
        }
    }
    console.log(mayor)
}