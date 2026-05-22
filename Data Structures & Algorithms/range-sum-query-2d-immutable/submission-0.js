class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {

        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        this.sumMatrix = Array.from({length: ROWS + 1},() => new Array(COLS + 1).fill(0));
    
        for (let r = 0; r < ROWS; r++){
            let prefix = 0;
            for (let c =0; c < COLS; c++){
                prefix+= matrix[r][c];
                let above = this.sumMatrix[r][c+1];
                this.sumMatrix[r+1][c+1] = prefix + above;
            }
        }
    }



    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++;
        col1++;
        row2++;
        col2++;

        let above = this.sumMatrix [row1-1][col2];
        let left = this.sumMatrix [row2][col1-1];
        let leftAbove = this.sumMatrix [row1-1][col1-1];
        let bottomRight = this.sumMatrix [row2][col2];

        return bottomRight - above - left + leftAbove;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
