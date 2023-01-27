# js -1

# let,constを使わず(つまりECMAScript2015以前の書き方)以下の出力を出せ

```
output: 0
output: 1
output: 2
```


# Solution
```js
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = (function (index) {
    return function () {
      console.log("output: " + index);
    };
  })(i);
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}
```
## キーワード
-  immediately invoked function expression (IIFE: pronounced "iffy",/ˈɪf.i/) 


# ヒント
```js
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    console.log("output:", i);
  };
}
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
```

Question: <br>
上記の出力は何か?<br>


Answer:<br>
`output: 3`が三回出力される <br>

考察: <br>

## letを使えば問題ない

```
output: 1
output: 2
output: 3
```
と出力される。

## var is called as function scope
There is no block scope in JavaScript - only function scope (ECMAScript2015以前)

>Function Scope:  <br>
When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

>Block Scope:  <br>
A variable when declared inside the `if` or `switch` conditions or inside `for` or `while` loops, are accessible within that particular condition or loop. To be concise the variables declared inside the curly braces are called as within block scope.

>var:  <br>
var is called as `function scope` that is if a variable is declared using var keyword it will be accessible throughout the function.

>let & const:  <br>
let & const are also called as block scope that is they are accessible within that particular block. 


#　おまけ
## CommonJS [^1]
>CommonJS is a project with the goal to establish conventions on the module ecosystem for JavaScript outside of the web browser.

>The project was started by Mozilla engineer Kevin Dangoor in January, 2009 and initially named ServerJS.
>In August 2009, the project was renamed CommonJS to show the broader applicability of the APIs.

>CommonJS's module specification is widely used today, in particular for `server-side` JavaScript programming with Node.js.
>It is also used in the development of `browser-side` JavaScript, but the code must be packaged with a transpiler since browsers don't support CommonJS.

## JavaScriptとECMAScriptの違い[^2]
JavaScript の基本部分の仕様を定めているのが ECMAScript です。

![ECMAScript のこれまでのバージョン](../assets/img_01.png)


[^1]:https://en.wikipedia.org/wiki/CommonJS
[^2]: https://www.javadrive.jp/javascript/ini/index11.html