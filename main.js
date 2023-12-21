//create account

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the "Click here" button and the "Create Account" section
  const clickHereButton = document.getElementById("clickHere");
  const createAccountSection = document.getElementById("createAccountSection");

  // Add a click event listener to the "Click here" button
  clickHereButton.addEventListener("click", function () {
    // Toggle the visibility of the "Create Account" section
    if (createAccountSection.style.display === "none") {
      createAccountSection.style.display = "block";
    } else {
      createAccountSection.style.display = "none";
    }
  });

  const prenume = document.querySelector("#firstName");
  const nume = document.querySelector("#lastName");
  const nastere = document.querySelector("#birthday");
  const telefon = document.querySelector("#phone");
  const email = document.querySelector("#email");
  const parola = document.querySelector("#password");

  const butonS = document.querySelector("#submitButton"); // Now find the butonS element
  if (butonS) {
    butonS.addEventListener("click", function () {
      alert(
        `Nume: ${nume.value}; prenume: ${prenume.value}; nastere: ${nastere.value}; telefon: ${telefon.value}; email: ${email.value}; parola: ${parola.value}`
      );

      obiectUser.prenume = prenume.value;
      obiectUser.nume = nume.value;
      obiectUser.nastere = nastere.value;
      obiectUser.telefon = telefon.value;
      obiectUser.email = email.value;
      obiectUser.parola = parola.value;

      console.log(obiectUser);
    });
  } else {
    alert("Nu exista!");
  }

  const emailL = document.querySelector("#inputEmailL");
  const parolaL = document.querySelector("#inputPasswordL");

  const butonL = document.querySelector("#butonL"); // Now find the butonL element
  if (butonL) {
    butonL.addEventListener("click", function () {
      console.log(obiectUser);
      console.log(emailL.value, parolaL.value);

      if (
        obiectUser.parola == emailL.value &&
        parolaL.value == obiectUser.parola
      ) {
        alert("Datele de logare sunt corecte!");
      }
    });
  }
});
//indexare partials

const collec = document.querySelector("#navbarDropdown1");
collec.addEventListener("click", function () {
  document.location = "../partials_html/index2.html";
});

//carusel

const multipleItemCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}

//hover poze sectiunea 2
for (let i = 1; i <= 5; i++) {
  let image = document.getElementById(`hover${i}`);

  image.onmouseover = function () {
    image.src = `./hover_sect2/${i}hover.png`;
  };

  image.onmouseout = function () {
    image.src = `./hover_sect2/${i}carusel.png`;
  };
}

//hover poze carusel
for (let i = 1; i <= 13; i++) {
  let image = document.getElementById(`hover-example${i}`);

  image.onmouseover = function () {
    image.src = `./poze/${i}hover.png`;
  };

  image.onmouseout = function () {
    image.src = `./poze/${i}carusel.png`;
  };
}

//hover poze discovery

var image2 = document.getElementById("hover-set1");
image2.onmouseover = function () {
  image2.src = "./discoverysets/discovery1.png";
};
image2.onmouseout = function () {
  image2.src = "./discoverysets/set1.png";
};

var image3 = document.getElementById("hover-set7");
image3.onmouseover = function () {
  image.src = "./discoverysets/discovery7.png";
};
image3.onmouseout = function () {
  image.src = "./discoverysets/set7.png";
};

//carusel 2
const multipleItemCarousel2 = document.querySelector("#carousel2");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel2 = new bootstrap.Carousel(multipleItemCarousel2, {
    interval: false,
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      console.log("prev");
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
  });
} else {
  $(multipleItemCarousel2).addClass("slide");
}

//dropdown on hover
$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(this).addClass("show");
      $(this).find(".dropdown-menu").addClass("show");
    },
    function () {
      $(this).removeClass("show");
      $(this).find(".dropdown-menu").removeClass("show");
    }
  );
});
