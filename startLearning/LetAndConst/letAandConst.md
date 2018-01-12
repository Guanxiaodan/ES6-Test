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


## 块级作用域{}与函数声明
ES5规定：函数只能在顶级作用域和函数作用域中声明，不能在块级作用域中声明。

ES6规定：在块级作用域中，可以声明函数，声明行为类似于let，在块级作用域外不能被调用。
```angular2html
/*
* ES5环境中打印出 I am inside!
*/ 
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());

/*
* ES6环境中打印出 I am outside!
*/ 
function f() { console.log('I am outside!'); }

(function () {
  if (false) {
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  f();
}());
```

> 但是：浏览器(ES6环境的浏览器)为了兼容老代码，有了一些自己的行为方式：
>
> 1.允许在块级作用域内声明变量（兼容ES6）。
>
> 2.函数声明类似于var,即会提升到全局或函数作用域或块级作用域的头部（兼容ES5）。

为了避免麻烦，尽量不要在块级作用域中声明函数，如果必须声明函数，也好尽量使用函数表达式，而不是函数声明式

> 注：块级作用域指的是大括号{}

> 注：本质上，块级作用域是一个表达式，封装了多个操作，没有返回值

## do表达式（提案）
为了解决块级作用域没有返回值的问题.目前只是提案。后续补充吧。。。

## const
const声明一个常量，一旦声明，常量的值就不能改变。所以一旦声明了，就得赋值，不能留到之后赋值，不然会报错。


const的作用域与let相同。

如果给const赋值了一个数组或对象，则只要不是重新赋值，则数组和对象还是能增删元素和属性的。


## ES6声明变量的方式
ES5的声明变量有两种： var , function

ES6的声明变量有六种： var , function , let , const , import , class

## 顶层对象的属性
浏览器的顶层对象》》》》window

node的顶层对象》》》》global

ES5的顶层对象的属性与全局变量等价，即：
```angular2html
window.a = 1;
a // 1

a = 2;
window.a // 2
```
这样是不合理的。

所以，ES6规定：var ， function 定义的全局变量，依旧是顶级对象的属性。但是，let , const , class定义的全局变量，就不是顶级对象的属性了。

 eg:
```angular2html
var g = 23;
console.log(window.g); // 23
let x = 45;
console.log(window.x); // undefined
```
 

## global对象（提案）
前面说的，浏览器的顶级对象是window，node的顶级对象是global，不够统一，为了能让同一段代码都指向顶级对象，只能用this。但这也是有问题的：

1.全局环境中：this返回顶级对象，但在ES6和node中，this返回的是当前模块

2.函数中，如果函数不是作为对象属性运行，即只是单纯的函数运行，则this指向顶层对象，但在严格模式下，this会返回undefined。

3.无论在那种模式下，*new Function('return this')()* 总是会返回全局对象。

总之很难找到一种方法能在多有情况下都可取到全局对象，所以ES6就出现了global，通过这个对象，就可以拿到全局对象





