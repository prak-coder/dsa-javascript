-Big O notation is used to find which solution is best. in terms of time and space complexity
-example loop to find sum of n and n*(n+1)/2 using timers is problamatic hardware differ.. need to run to judge code performance
-count number of operations * + / 3 operations -loop i<=n i++ total =total +i n times
-O(f(n)) f(n)=n linear f(n)=n^2 quadratic f(n)=1 constant  O(1) 3 operations O(n) for loop
-O(2n) simplfy O(n)
-O(500) simplfy O(1)
-O(2n^2) simplfy O(n^2)
-O(1) >O(log n) >O(n)  >O(nlog n) > O(n^2)

Space Complexity
 --most primitives like numbers  booleans null undefined are constant space
 --strings require O(n) space (n is string length)
 --objects and arrays O(n) n is length of array or the number of key-value pairs
-- add and return sum of array is O(1) only total variable.. return 2*value of array in new array is O(n) 10 items in arry we need 10 items in memory so O(n) -- space not time

Data Structures 
-ds are collections of values,have relationship among them,functions/operation that can be applied to the data eg array values-order-push pop reverse methods
-why many bcs diff ds excel different things.. some highly specilaized others generally used
-need may arise in future.. already used lot of ds.. eg DOM in browser is a tree
-work with map/location data-- use a graph ds
-data insert and remove both ends need fast data manipulation arrays not best use linked list
-web scraping nested html use tree
-need implement scheduler -use binary heap

class in js
-syntaxial sugar prototype in bts.. constructor.. instance methods on individual instances eg [1,2].push(5)
-static keyword for class methods.. Student.enrollStudents(student1,student2)..  eg Point.distance(p1,p2)

Singly Linked List 
 -ds that contains head,tail and length property
 -sll consits of nodes each node has a value and a pointer to another node or null
 -push() add value at end.. pop() to get val from end.. shift to remove val from start..unshift to add value to start
 -get(index)-- returns the node at index.. set(index,val)..uses set to find node and replace with val
