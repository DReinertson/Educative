import * as LinkedList from './LinkedList.js';


let removeDuplicates = function(head) {
  //TODO: Write - Your - Code
  //in order to remove a node from a linked list, you need to keep track of prev, current, & next


  let map1 = new Map();
  let current = head;
  map1.set(head.data);

  if (!head){
    return head;
  }

  while (current.next){
    if (map1.has(current.next.data)){
      current.next = current.next.next;
    } else{
      map1.set(current.next.data);
      current = current.next;
    }
  }
  return head;

};
