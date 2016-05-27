'use strict';

function double_to_one(collection) {
	var arr = [];
	var reArr = [];
	for(var i=0;i<collection.length;i++){
		if(typeof(collection[i]) == "Array"){
			for(var j=0; j<collection[i].length; j++){
				arr.push(collection[i][j]);
			}
		}
		else{
			arr.push(collection[i]);
		}
	}
	arr = arr.toString().split(",");
	for(var i=0; i<arr.length; i++){
		if(reArr.indexOf(parseInt(arr[i])) ==-1){
			reArr.push(parseInt(arr[i]));
		}
	}
	return reArr;
}

module.exports = double_to_one;
