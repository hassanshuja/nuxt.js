<template>
    <div id="menu">
        <client-only>

        <div class="slicknav_menu">
            <a href="#" aria-haspopup="true" tabindex="0" class="slicknav_btn slicknav_open" style="outline: none;"><span class="slicknav_menutxt"></span><span class="slicknav_icon slicknav_no-text"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><div class="slicknav_nav" aria-hidden="false" role="menu" style="display: block; height: 574px;">
						<ul>
							<li><a href="#" data-toggle="modal" data-target="#login" role="menuitem">SIGN IN / REGISTER</a></li> 
							<li class="slicknav_parent slicknav_collapsed"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="#">MEN</a>
                               <span class="slicknav_arrow">►</span></a><ul role="menu" class="slicknav_hidden" aria-hidden="true" style="display: none;">
							        <li><a href="#" role="menuitem" tabindex="-1">Clothing</a></li>
							   </ul>
							</li>
							<li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="women.html">WOMEN</a>
								  <span class="slicknav_arrow">►</span></a><ul role="menu" class="slicknav_hidden" aria-hidden="true" style="display: none;">
							        <li><a href="#" role="menuitem" tabindex="-1">Women’s Homepage</a></li>
							        <li><a href="#" role="menuitem" tabindex="-1">New Arrivals</a></li>
							        <li><a href="#" role="menuitem" tabindex="-1">Clothing</a></li>
							        <li><a href="#" role="menuitem" tabindex="-1">Women’s Homepage</a></li>
							        <li><a href="#" role="menuitem" tabindex="-1">New Arrivals</a></li>
							     
							      </ul>
							</li>
							<li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a class="active" href="#">SALE</a>
                             <span class="slicknav_arrow">►</span></a><ul role="menu" class="slicknav_hidden" aria-hidden="true" style="display: none;">
							        <li><a href="#" role="menuitem" tabindex="-1">DENIM</a></li>
							   </ul>
							</li>
							<li><a href="blog.html" role="menuitem">BLOG</a></li>
							<li><a href="brands.html" role="menuitem">BRANDS</a></li>
							<li><a href="#" class="btn_menu" role="menuitem">ID / EN</a></li>
							
						</ul>
                       <div class="container-fluid">
                       	<div class="height_set">
							<div class="col-sm-6 col-md-6 inline_rest">
									<div class="header_footer">
										<p>About Apstrofi</p>
										<ul>
											<li><a href="#" role="menuitem">About Us</a></li>
											<li><a href="#" role="menuitem">Smart Sizing</a></li>
											<li><a href="#" role="menuitem">Partnership</a></li>
											<li><a href="#" role="menuitem">Membership</a></li>
											<li><a href="#" role="menuitem">Privacy Policy</a></li>
										</ul>
										<div class="asp_head">
											<span>Apstrofi © 2019</span>
										</div>	
				                    </div>	
					         </div>	
					         <div class="col-sm-6 col-md-6 inline_rest">
									<div class="header_footer">
										<p>Customer Care</p>
										<ul>
											<li><a href="#" role="menuitem">Contact Us</a></li>
											<li><a href="#" role="menuitem">Orders &amp; Shipping</a></li>
											<li><a href="#" role="menuitem">Return &amp; Exchange</a></li>
											<li><a href="#" role="menuitem">Payment Methods</a></li>
											<li><a href="#" role="menuitem">Terms &amp; Conditions</a></li>
										</ul>
										
				                    </div>
				                     <div class="social_media_header">
								<div class="center_icon">
								
                            	<div class="icon social wh"><a href="https://api.whatsapp.com/send?phone=62081299899273&amp;text=Hello%20Apstrofi,%20there's%20something%20i%20want%20to%20ask%20you.%20" target="_blank"><img src="images/whatsapp.png"><!-- <i class="fa fa-whatsapp" aria-hidden="true"></i> --></a></div>
                             <div class="icon social fb"><a href="https://www.facebook.com/apstrofi/" target="_blank"><img src="images/facebook.png"><!-- <i class='fa fa-facebook-square'></i> --></a></div>
                            <div class="icon social in"><a href="https://www.instagram.com/apstrofi/" target="_blank"><img src="images/instagram.png"></a></div>
                            
	                            </div>	
                           </div>	
					         </div>	
					     </div>
					        
                       
				     </div>
					</div>
            </div>
        </client-only>

    </div>
</template>

<script>
export default {
    name: "MobileMenu",
    data() {
        return {
            categoryListMen:[],
            categoryListWomen:[]
        }
    },
    async fetchData({app, store}) {
		let menCat = await app.$axios.$get('men/category');
        let womenCat = await app.$axios.$get('men/category');
        
        console.log(menCat)
        return {
            categoryListMen: menCat.data,
            categoryListWomen: womenCat.data
        }

    },
    mounted(){
         $(document).on('click', '.slicknav_btn', function() {
            $('body').toggleClass("overflow");

            var header = $('div#header .container-fluid').height();
            var header_top = $('div#header_top').height();
            var new_height = parseInt(header) + parseInt(header_top);
            var win_height = $(window).height();
            var final_height = parseInt(win_height) - parseInt(new_height) + parseInt(7);

            setInterval(function(){ 
            $('.slicknav_nav').css('height', final_height);
            }, 300);
            });
        // $(document).click(function(event) { 
        // if($('#mySidenav').length > 0){
        //     document.getElementById("mySidenav").style.width = "0";
        // }
        // });
        // $('body').click(function(){
        //     document.getElementById("mySidenav").style.width = "0";
        // })

        // $(document).click(function(e) {
        //     if (!$(e.target).is('.opennav, .opennav *, .sidenav, .sidenav *')) {
        //         $(".sidenav").hide();
        //     }
        // });
    },
    methods: {
        // openNav() {
        //     $(".sidenav").toggle()
        // },
        // closeNav() {
        //     document.getElementById("mySidenav").style.width = "0";
        // }
        
    }
}
</script>

<style scoped>
.opennav{
    position: absolute;
    top: 50px;
    font-size:15px;
    cursor:pointer !important

}
.sidenav {
  height: 100vh !important;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 100;
  left: 0;
  background-color: #fff;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

@media screen and (min-width: 769px) {
  #menu {
      display: none;
  }
}
</style>