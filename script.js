document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// const SyllabusCNfisrst = document.querySelector("#Syl_CN_first");

// console.log(SyllabusCNfisrst);
// console.log(document.getElementById("Unit_first"));

// const syllabusShow = $("#Unit_first");

const Myfunction = function () {
  document.getElementById("Unit_first").style.display = "block";
};

const closefunction = function () {
  document.getElementById("Unit_first").style.display = "none";
};

const comrMathcls = document.querySelector(".comrMath");

console.log(comrMathcls);

document.querySelector("#Syl_CN_first").addEventListener("click", function () {
  console.log("clicked");
  comrMathcls.classList.toggle("active");
});

document
  .querySelector("#Syl_OOPAD_first")
  .addEventListener("click", function () {
    console.log("clicked");
    document.querySelector(".oopad").classList.toggle("active");
  });

document
  .querySelector("#Syl_first_advDatabase")
  .addEventListener("click", function () {
    document.querySelector(".advD").classList.toggle("active");
  });
