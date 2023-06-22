function solution(A: Array<Array<number>>) {
    const N = input.length;
    const M = input[0].length;

    if (N === 1 || M === 1) {
        return (N === 1 ? input[0] : input).reduce((res: number, curr: Array<any>) => res + (N === 1 ? curr : curr[0]), 0)
    }

    const inputWithoutFirstColumn = input.map(line => {
        return line.shift()
    })

    const shiftedInput = [...input]
    shiftedInput.shift()

    const SolNo1stLine = solution(shiftedInput)
    const solNo1stCol = solution(inputWithoutFirstColumn)

    console.log(SolNo1stLine)
    console.log(solNo1stCol)

    return input[0][0] + (SolNo1stLine > solNo1stCol ? SolNo1stLine : solNo1stCol)
}

const A = [[2,2,4,2],[0,3,0,1],[1,2,2,1],[4,1,2,2]]

console.log(solution(A))