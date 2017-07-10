Wog = function() {
	
	// PRIVATE -------------------------------------------------------------------------------------

	var _public = {};

	var errorLog = [];

	// PUBLIC --------------------------------------------------------------------------------------

	_public.callFnc = function(fnc) {
		if (fnc && $.isFunction(fnc)) {
			fnc();
			return true;
		}
		return false;
	};

	/*	error(oErr)
		Call whenever their is an error in the program.
		@param: oErr - Error object.
					errorFile: File the error occured in.
					errorFunction: Function the error occured in.
					errorLog: Message to say in console.error().
					errorMessage: Message to tell user.
	*/
	_public.error = function(oErr) {
		var defaults = {errorFile: "UNKNOWN", errorFunction: "UNKNOWN", errorMessage: ""};
		oErr = $.extend(defaults, oErr);
		console.error("File: [" + oErr.errorFile + "], Function: [" + oErr.errorFunction + "], Info: " + oErr.errorLog);
		if (!oErr.errorMessage.isBlank()) {
			Wog.Pages.toast(oErr.errorMessage);
		}
		errorLog.insert(oErr);
	};

	_public.getErrorLog = function() {
		return errorLog;
	};

	return _public;

}();