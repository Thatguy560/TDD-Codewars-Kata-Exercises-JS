## Format a string of names like 'Bart, Lisa & Maggie' Kata

### Requirements 

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

### Test Cases

```JavaScript
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'
list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'
list([ {name: 'Bart'} ])
// returns 'Bart'
list([])
// returns ''
```

### Input/Output Table

| Input                            | Output     |
| :------------------------------- | :--------  |
| [ {name: 'Bart'}, {name: 'Lisa'} ]        | "Bart & Lisa"    |
| [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]                        | "Bart, Lisa & Maggie"    |



