function solution(A: Array<Array<number>>) {
    const N = A.length;
    const M = A[0].length;

    if (N === 1 || M === 1) {
        return (N === 1 ? A[0] : A).reduce((res: number, curr: Array<any>) => res + (N === 1 ? curr : curr[0]), 0)
    }

    const inputWithoutFirstColumn = A.map(line => {
        return line.shift()
    })

    const shiftedInput = [...A]
    shiftedInput.shift()

    const SolNo1stLine = solution(shiftedInput)
    const solNo1stCol = solution(inputWithoutFirstColumn)

    console.log(SolNo1stLine)
    console.log(solNo1stCol)

    return A[0][0] + (SolNo1stLine > solNo1stCol ? SolNo1stLine : solNo1stCol)
}

const A = [[2,2,4,2],[0,3,0,1],[1,2,2,1],[4,1,2,2]]

console.log(solution(A))