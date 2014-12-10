// sections
var href = window.location.href;

function getHashSectionName(url){
	//return the current section name or -1 if not provided
	var hashIndex = url.indexOf('#');

	if(hashIndex === -1){
		return hashIndex;
	}

	return url.substr(hashIndex +1 );
}

function hideAllSections(){
	$('section').hide();
}

function showSection(name){
	$('#' + name).show();
}

var currentSection = getHashSectionName(href);
if(currentSection === -1){
	$('#home').show();
}else{
	showSection(currentSection);
}

$('nav li a').on('click', function(){
	hideAllSections();
	showSection(getHashSectionName(this.href));
});

// workshop toggle
var workshopHeadings = $('.workshops h4');

workshopHeadings.on('click', function(){
    // $(this).toggleClass('hide');
    $(this).next().slideToggle();
});