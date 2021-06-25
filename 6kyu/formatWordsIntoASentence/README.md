## Format words into a sentence Kata

### Requirements 

Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

### Test Cases

```JavaScript
formatWords(['ninja', 'samurai', 'ronin']) // should return "ninja, samurai and ronin"
formatWords(['ninja', '', 'ronin']) // should return "ninja and ronin"
formatWords([]) // should return ""
```

### Input/Output Table

| Input                            | Output     |
| :------------------------------- | :--------  |
| ['ninja', 'samurai', 'ronin']        | "ninja, samurai and ronin" | 



