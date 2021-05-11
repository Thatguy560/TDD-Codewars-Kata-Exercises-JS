## shorter concat [reverse longer]

### Requirements 

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b

### Test Cases

```JavaScript
shorter_reverse_longer("abcde", "fghi"), "fghiedcbafghi"
shorter_reverse_longer("hello", "bau"), "bauollehbau"
```

### Input/Output Table

| Input                                          | Output |
| :--------------------------------------------- | :----- |
| "abcde", "fghi"                        | "fghiedcbafghi | 
| "hello", "bau"                         | "bauollehbau"  | 


