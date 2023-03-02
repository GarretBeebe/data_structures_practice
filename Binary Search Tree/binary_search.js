/* Simple Binary Tree insert and find
    to run:
        node binary_search.js number_of_nodes value_to_find
*/

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
    constructor(){
        this.root = null
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    find(value){
        if(!this.root) return false
        
        let current = this.root
        let found = false
        while(current && !found){
              if(value < current.value){
                current = current.left
               } else if(value > current.value){
                  current = current.right
               } else {
                    found = current
               } 
              
              }
      
          if(!found) return undefined;
          return found
        
    
    }
  }

  // Testing insert and find using simple insert values
  var args = process.argv;
  var myTree = new BinarySeachTree();

  for (i=0; i<args[2]; i++) {
    myTree.insert(i);
  }

  console.log(myTree);
  console.log(myTree.find(args[3]));
