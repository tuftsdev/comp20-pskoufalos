function init()
	{
	var stations = '[{"name": "South Station", "lng": -71.0552400000001, "lat": 42.352271},{"name": "Andrew", "lng": -71.057655, "lat": 42.330154},{"name": "Porter Square", "lng": -71.11914899999999, "lat": 42.3884  },{"name": "Harvard Square", "lng": -71.118956, "lat": 42.373362 },{"name": "JFK/UMass", "lng": -71.052391, "lat": 42.320685},{"name": "Savin Hill", "lng": -71.053331, "lat": 42.31129},{"name": "Park Street", "lng": -71.0624242, "lat": 42.35639457},{"name": "Broadway", "lng": -71.056967, "lat": 42.342622 },{"name": "North Quincy", "lng": -71.029583, "lat": 42.275275 },{"name": "Shawmut", "lng": -71.06573796000001, "lat": 42.29312583 },{"name": "Davis", "lng":-71.121815, "lat": 42.39674},{"name": "Alewife", "lng": -71.142483, "lat": 42.395428 },{"name": "Kendall/MIT", "lng": -71.08617653, "lat": 42.36249079},{"name": "Charles/MGH", "lng": -71.070628, "lat": 42.361166},{"name": "Downtown Crossing", "lng": -71.060225, "lat": 42.355518 },{"name": "Quincy Center", "lng": -71.005409, "lat": 42.251809 },{"name": "Quincy Adams", "lng": -71.007153, "lat": 42.233391 },{"name": "Ashmont", "lng": -71.06448899999999, "lat": 42.284652},{"name": "Wollaston", "lng": -71.0203369, "lat": 42.2665139 },{"name": "Fields Corner", "lng": -71.061667, "lat": 42.300093 },{"name": "Central Square", "lng": -71.103802, "lat": 42.365486 },{"name":"Braintree", "lng":-71.0011385, "lat": 42.2078543 }]';
	var output = JSON.parse(stations);
	

	// var station1 = new google.maps.longiLng(42.352271, -71.05524200000001);
	// HOW ARE YOU MARKING THE FIRST CENTER?
	
	var myOptions = {
		zoom: 13, // The larger the zoom number, the bigger the zoom
		center: output[0],
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	// Create a marker				
	// var marker = new google.maps.Marker({
	// 	position: station1,
	// 	icon: 'pin.png',
	// 	title: "South Station, Boston, MA"
	// });
	for (var i = 0; i < output.length; i++) {
		var station = new google.maps.LatLng(output[i].lat, output[i].lng)
		var marker = new google.maps.Marker({
			position: station,
			icon: 'pin.png',
			title: output[i].name
		});
		marker.setMap(map);
		var info_for_window = [];
		// This is a global info window...
		var infowindow = new google.maps.InfoWindow({
			content: output[i].name
		});

		info_for_window.push(infowindow);

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(this.title);
			infowindow.open(map, this);
		});		
	};
	// var correct_path_coordinates = [
	// {lat:  lng: }
	// {lat: lng: }
	// {lat: lng: }
	// {lat: lng: }
	// {lat: lng: }
	// {lat: lng: }
	// {lat: lng: }

	// ]

	}