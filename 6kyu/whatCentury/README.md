## What Century Is It Kata

### Requirements 

Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

### Test Cases

```JavaScript
whatCentury("1999") # => "20th"
whatCentury("2011") # => "21st"
whatCentury("2154") # => "22nd"
whatCentury("2259") # => "23rd"
whatCentury("1124") # => "12th"
whatCentury("2000") # => "20th"
```

### Input/Output Table

| Input  | Output |
| :----- | :----- |
| "1999" | "20th" |
| "2011" | "21st" |
| "2154" | "22nd" |
| "2259" | "23rd" |
| "1124" | "12th" |
| "2000" | "20th" |