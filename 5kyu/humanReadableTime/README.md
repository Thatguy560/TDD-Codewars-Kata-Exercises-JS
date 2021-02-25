## Extract the domain name from a URL Kata

### Requirements 

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


### Test Cases

```JavaScript
humanReadable(86399), '23:59:59', 'humanReadable(86399)'
humanReadable(359999), '99:59:59', 'humanReadable(359999)'
```

### Input/Output Table

| Input               | Output                      |
| :------------------ | :-------------------------- |
| 86399 | "23:59:59" | 
| 359999     | "99:59:59"         |