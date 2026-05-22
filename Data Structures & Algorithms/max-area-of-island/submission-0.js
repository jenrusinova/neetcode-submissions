class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        let rows = grid.length;
        let cols = grid[0].length;

        const dfs = (row, col) => {
            let count = 0;
            if (row < 0 || col < 0 || row >=rows || col >=cols || grid[row][col] === 0){
                return 0;
            }
            count ++;
            grid[row][col] = 0;
            count += dfs(row+1, col);
            count += dfs(row-1, col);
            count += dfs(row, col+1);
            count += dfs(row, col-1);


            return count;
        }


        for (let i =0; i < rows; i++){
            for (let j =0; j < cols; j++){
                let area = 0;
                if (grid[i][j] === 1){
                    area = dfs (i,j);
                    maxArea = Math.max (area, maxArea);
                }
            }
        }

        return maxArea;

        


    }
}
