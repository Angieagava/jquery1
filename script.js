$(function(){
	console.log('DOM załadowany');
});
var span = $("span");
span.each(function(index, element) {});
$("span:odd").css('color','red');
var paragraphs = $('p');
paragraphs.each(function(index, element) {

var button = '<button class="btn-info" data-tmp="' + index + '">Click me</button>'
$(element).append(button) 

});
$("button").click(function(){

	alert($(this).attr("data-tmp"));

});