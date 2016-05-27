'use strict';

function double_to_one(collection) {
	var arr = [];
	var reArr = [];
	if(typeof(collection[i]) == "Array"){
	for(var i=0; i<collection[i]; i++){
		
			for(var j=0;j<collection[j];j++){
				arr.push(collection[i][j]);
			}
		}
	}
		else{
			arr.push(collection[i]);
		}
	
	arr = arr.toString().split(",");
	for(var i=0; i<arr.length; i++){
		if(reArr.indexOf(parseInt(arr[i])) == -1){
			reArr.push(parseInt(arr[i]));
		}
	}
	return reArr;
}

module.exports = double_to_one;
