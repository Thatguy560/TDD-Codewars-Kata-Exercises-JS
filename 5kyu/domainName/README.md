## Extract the domain name from a URL Kata

### Requirements 

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

### Test Cases

```
domainName("http://github.com/carbonfive/raygun") # => "github" 
domainName("http://www.zombie-bites.com") # =>  "zombie-bites"
domainName("https://www.cnet.com") # =>  "cnet"
```

### Input/Output Table

| Input               | Output                      |
| :------------------ | :-------------------------- |
| "http://www.zombie-bites.com" | "zombie-bites" |
| "https://www.cnet.com"     | "cnet"         |