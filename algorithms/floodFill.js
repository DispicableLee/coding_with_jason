/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
// var floodFill = function(image, sr, sc, color) {
//     for(let r = 0; r<image.length; r++){
//         for(let c = 0; c<row.length; c++){
//             console.log(image[r][c])
//         }
//         console.log("       ")
//     }
    
// };

/**
 * 
 * 
 * r,c
 * 
 * 
 * 0,0   0,1    0,2
 * 1,0   1,1    1,2
 * 2,0   2,1    2,2
 */


var dfs = function(row, col, rowLength, colLength, targetValue, grid, newValue) {
    // if (true) {
    // Do any operations you need to peform here
    // ---- change the value ----
    grid[row][col] = newValue
    
    // DFS in 4 directions
    if (row >= 1 && grid[row-1][col]=== targetValue){
        dfs(row - 1, col, rowLength, colLength, targetValue, grid, newValue)
    }
    if(row < colLength && grid[row+1][col]=== targetValue){
        dfs(row+1, col, rowLength, colLength, targetValue, grid, newValue)
    }

    if(col >0 && grid[row][col-1]=== targetValue){
        dfs(row, col-1, rowLength, colLength, targetValue, grid, newValue)
    }
    if(col< rowLength && grid[row][col+1]=== targetValue){
        dfs(row, col+1, rowLength, colLength, targetValue, grid, newValue)
    }
        //...
    // }
}

var floodFill = function(image, sr, sc, color) {
    let colLength = image.length 
    let rowLength = image[0].length
    let targetValue = image[sr][sc]
    let newValue = color


    return dfs(sr, sc, rowLength, colLength, targetValue, image, newValue)
};


/**
 * A "node" is connected with another "node" in this grid if BOTH
 * 1. row +-1 col +-1 (with the checks of the edges)
 * 2. They are the same color
 */

/**
    DESCRIPTION:
    An image is represented by an m x n integer grid image where image[i][j] represents 
    the pixel value of the image.
    You are also given three integers sr, sc, and color. 
    You should perform a FLOOD FILL on the image starting from the pixel image[sr][sc].
    To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally 
    to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally 
    to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
    Return the modified image after performing the flood fill.

    INSIGHTS
        - All numbers in the grid (image) represent pixel values
        - You have a pixel value (color) that you replace {stuff} with
        - image[sr][sc] is a pixel value at the coordinates [sr][sc]
        - image[sr][sc] may or may not be connected in any way to other pixels of the same value
        - change the value of image[sr][sc] to (color)
            - if image[sr][sc] is connected to other pixels of the same value,
                change those pixel values to (color) too.

    THE PROCESS:
        1. Make sure you can print out the grid, with all the values it has, as an actual grid





*/