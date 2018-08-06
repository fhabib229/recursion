// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//recursion is a natural way to solve tree-like problems, which is why they includes this problem
var getElementsByClassName = function(className) {
  var nodes = [];

  var searchNodes = function(node) {
	  // compare node's classname with className
	  var parts = node.className.split(' ');
	  if (parts.indexOf(className) >= 0) {
		  nodes.push(node);
	  }

	  // iterate over children
	  for (var i = 0; i < node.children.length; i++) {
		  // for each child, invoke searchNodes
		  searchNodes(node.children[i]);
	  }
  };

  searchNodes(document.body);

  return nodes;
};
