## Roman Numerals Decoder Kata

### Requirements 

Create a function that takes a Roman numeral as its argument e marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.


### Test Cases

```JavaScript
generateHashtag(" Hello there thanks for trying my Kata")  =>  "#HelloThereThanksForTryingMyKata"
generateHashtag("    Hello     World   ")                  =>  "#HelloWorld"
generateHashtag("") => false
```

### Input/Output Table

| Input                                          | Output |
| :--------------------------------------------- | :----- |
|  " Hello there thanks for trying my Kata"                                           | "#HelloThereThanksForTryingMyKata"  |


