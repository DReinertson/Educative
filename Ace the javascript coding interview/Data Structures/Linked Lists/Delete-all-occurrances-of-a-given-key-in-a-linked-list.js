import * as LinkedList from './LinkedList.js';

let deleteNode = function(head, key) {
  //TODO: Write - Your - Code
  let current = head;
  let prev = null;

  while (current){
    if (current.data === key){
      if (current === head){
        head = head.next;
        current = head;
      } else{
        prev.next = current.next;
      }
    } else{
      current = current.next;
    }
  }
  return head;
};
