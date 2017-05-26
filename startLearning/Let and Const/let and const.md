# Let and Const

## let:
1.ES6新增，用于声明变量，但作用域仅限于声明的变量所在的那个代码块。
```
    {
      var a = 4;
      let b = 5;
    }
    console.log(a);
    console.log(b);
    
    // 4
    // b is not defined
```
> 适合在for循环中使用let声明变量i


