		/*
* RBootstrap - Marina (https://rbootstrap.com/marina-construction-and-builder-template/)
* Copyright 2023 RBootstrap
*/

(function() {
  "use strict";

/*==========================*/	
/******** Preloader ******/	
/*==========================*/
document.body.onload = function(){
  setTimeout(function() {
    var preloader = document.getElementById('loader');
    if( !preloader.classList.contains('loaded') )
    {
      preloader.classList.add('loaded');
    }
  },300)
}

/*
***** Navigation Menu
*/
window.addEventListener('DOMContentLoaded', event => {

    //1. Activate Bootstrap scrollspy on the main nav element
    const mainMenu = document.body.querySelector('#mainMenu');
    if (mainMenu) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainMenu',
            offset: 76,
        });
    };

	//2. Prevent closing from click inside dropdown
	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		e.stopPropagation();
		});
	})
	// Prevent closing from click inside dropdown

    //3. Navbar shrink on Scroll function and add a fixed-top class
    var navShrinkOnScroll = function () {
        const navbarMenu = document.body.querySelector('#mainMenu');
        if (!navbarMenu) {
            return;
        }
        if (window.scrollY === 0) {
			navbarMenu.classList.remove('navbar-shrink')
        } else {
            navbarMenu.classList.add('navbar-shrink')
        }
    };
	
    // Shrink the navbar 
    navShrinkOnScroll();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navShrinkOnScroll);

	/*4.code to Affix the Nav Menu When scrolled*/
	window.onscroll = (e) => {
		let scrollValue = window.scrollY;
		if (scrollValue > 60) {
			document.querySelector('.navbar').classList.add('fixed-top');
		} else{
			document.querySelector('.navbar').classList.remove('fixed-top');
		}
    scrollFunction();//This is called for Back To Top to work
	}
	/*code to Affix the Nav Menu When scrolled*/
	
	//5. make it as accordion for smaller screens
	//if (window.innerWidth < 992) {

		// close all inner dropdowns when parent is closed
		document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
			everydropdown.addEventListener('hidden.bs.dropdown', function () {
				// after dropdown is hidden, then find all submenus
				  this.querySelectorAll('.submenu').forEach(function(everysubmenu){
					// hide every submenu as well
					everysubmenu.style.display = 'none';
				  });
			})
		});
		
		document.querySelectorAll('.dropdown-menu a').forEach(function(element){
			element.addEventListener('click', function (e) {
	
				let nextEl = this.nextElementSibling;
				if(nextEl && nextEl.classList.contains('submenu')) {	
					// prevent opening link if link needs to open dropdown
					e.preventDefault();
					console.log(nextEl);
					if(nextEl.style.display == 'block'){
						nextEl.style.display = 'none';
					} else {
						nextEl.style.display = 'block';
					}

				}
			});
		})

	//}
	// end if innerWidth

	/*6.Collapse responsive navbar when toggler is visible*/
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#mainMenu .formobile')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
        });
    });


/******************
*** Back To Top *** 
*******************/

//Get the button
let topbutton = document.getElementById("btn-back-to-top");

function scrollFunction() {
if (
	document.body.scrollTop > 20 ||
	document.documentElement.scrollTop > 20
) {
	topbutton.style.display = "block";
} else {
	topbutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
topbutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


		/**********************
		*** Our Team Swiper ***
		**********************/	 
	 new Swiper('.our_experts_block', {
		 speed: 400,
		 loop: true,
		 autoplay: {
				 delay: 5000,
				 disableOnInteraction: false
			 },
 
		 slidesPerView: 'auto',
		 pagination: {
			 el: '.swiper-pagination',
			 type: 'bullets',
			 clickable: true
		 },
		 breakpoints: {
			 320: {
				 slidesPerView: 1,
				 spaceBetween: 20
			 },
			 750: {
				 slidesPerView:2,
				 spaceBetween: 20
			 },
			 992: {
				 slidesPerView: 2,
				 spaceBetween: 20
			 },
			 1200: {
				 slidesPerView: 3,
				 spaceBetween: 20
			 }
		 }
	 }); 


/**
 * Easy selector helper function
 */
const select = (elem, all = false) => {
  elem = elem.trim()
  if (all) {
    return [...document.querySelectorAll(elem)]
  } else {
    return document.querySelector(elem)
  }
}
  
/**
 ** Easy event listener function
 **/
const on = (type, elem, listener, all = false) => {
  let selectElem = select(elem, all)
  if (selectElem) {
    if (all) {
      selectElem.forEach(e => e.addEventListener(type, listener))
    } else {
      selectElem.addEventListener(type, listener)
    }
  }
}

/**
 * Porfolio isotope and filter
 */
 window.addEventListener('load', () => {
	let portfolioContainer = select('.portfolio-container');
	if (portfolioContainer) {
		let portfolioIsotope = new Isotope(portfolioContainer, {
			itemSelector: '.portfolio-item',
			layoutMode: 'fitRows'
		});

		let portfolioFilters = select('#portfolio-filters li', true);

		on('click', '#portfolio-filters li', function(e) {
			e.preventDefault();
			portfolioFilters.forEach(function(el) {
				el.classList.remove('filter-active');
			});
			this.classList.add('filter-active');

			portfolioIsotope.arrange({
				filter: this.getAttribute('data-filter')
			});
		}, true);
	}

});

/**
* Initiate portfolio lightbox 
*/
const portfolioLightbox = GLightbox({
selector: '.portfolio-lightbox'
});

  /**
  ** Contact Form
  ***/ 
  /*Prevent default button click behaviour*/
  function frmSubmit(event) {
    event.preventDefault();
  }

  const form = document.getElementById('ajaxform');
  form.addEventListener('submit', frmSubmit);
  /*Prevent default button click behaviour*/  
  
  /*Add Bootstrap Validation to the form*/  
  const forms = document.querySelectorAll('.requires-validation')
  Array.from(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  /*Bootstrap Validation to the form ends*/  



  

});


})()
