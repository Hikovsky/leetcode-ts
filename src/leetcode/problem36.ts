/**
 * 36. Valid Sudoku
 * Link to problem: https://leetcode.com/problems/valid-sudoku/
 */

export function isValidSudoku(board: string[][]): boolean {
    const rows: Map<string, number[]> = new Map()
    const boxes: Map<string, number[]> = new Map()
    const columns: Map<string, number[]> = new Map()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const item = board[i][j]
            if (item === '.') continue
            const box = Math.ceil((i + 1) / 3) * 3 + Math.floor(j / 3)

            const rowsValues = rows.get(item) || []
            const columnsValues = columns.get(item) || []
            const boxesValues = boxes.get(item) || []

            if (
                rowsValues.includes(i) ||
                columnsValues.includes(j) ||
                boxesValues.includes(box)
            ) return false
            rows.set(item, [...rowsValues, i])
            boxes.set(item, [...boxesValues, box])
            columns.set(item, [...columnsValues, j])
        }
    }

    return true
}
