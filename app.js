  let typed = new Typed("#typed-text", {
    strings: ["UX UI Designer", "Graphic Designer", "Web Developer"],
    typeSpeed: 80,     // typing speed
    backSpeed: 50,     // backspacing speed
    backDelay: 1500,   // pause before deleting
    loop: true         // keep looping
  });




  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// ScrollBtn

let scrollBtn = document.querySelector(".scroll-up");

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// HeaderSection

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  if (!header) return;
  const THRESHOLD = 850; // change this to your desired trigger point

  // Helper to toggle sticky and prevent layout jump
  function setSticky(isSticky) {
    if (isSticky) {
      if (!header.classList.contains("scrolled")) {
        header.classList.add("scrolled");
        // prevent page content jumping by adding equal padding to body
        document.body.style.paddingTop = header.offsetHeight + "px";
      }
    } else {
      if (header.classList.contains("scrolled")) {
        header.classList.remove("scrolled");
        document.body.style.paddingTop = ""; // reset
      }
    }
  }

  function onScroll() {
    setSticky(window.scrollY > THRESHOLD);
  }

  // Bind and run once (in case page opened scrolled)
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});




// menu active

let menus = document.querySelectorAll('.menu');

menus.forEach(menu => {
  menu.addEventListener('click', () => {
    menus.forEach(m => m.classList.remove('menu-active')); // remove old active
    menu.classList.add('menu-active'); // set new active
  });
});




// MenuBar
(function () {
	$('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})();






function openPopup(imgSrc) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-img").src = imgSrc;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function closeOnOutsideClick(event) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  if (event.target === popup) { // click outside the image
    closePopup();
  }
}