function Stack() {
  var top = null; //keep track of the top of stack
  var count = 0; //keep track of how many left in the stack

  //returns the count
  this.getCount = function() {
    return count;
  }

  //pushes data onto the stack
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
    count++
  }


}