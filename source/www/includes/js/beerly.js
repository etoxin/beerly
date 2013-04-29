/* Beerly */

window.Beerly = window.Beerly || {};

window.Beerly = {

	initialise: function () {
		this.maps();
		this.untappd.getFeed();
	},

	maps: function () {
		var mapOptions = {
			center: new google.maps.LatLng(-33.864,151.207),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	},

	untappd: {
		id: 'D483E23443EDA3BF3F89A78199B278737F13CCF8',
		secret: '2410FB3CAF6BE79593A42A5789B78E0AB791435F',
		getFeed: function () {
			var baseUrl = 'http://api.untappd.com/v4/'
			$.ajax({
				url: baseUrl + 'thepub?client_id=' + this.id + '&client_secret=' + this.secret,
				success: function (data) {
					console.log('JSON Loading...');
				},
				complete: function (data) {
					console.log('JSON complete.');
					var responseData = data.responseText,
						responseObject = jQuery.parseJSON(responseData);
					console.log(responseObject);
					console.log(responseObject.response.checkins.count	);
					for (var i = 0; i < responseObject.response.checkins.count; i++) {
						$('body').prepend('<p>'+responseObject.response.checkins.items[i].beer.beer_name+'</p>');
						//Do something
					}
				},
				error: function () {
					console.log('An error occured.');
				},
			});
		}
	}
};

$(document).ready(function() {
	Beerly.initialise();
});



