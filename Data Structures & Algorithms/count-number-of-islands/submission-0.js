class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0
        let rows = grid.length;
        let cols = grid[0].length;

        const dfs = (row, col) => {
            if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === "0"){
                return;
            }
            grid[row][col] = "0";
            dfs (row + 1, col);
            dfs (row-1, col);
            dfs (row, col+1);
            dfs (row, col - 1);
        }


        for (let i =0; i < rows; i++){
            for (let j = 0; j < cols; j++){
                if (grid[i][j] === "1"){
                    dfs(i,j);
                    islands++;
                }
            }
        }
        return islands;
    }
}
