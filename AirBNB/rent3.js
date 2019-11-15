

var calendar = document.getElementById('calendar');
calendar.addEventListener('click',function(){
	this.classList.add('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');

	// ----------------------------------------- // 
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'block';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("priceDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
});

var price = document.getElementById('pricing');
price.addEventListener('click',function(){
	this.classList.add('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');
// --------------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var pricingDiv = document.getElementById("priceDiv").style.display = 'block';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("photosDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
});

var overview = document.getElementById('overview');
overview.addEventListener('click',function(){
	this.classList.add('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');
	// ----------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'block';
	var photosDiv = document.getElementById("priceDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
	
});

var photos = document.getElementById('photos');
photos.addEventListener('click',function(){
	this.classList.add('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');
	// --------------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("priceDiv").style.display = 'block';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
});

var amenities = document.getElementById('amenities');
amenities.addEventListener('click',function(){
	this.classList.add('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');
	// --------------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("priceDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'block';
});

var listing = document.getElementById('listing');
listing.addEventListener('click',function(){
	this.classList.add('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var locations = document.getElementById('loc');
	locations.classList.remove('active');
	// --------------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("priceDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'none';
	var listingDiv = document.getElementById("listingDiv").style.display = 'block';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
});

var locations = document.getElementById('loc');
locations.addEventListener('click',function(){
	this.classList.add('active');
	var calendar = document.getElementById('calendar');
	calendar.classList.remove('active');
	var price = document.getElementById('pricing');
	price.classList.remove('active');
	var overview = document.getElementById('overview');
	overview.classList.remove('active');
	var photos = document.getElementById('photos');
	photos.classList.remove('active');
	var amenities = document.getElementById('amenities');
	amenities.classList.remove('active');
	var listing = document.getElementById('listing');
	listing.classList.remove('active');
	// --------------------------------------- //
	var calendarDiv = document.getElementById("calendarDiv").style.display = 'none';
	var priceDiv = document.getElementById("priceDiv").style.display = 'none';
	var overviewDiv =document.getElementById("overviewDiv").style.display = 'none';
	var photosDiv = document.getElementById("priceDiv").style.display = 'none';
	var locationDiv = document.getElementById("locationDiv").style.display = 'block';
	var listingDiv = document.getElementById("listingDiv").style.display = 'none';
	var amenitiesDiv = document.getElementById("amenitiesDiv").style.display = 'none';
});


// var leftButtons = document.getElementsByClassName('btnLeft');
// for (var i = 0; i < leftButtons.length; i++) {
// 	leftButtons[i].addEventListener('click', function(){
// 		var element = leftButtons[0];
// 		while(element){
// 			if(element.tagName == 'BUTTON')
// 				{
// 					element.classList.remove('active');
// 				}
// 				element = element.nextSibling;
// 		}
// 		this.classList.add('active');
// 	});
// }