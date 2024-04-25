//copy text function
function copyFunction(){
	var text=document.getElementById("cp1");
	text.select();
  	text.setSelectionRange(0, 99999);
  	navigator.clipboard.writeText(text.value);
	alert("Copied the text: " + text.value);


}

//hamburger animation
function hamAnimation(x) {
  	x.classList.toggle("change");
	var y=document.getElementById("menu-s");
	if (y.style.display == "block") {
    	y.style.display = "none";
  	}else{
    	y.style.display = "block";
  	}
}

//outside click closing menu div
document.addEventListener("click", function(event) {
  	var menuList = document.getElementById("menu-s");
  	var hamButton = document.querySelector(".ham");

if (event.target !== hamButton && !menuList.contains(event.target)) {
    menuList.style.display = "none";
}

});



