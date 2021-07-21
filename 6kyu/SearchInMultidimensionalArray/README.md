## Search In Multidimensional Array Kata

### Requirements 

Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimensional sequence.

### Test Cases

```JavaScript
locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false
```

### Input/Output Table

| Input                                              | Output |
| :------------------------------------------------- | :----- |
|  (['a','b',['c','d',['e']]],'e')              | true       |
|  (['a','b',['c','d',['e']]],'f')              | false       |

