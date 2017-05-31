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
> 适合在for循环中使用let声明变量i,for循环的循环条件所在语句块是循环体语句块的父作用域

2.let不存在变量提升

3.暂时性死区：如果在一个作用域里已经有let声明了一个变量a，则无论a的声明是在使用语句之上还是之下，此作用域的父级或者祖
宗级作用域里声明的变量a都不会影响到此作用域(总之在块级作用域中用let声明了某个变量，则在语句块内声明这个变量之前使用此变量都会报错，这就是暂时性死区)。

4.不允许重复声明：在同一作用域内，不能重复声明同一变量（函数的参数，算是已经声明过了）。

## 块级作用域
ES5只有全局作用域和函数作用域，没有块级作用域，这样不合理。

因为：

1.外层变量会受到内层变量的影响(即外层作用域可以读取到内层作用域的变量)。

2.循环语句的变量一旦循环完毕，就会泄漏到全局，成为全局变量。

所以，ES6增加了块级作用域：

eg:第一个问题：
```angular2html
/*
* ES5外层变量受到了内层变量的影响
*/ 
function f1() {
  var n = 5;
  if (true) {
    var n = 10;
  }
  console.log(n); // 10
};
f1();

/*
* ES6外层变量不受内层变量的影响
*/ 
function f2() {
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
};
f2();

```

eg:第二个问题
```angular2html
/*
* ES6中for循环完了之后即成为了全局变量
*/ 
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  document.write(s[i]);
}
console.log(i); // 5

/*
* ES6中for循环完了之后即成为了全局变量
*/ 
var s = 'hello';

for (let i = 0; i < s.length; i++) {
  document.write(s[i]);
}
console.log(i); // 报错
```


## 块级作用域与函数声明
ES5规定：函数只能在顶级作用域和函数作用域中声明，不能在块级作用域中声明。





