
jQuery(document).ready(function(){
  /*************Stckty Nav *******************/
  jQuery('.header_menu').slicknav({
       prependTo:'#menu2',
       label:'',
       duration: 500,
       allowParentLinks:'true'
    }); 
    });


/*-----Accoration------*/

/*var acc = document.getElementsByClassName("promo_code");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
     
    } 
  });
}*/
/* View Details Code*/
/*$(document).ready(function () {
    $("#fold").click(function () {
        $("#fold_p").fadeOut(function () {
            $("#fold_p").text(($("#fold_p").text() == 'View Details') ? 'Hide Details' : 'View Details').fadeIn();
        })
    })
});*/

/*---------------Active----------*/

	$(document).ready(function(){
    $('#header .header_menuul li a').click(function(){
    $('.header_menuul li a').removeClass("active");
    $(this).addClass("active");
});
});



/*-------------------Blog Inner Slider--------------------*/

// $(document).ready(function () {

//     $('.flexslider').flexslider({
//         animation: 'fade',
//         controlsContainer: '.flexslider'
//     });
// });

/*----------------------color change-----------------------*/


var colorSelect = 0;
jQuery( ".colorPick" ).each(function(index) {
	jQuery(this).on("click", function(){
		var colorId = jQuery(this).attr('id');
		var colorIdNumber = colorId.substr(colorId.length - 2);
		var colorContentImg = jQuery("#color"+colorIdNumber+" img").clone();
		var colorContentName = jQuery("#color"+colorIdNumber+" span").clone();
		jQuery("#selectedColor").html(colorContentImg);
		jQuery("#colorName").html(colorContentName);
		colorSelect=colorIdNumber;
	});
	jQuery(this).on("mouseenter", function(){
		var colorId = jQuery(this).attr('id');
		var colorIdNumber = colorId.substr(colorId.length - 2);
		var colorContentImg = jQuery("#color"+colorIdNumber+" img").clone();
		var colorContentName = jQuery("#color"+colorIdNumber+" span").clone();
		jQuery("#selectedColor").html(colorContentImg);
		jQuery("#colorName").html(colorContentName);
	});
	jQuery(this).on("mouseleave", function(){
		var colorId = jQuery(this).attr('id');
		var colorIdNumber = colorSelect;
		var colorContentImg = jQuery("#color"+colorIdNumber+" img").clone();
		var colorContentName = jQuery("#color"+colorIdNumber+" span").clone();
		jQuery("#selectedColor").html(colorContentImg);
		jQuery("#colorName").html(colorContentName);
	});
});

function startDesignLink(colorLink) {
  jQuery(".disenar-ahora").attr("href", colorLink);
}


/*---------tab for column------------------*/


function openCity(evt, cityName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


/*--------------Tab for Clothing-----------------*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

/*-------------------silkinav------------*/
/*---------------------slider Blog-----------------------*/

