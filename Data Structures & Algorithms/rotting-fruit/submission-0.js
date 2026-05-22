class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let minutes = 0;
        let q = [];
        let freshCount = 0;

        for (let i =0; i < grid.length; i++){
            for(let j=0; j < grid[0].length; j++){
                if(grid[i][j] === 1){
                    freshCount++;
                }
                if(grid[i][j] === 2){
                    q.push([i,j]);
                }
            }
        }

        let directions = [
            [0,1],[0,-1],[-1,0], [1,0]
        ];

        while (freshCount > 0 && q.length > 0){
            let length = q.length;
            for (let i =0; i < length; i++){
                let [rotRow, rotCol] = q.shift();
                for(let j =0; j < directions.length; j++){
                    let row = rotRow + directions[j][0];
                    let col = rotCol + directions[j][1];
                    if (row >=0 && row < grid.length && col>=0 && col < grid[0].length && grid[row][col] === 1){
                        grid[row][col] = 2;
                        q.push([row, col]);
                        freshCount--;
                    }
                }
            }
            minutes++;
        }

        return freshCount > 0 ? -1 : minutes;
    }
}
