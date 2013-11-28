window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);

$(document).ready(function() {

	var isPresentingModal = false,
	confirmModalDismiss = false,
	stateCleanupTimeout = 300;	//milliseconds
	modalClasses = ['select-post-type'];

	//
	// removes all modal states from the body element
	// state animations are handled in stylesheets
	var cleanupPresentingModal = function() {
		isPresentingModal = false;
		confirmModalDismiss = false;
		$('body').removeClass(modalClasses.join(' '));

		// perform any custom state cleanup
		setTimeout(function() {
			$('#post-new-message').removeClass();
		}, stateCleanupTimeout);
	};
	$('#thread-container, .cancel-button').click(function(e) {
		e.preventDefault();

		if (isPresentingModal && (! confirmModalDismiss || (confirmModalDismiss && confirm("Are you sure you want to cancel?")))) {
			cleanupPresentingModal();
		}
	});

	//
	// takeover the screen with a loading spinner
	var spinner;
	var showSpinner = function(doShow) {
		var spinnerId = 'spinner-takeover';
		if (doShow) {
			var $spinner = $('<div>');
			$spinner.attr('id', spinnerId);
			$('body').append($spinner);

			var opts = {
				lines: 11,
				length: 26,
				width: 9,
				radius: 28,
				corners: 1,
				rotate: 42,
				direction: 1,
				color: '#fff',
				speed: 1,
				trail: 60,
				shadow: false,
				hwaccel: true,
				zIndex: 2e9,
				top: 'auto',
				left: 'auto'
			};
			var target = $spinner[0];
			spinner = new Spinner(opts).spin(target);
		}
		else {
			spinner.stop();
			$('#' + spinnerId).remove();
		}
	};

	//
	// remove navigation and tab bar when keyboard is present
	$('input[type="text"]').focus(function(e) {
		$('.tabbar-container, .	nav-container').hide();
	}).blur(function(e) {
		$('.tabbar-container, .nav-container').show();
	});

	//
	// toggle open and close on threads
	$('.expand-button, .thread-disclose-button').click(function(e) {
		e.preventDefault();

		if (! isPresentingModal) {
			var $thread = $(this).parents('.thread').eq(0);

			if ($thread.length) {
				$thread.toggleClass('collapsed')
			}
		}
	});

	//
	// faux-delete button displaying native confirm box
	$('.remove-button').click(function(e) {
		e.preventDefault();

		if (! isPresentingModal) {
			// likely best to change this to Phongap's alert
			// http://docs.phonegap.com/en/1.0.0/phonegap_notification_notification.md.html
			var doDelete = confirm('Are you sure you want to delete this message?');
			if (doDelete) {
				// handle delete
			}
		}
	});

	//
	// handle back button clicks using data attributes for changing state
	// don't check for modal since back buttons should be in modals
	$('.back-button').click(function(e) {
		e.preventDefault();

		if (confirm('Are you sure you want to go back?')) {
			var $this = $(this),
			$selector = $('#' + $this.data('state-id'));
			$selector.removeClass();
			confirmModalDismiss = false;
		}
	});

	//
	// setup # comments and # new comments for each thread
	$('.thread').each(function(idx, val) {
		var $this = $(this),
		replies = $this.find('.post:not(.reply, :first-child)'),
		unread = replies.filter('.unread'),
		$disclose = $this.find('.thread-disclose-button'),
		$span = $('<span>');

		$span.html(replies.length + ' comments <span class="hideme">hidden</span>');
		$disclose.append($span);

		if (unread.length) {
			var $span = $('<span>').html('(' + unread.length + ' new)').addClass('new');
			$disclose.append($span);
		}
	});

	//
	// function vars for quick toggling state of action banner
	var selectPostType = function(e) {
		isPresentingModal = true;
		$('body').addClass('select-post-type');
	},
	displaySearch = function(e) {
		isPresentingModal = true;
	},
	$actionBannerButton = $('#action-banner-button');

	//
	// default state is new post
	$actionBannerButton.click(selectPostType);

	//
	// toggle functions and state of new post and search for action banner
	$('#action-search').click(function(e) {
		e.preventDefault();

		if (! isPresentingModal) {
			$('#action-banner').addClass('action-search').removeClass('action-post');
			$actionBannerButton.click(displaySearch);
		}
	});
	$('#action-post').click(function(e) {
		e.preventDefault();

		if (! isPresentingModal) {
			$('#action-banner').addClass('action-post').removeClass('action-search');
			$actionBannerButton.click(selectPostType);
		}
	});

	//
	// add state for create a new post
	$('#select-post-message-button').click(function(e) {
		e.preventDefault();

		confirmModalDismiss = true;
		$('#post-new-message').addClass('create-new-post').removeClass('create-new-mood');
	});

	//
	// add state for create a new mood
	$('#select-post-mood-button').click(function(e) {
		e.preventDefault();

		confirmModalDismiss = true;
		$('#post-new-message').addClass('create-new-mood').removeClass('create-new-post');
	});

	//
	// toggle selected state for circles
	var $postCircles = $('#create-new-post .circle-bucket .circle');
	$postCircles.click(function(e) {
		e.preventDefault();

		var $this = $(this);
		if (! $this.hasClass('selected')) {
			$postCircles.removeClass('selected');
			$(this).addClass('selected');

			// handle custom events for limited
			if (this.id == 'circle-limited') {

			}
			// handle custom events for private
			else if (this.id == 'circle-private') {
				
			}
		}
	});

	//
	// setup facebook and twitter switches
	var twitterSwitch = new Switch(document.querySelector('#post-twitter-switch')),
	facebookSwitch = new Switch(document.querySelector('#post-facebook-switch'));

	$(twitterSwitch.el).addClass('twitter-switch');
	$(facebookSwitch.el).addClass('facebook-switch');

	twitterSwitch.el.addEventListener('click', function(e){
		e.preventDefault();
		twitterSwitch.toggle();
	}, false);

	facebookSwitch.el.addEventListener('click', function(e){
		e.preventDefault();
		facebookSwitch.toggle();
	}, false);

	$('#post-message-button').click(function(e) {
		showSpinner(true);

		setTimeout(function() {
			showSpinner(false);
			cleanupPresentingModal();
		}, 2000);
	});

	//
	// toggle individuals in circles, either 1-to-1 or limited
	var $selectableCircles = $('#create-new-post .select-circles-bucket .circle');
	$selectableCircles.click(function(e) {
		$(this).toggleClass('selected');
	});

	$('#include-all-limited').click(function(e) {
		$selectableCircles.addClass('selected');
	});

	$('#remove-all-limited').click(function(e) {
		$selectableCircles.removeClass('selected');
	});

});