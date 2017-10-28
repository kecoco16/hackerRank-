function main(input) {
    const array = input.split('\n')
    const testCases = array.shift()
    if(testCases == 0){
       return
    }   
    array.map(n => {
        if(n < 2 ){
           console.log ('Not prime')
           return
        }
        const raiz = Math.sqrt(n)
        for (let i = 2; i <= raiz; i++) {
            if (n % i === 0){
                console.log ('Not prime')
                return
            }
        }
        console.log('Prime')
    })
} 

main(`3
12
5
7`)