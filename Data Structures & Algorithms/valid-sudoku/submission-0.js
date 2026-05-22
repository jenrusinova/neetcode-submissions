class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Map();
        let cols = new Map();
        let squares = new Map();

        for (let i =0; i < 9; i++){
            for (let j =0; j < 9; j++){
                let value = board[i][j];
                if(value ==='.') continue;
                
                const squareKey = `${Math.floor(i/3)},${Math.floor(j/3)}`;

                //check if we saw this value in all maps
                if((rows.get(i) && rows.get(i).has(value)) ||
                (cols.get(j) && cols.get(j).has(value)) ||
                squares.get(squareKey) && squares.get(squareKey).has(value)){
                    return false;
                }

                //if not create set 
                if (!rows.get(i)){
                    rows.set(i, new Set());
                };
                if (!cols.get(j)){
                    cols.set(j, new Set());
                }
                if (!squares.get(squareKey)){
                    squares.set(squareKey, new Set());
                }

                //add value to set
                if (rows.get(i)){
                    rows.get(i).add(value);
                };
                if (cols.get(j)){
                    cols.get(j).add(value);
                };
                if (squares.get(squareKey)){
                    squares.get(squareKey).add(value);
                }

            }
        }

        return true;
    }
}
