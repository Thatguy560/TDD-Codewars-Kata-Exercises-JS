## Time-like string format Kata

### Requirements 

Build up a method that takes an integer and formats it to a 'time - like' format.

The method must raise an exception if its hour length is less than 3 digits and greater than 4.

### Test Cases

```
solution(800) # => // should return '8:00'
solution(1000) # => // should return '10:00'
solution(1451) # => // should return '14:51'
solution(3351) # => // should return '33:51'
solution(10000) # => // should raise an exception
```

### Input/Output Table

| Input           | Output                  |
| :-------------- | :------                 |
| 800            | '8:00'                   |
| 1000            | '10:00'                 |
| 1451            | '14:51'                 |
| 3351            | '33:51'                 |
| 10000            | Raises Exception      |


