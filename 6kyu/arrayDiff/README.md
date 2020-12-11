## Array.diff Kata

### Requirements 

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

### Test Cases

```JavaScript
arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

### Input/Output Table

| Input                                    | Output |
| :----------------------------------------| :----- |
| ([1,2],[1])                               | [2]   |
| ([1,2,2,2,3],[2])                         | [1, 3]|
