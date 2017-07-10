var App = function() {

	// PRIVATE ---------------------------------------------------------------------------------------------------------------------------------------

	var _public = {};

	var username = 'franklingu';
	var password = 'roxy9704';

	function clickedHomeCarousel(event) {
		var target = $(event.target);
		if (target.hasClass('center-block')) {
			if (target.data('target')) {
				$('.nav-tabs a[href="#' + target.data('target') + '"]').tab('show');
			}
		}
	}

	function createEventTriggers() {
		$('#crsHome').click(clickedHomeCarousel);
		$('#btnAdminLogin').click(loginAdmin);
		$('#btnContact').click(emailContactForm);
	}

	function emailContactForm(event) {
		event.preventDefault();
	}

	function loginAdmin(event) {
		var inpUser = $('#inpUser');
		var inpPass = $('#inpPass');
		var adminAlert = $('#alertAdminLogin');
		var error = false;
		var txtError = "Please enter a ";
		adminAlert.addClass('hidden');
		if (inpUser.val() == '') {
			error = true;
			txtError += 'username';
		}
		if (inpPass.val() == '') {
			if (error) {
				txtError += ' and a password';
			}
			else {
				error = true;
				txtError += ' password';
			}
		}
		if (error) {
			toggleAlert(adminAlert, txtError, 'alert-warning', 'alert-danger alert-success');
		}
		else {
			if (inpUser.val() == username && inpPass.val() == password) {
				toggleAlert(adminAlert, 'Login Successful!', 'alert-success', 'alert-warning alert-danger');
			}
			else {
				toggleAlert(adminAlert, 'Username or password is incorrect', 'alert-danger', 'alert-success alert-warning');
			}
		}
		event.preventDefault();
	}

	function toggleAlert(alert, txt, txtClassAdd, txtClassRemove) {
		alert.removeClass(txtClassRemove);
		alert.addClass(txtClassAdd);
		alert.children('span').text(txt);
		alert.removeClass('hidden');
		window.setTimeout(function() {
			alert.addClass('hidden');
		}, 2000);
	}

	// PUBLIC ----------------------------------------------------------------------------------------------------------------------------------------

	_public._init = function() {
		$('#tabNavigation a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});
		createEventTriggers();
	};

	return _public;

}();	