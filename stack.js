function Stack() {
  var top = null; //keep track of the top of stack
  var count = 0; //keep track of how many left in the stack

  //#getCount() returns the count
  this.getCount = function() {
    return count;
  };

  //#push(data) creates node using data, pushes node onto the stack, increments counter, sets top to the node
  this.push = function (data) {
    
    var node = {
      data: data,
      next: null
    };

    //links current node to the top node
    node.next = top;
  
    //makes current node the top node
    top = node;

    //count the node
    count++;
  };

  //#isEmpty() returns true if the stack is empty else false if not
  this.isEmpty = function(){
    if(count == 0){
      return true;
    };
    return false;
  };

  //#peek() reveals the top value of the stack
  this.peek = function () {
    //check if top points to null
    if(this.isEmpty()) {
      return null
    }
    else {
      return top.data;
    }
  };

  //#pop()
  this.pop = function () {
    if(this.isEmpty()){
      console.log("Stack is empty!");
      return null;
    } else {
      //decrement the count
      count--;

      //set popped_node to top
      var popped_node = top;

      //set the top to next
      top = top.next;

      return popped_node;
    }
  };
};