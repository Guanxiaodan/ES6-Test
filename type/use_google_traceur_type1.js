/**
 * Created by GXD on 2017/5/26.
 *
 */
'use strict';
class Calc {
  constructor() {
    console.log('Calc constructor');
  }
  add(a, b) {
    return a + b;
  }
}

var c = new Calc();
console.log(c.add(41,5));