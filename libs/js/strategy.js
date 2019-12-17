// 策略模式：
// 定义一系列的算法，把它们一个个封装起来。将不变的部门和变化的部门隔开是每个设计模式的主题。
var strategies = {
  "S": function(salary) {
    return salary * 4
  },
  "A": function(salary) {
    return salary * 3;
  },
  "B": function(salary) {
    return salary * 2;
  }
};
var calculateBonus = function(level, salary) {
  return strategies[level](salary);
}

console.log(calculateBonus("S", 2000))