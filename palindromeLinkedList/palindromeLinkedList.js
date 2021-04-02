/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

 var isPalindrome = function(head) {
  if(!head.next) return true;
  let vals = [];
  while(head) {
    vals.push(head.val);
    head = head.next;
  }
  return vals.join('') === vals.reverse().join('');
};


function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const list0 = new ListNode(1)
const list1 = new ListNode(1, new ListNode(2, new ListNode(3)))
const list2 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))
console.log(isPalindrome(list0)) // true

console.log(isPalindrome(list2)) // true
console.log(isPalindrome(list1)) // false