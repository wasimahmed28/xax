
$(".checkbtn").click(function(){
  $("#navigation").addClass("open");
});
$(".mobile-menu-close").click(function(){
  $("#navigation").removeClass("open");
});


jQuery('.tabs-head').click(function(){
	jQuery('.tabs__tab').removeClass('active');
	jQuery('.tabs-head').removeClass('active');
	
	var id = jQuery(this).attr('data-tab-value');
	jQuery(this).addClass('active');
	jQuery(id).addClass('active');
})


const accordionTitles = document.querySelectorAll(".accordionItem");

accordionTitles.forEach((accordionTitle) => {
	accordionTitle.addEventListener("click", () => {
		if (accordionTitle.classList.contains("is-open")) {
		  accordionTitle.classList.remove("is-open");
		} else {
		  const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
		  accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
			accordionTitleWithIsOpen.classList.remove("is-open");
		  });
		  accordionTitle.classList.add("is-open");
		}
	});
});

// Get the modal
var modal = document.getElementById("myModal");
var modalVideo = document.getElementById("myModalVideo");
var body = document.getElementsByTagName("body")[0];

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnVideo = document.getElementById("myBtnVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var close = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  body.classList.add("modal-open");
  
}
btnVideo.onclick = function() {
  modalVideo.style.display = "block";
  body.classList.add("modal-open");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	console.log("Sads")

  modal.style.display = "none";
  body.classList.remove("modal-open");
}
close.onclick = function() {
	console.log("Sads")

  modalVideo.style.display = "none";
  body.classList.remove("modal-open");

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	body.classList.remove("modal-open");
  }
  if (event.target == modalVideo) {
    modalVideo.style.display = "none";
	body.classList.remove("modal-open");
  }
}

