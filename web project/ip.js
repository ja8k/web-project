$(document).ready(function(){
	$.get(" https://geo.ipify.org/api/v1?apiKey=at_5Aj3IudzBZr8KB3k9FkKdvu3uV6HW&ipAddress", function(data, status){
		var tab;
			
		tab = "Twoje IP to: " + data.ip + "<br>";
		tab += "Kraj: " + data.location.country + "<br>";
		tab += "Region: " + data.location.region + "<br>";
		tab += "Miasto: " + data.location.city + "<br>";
		document.getElementById("ext").innerHTML = tab;
	});
}); 	