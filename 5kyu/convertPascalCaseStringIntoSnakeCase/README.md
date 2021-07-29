## Convert PascalCase string into snake_case Kata

### Requirements 

Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

### Test Cases

```JavaScript
//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);
```

### Input/Output Table

| Input               | Output                      |
| :------------------ | :-------------------------- |
| "TestController" | "test_controller" |
| "MoviesAndBooks"     | "movies_and_books"         |