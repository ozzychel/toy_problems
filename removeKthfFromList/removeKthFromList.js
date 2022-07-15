// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

var removeElements = function(head, val) {
  let curr = new ListNode(null, head)
  let start = curr;
  while(curr !== null && curr.next !== null) {
      if(curr.next.val === val) {
          curr.next = curr.next.next;
      } else {
          curr = curr.next;
      }
  }
  return start.next === val ? null : start.next;
};

console.log([1,2,3,6,4,5,6], 6) // 1>2>3>4>5
console.log([7,7,7,7], 7) // null
