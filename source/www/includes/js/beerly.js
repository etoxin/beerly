/* Beerly */

window.Beerly = window.Beerly || {};

window.Beerly = {

	initialise: function () {
		this.maps();
	},

	maps: function () {
		var mapOptions = {
			center: new google.maps.LatLng(-33.864,151.207),
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	}
};

$(document).ready(function() {
	Beerly.initialise();
});
