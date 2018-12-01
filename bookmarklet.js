document.querySelectorAll('iframe').forEach(function(element) {
	element.src = 'https://placekitten.com/' + element.width + '/'  + element.height;
});
