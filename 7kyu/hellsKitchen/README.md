## Hells Kitchen Kata

### Requirements 

Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.


### Test Cases

```JavaScript
gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
```

### Input/Output Table

| Input        | Output |
| :----------- | :----- |
| "What feck damn cake"  | "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!" |
| "are you stu pid" | "@R*!!!! Y**!!!! ST*!!!! P*D!!!!" |



