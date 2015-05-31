function Queue() {
  var count = 0;

  var head = null;
  var tail = null;

  //#getCount
  this.getCount = function() {
    return count;
  };

  //#isEmpty
  this.isEmpty = function() {
    if(count == 0) {
      return true;
    };
    return false;
  }

  //#enqueue
  this.enqueue = function (data) {
    
    var node = {
      data: data,
      next: head
    };
    
    if(this.isEmpty()) {
      tail = node;
    };

    head = node;

    count++;
  };

  // #dequeue
  this.dequeue = function () {
    if (this.isEmpty()) {
      return null;
    };

    if (count > 0) {
      count --;
    }
    else {
      head = null;
      tail = null;
    }
    
    //find the second to last node
    //alternative way is to have a previous
    var current = head;
    var previous = null;

    while(current.next) {
      previous = current;
      current = current.next;
    }
    
    //remove second to last reference
    if(count != 1) {
      previous.next = null
    }
  };

};