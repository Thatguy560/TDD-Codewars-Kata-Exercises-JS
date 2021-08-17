## Pretty date Kata

### Requirements 

Write a helper function that takes in a Time object and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

### Specifics

The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
Only times in the past will be given, with the range "just now" to "52 weeks ago"

### Test Cases

```JavaScript
toPretty(0) => "just now"

toPretty(40000) => "11 hours ago"
```

### Input/Output Table

| Input                                              | Output |
| :------------------------------------------------- | :----- |
|   30    | "30 seconds ago"  |
|   180    | "3 minutes ago"  |
|   31449600    | "52 weeks ago"  |

