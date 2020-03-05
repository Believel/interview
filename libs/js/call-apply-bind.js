// call(this, args1, args2,...)
// apply(this, [args1, args2,...])
// bind(this)


Function.prototype.myCall = function(context) {
    console.log(this);
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    // context为可选参数，如果不传的话默认上下文为window
    context = context || window
    // 给context创建一个fn属性，并将值设置为需要调用的函数
    context.fn = this
    // 剥离参数
    const args = [...arguments].slice(1);
    // 调用函数
    const result = context.fn(...args);
    // 将context上的属性删除掉
    delete context.fn;
    return result;
}
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window;
  context.fn = this;
  const args = arguments[1]
  const result = context.fn(...args)
  delete context.fn;
  return result
}
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this;
  const args = [...arguments].slice(1);
  // 返回一个函数
  return function F() {
    // !因为返回了一个函数，我们可以 new F(), 所以需要判断
    if (_this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}

function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    Product.myApply(this, [name, price]);
    this.category = 'food';
  }
  
  console.log(new Food('cheese', 5).name);