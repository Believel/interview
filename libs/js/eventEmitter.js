class EventEmitter {
  // 创建一个EventMap,用于存储事件名和函数的映射关系
  _eventMap = new Map();
  // 事件监听
  on(type, fn) {
    if(this._eventMap.has(type)) {
      const cbs = this._eventMap.get(type)
      cbs.push(fn)
    } else {
      this._eventMap.set(type, [fn]);
    }
    return this;
  }
  // 事件订阅方法
  emit(type, ...args) {
    if(this._eventMap.has(type)) {
      const cbs = this._eventMap.get(type);
      for(const fn of cbs) {
        fn.apply(this, args)
      }
      return true;
    } else {
      return false;
    }
  }

}