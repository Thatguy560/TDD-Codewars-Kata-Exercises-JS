## Sort The Odd Kata

### Requirements 

You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

### Test Cases

```JavaScript
sortArray([5, 3, 2, 8, 1, 4]) # => [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) # => [1, 3, 5, 8, 0]

```

### Input/Output Table

| Input             | Output             |
| :---------------- | :----------------- |
| 5, 3, 2, 8, 1, 4] | [1, 3, 2, 8, 5, 4] |
| [5, 3, 1, 8, 0]   | [1, 3, 5, 8, 0]    |


