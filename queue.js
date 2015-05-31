function Queue() {
  var count = 0;

  var head = null;
  var tail = null;

  this.getCount = function() {
    return count;
  }
};