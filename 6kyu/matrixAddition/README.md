## Matrix Addition Kata

### Requirements 

Take each cell [n][m] from the first matrix, and add it with the same [n][m] cell from the second matrix. This will be cell [n][m] of the solution matrix.

Visualization:

```
|1 2 3|     |2 2 1|     |1+2 2+2 3+1|     |3 4 4|
|3 2 1|  +  |3 2 3|  =  |3+3 2+2 1+3|  =  |6 4 4|
|1 1 1|     |1 1 3|     |1+1 1+1 1+3|     |2 2 4|
```

```JavaScript
matrixAddition(
  [ [1, 2, 3],
    [3, 2, 1],
    [1, 1, 1] ],
//      +
  [ [2, 2, 1],
    [3, 2, 3],
    [1, 1, 3] ] )

// returns:
  [ [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4] ]
```

### Input/Output Table

| Input              | Output                          |
| :----------------  | :-----------------              |
| [[1, 2, 3],[3, 2, 1],[1, 1, 1],],[[2, 2, 1],[3, 2, 3],[1, 1, 3],]   | [[3, 4, 4],[6, 4, 4],[2, 2, 4],
] |





