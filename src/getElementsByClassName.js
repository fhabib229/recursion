// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var arr = [];
	function run(element, arr, className){
		var mother = element.childNodes
		for (var i = 0; i < mother.length; i++){
			var list = mother[i].classList || [];
			list.forEach(function(tempClass){
				if (tempClass === className){
					arr.push(mother[i]);
				}
			})
			if (mother[i].childNodes[0]){
				run(mother[i], arr, className);
			}
		}
	}
	run(document, arr, className);
	return arr;
};
