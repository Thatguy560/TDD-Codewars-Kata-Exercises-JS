## Credit Card Mask Kata

### Requirements 

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

### Test Cases

```JavaScript
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
```

### Input/Output Table

| Input                                          | Output |
| :--------------------------------------------- | :----- |
| "4556364607935616"                | "############5616"  |
| "64607935616                      | "#######5616"       |


