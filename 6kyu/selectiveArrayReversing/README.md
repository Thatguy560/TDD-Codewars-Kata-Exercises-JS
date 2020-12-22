## Selective Array Reversing Kata

### Requirements 

Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

### Test Cases

```JavaScript
selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]

 selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
```

### Input/Output Table

| Input                                              | Output |
| :------------------------------------------------- | :----- |
| ([1,2,3,4,5,6], 2)      | [2,1, 4,3, 6,5]  |
| ([2,4,6,8,10,12,14,16], 3) | [6,4,2, 12,10,8, 16,14]   |
