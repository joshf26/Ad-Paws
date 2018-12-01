const ad_list = document.querySelectorAll('iframe[title="Ad"]'); // Selects all ads on the page.

ad_list.forEach(function(element) {	// For each ad element,
	let width = element.width;
	let height = element.height;

	element.src = 'https://placekitten.com/' + width + '/'  + height;
});
