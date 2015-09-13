var SILLY=(	function(module){
	module.DoIt = function(redultObject){
		redultObject.prepend(Date()+'<br/>');
	}
	return module;
}(SILLY || {}));