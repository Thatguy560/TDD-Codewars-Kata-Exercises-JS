## Counting Duplicates Kata

### Requirements 

You just got done with your set at the gym, and you are wondering how much weight you could lift if you did a single repetition. Thankfully, a few scholars have devised formulas for this purpose (from Wikipedia) :

Epley

1RM = w(1+r/30)
​	
McGlothin

1RM = 100w/101.3−2.67123r
 
Lombardi

1RM = wr ** 0.10
 
Your function will receive a weight w and a number of repetitions r and must return your projected one repetition maximum. Since you are not sure which formula to use and you are feeling confident, your function will return the largest value from the three formulas shown above, rounded to the nearest integer. However, if the number of repetitions passed in is 1 (i.e., it is already a one rep max), your function must return w. Also, if the number of repetitions passed in is 0 (i.e., no repetitions were completed), your function must return 0.

### Test Cases

```JavaScript
calculate_1RM(135,20),282
calculate_1RM(200,8),253
calculate_1RM(270,2),289
```

### Input/Output Table

| Input      | Output |
| :----------| :----- |
| 135,20    | 282      |
| 200,8  | 253     |
| 270,2  | 289      |
