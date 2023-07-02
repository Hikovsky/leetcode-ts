/**
 * 200. Number of Islands
 * Link to problem: https://leetcode.com/problems/number-of-islands/
 */


/**
 * Function returns number of figures in given two-dimensional array
 * @param grid
 * @return {number}
 */
export function numIslands(grid: string[][]): number {
    let counter = 0
    const height = grid.length
    const length = grid[0].length

    function dfs(x: number, y: number) {
        if (x < 0 || x === length || y < 0 || y === height) return

        if (grid[y][x] !== '1') return

        grid[y][x] = 'v'

        dfs(x, y - 1)
        dfs(x, y + 1)
        dfs(x - 1, y)
        dfs(x + 1, y)
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < length; x++) {
            if (grid[y][x] === '1') {
                dfs(x, y)
                counter += 1
            }
        }
    }

    return counter
}
