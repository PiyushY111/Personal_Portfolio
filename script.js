var typed = new Typed("#element", {
  strings: [
    "Programming",
    "Web Development",
    "Problem Solving",
    "Continuous Learning",
    "Tech Exploration",
    "Building Cool Projects",
  ],
  typeSpeed: 30,
  loop: true,
  backDelay: 900,
  backSpeed: 30,
});

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    let tar = e.target;

    if (tar.hasAttribute("data-dl")) {
      let dlClass = "dl-working";
      if (!tar.classList.contains(dlClass)) {
        let lastSpan = tar.querySelector("span:last-child"),
          lastSpanText = lastSpan.textContent,
          timeout = getMSFromProperty("--dur", ":root");

        tar.classList.add(dlClass);
        lastSpan.textContent = "Downloading…";
        tar.disabled = true;
        tar.style.borderColor = "#ffffff";
        tar.style.color = "#ffffff";

        setTimeout(() => {
          lastSpan.textContent = "Completed!";
        }, timeout * 0.9);

        setTimeout(() => {
          tar.classList.remove(dlClass);
          lastSpan.textContent = lastSpanText;
          tar.disabled = false;
          tar.style.borderColor = "";
          tar.style.color = "";
        }, timeout + 1000);
      }
    }
  });
});

function getMSFromProperty(prop, el) {
  return parseFloat(getComputedStyle(document.querySelector(el)).getPropertyValue(prop)) * 1000;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all navbar links
  const navbarLinks = document.querySelectorAll(".navbar-link");

  // Function to highlight the active link
  function highlightNavbarLink() {
    const sections = document.querySelectorAll("article");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        navbarLinks.forEach(link => {
          link.classList.remove("active");
        });
        navbarLinks[index].classList.add("active");
      }
    });

  }

  window.addEventListener("scroll", highlightNavbarLink);
  highlightNavbarLink();
});

document.addEventListener("DOMContentLoaded", function () {
  // Get all navbar links
  const navbarLinks = document.querySelectorAll(".sid-navbar-link");

  // Function to highlight the active link
  function highlightNavbarLink() {
    const sections = document.querySelectorAll("article");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        navbarLinks.forEach(link => {
          link.classList.remove("active");
        });
        navbarLinks[index].classList.add("active");
      }
    });

  }

  window.addEventListener("scroll", highlightNavbarLink);
  highlightNavbarLink();
});



// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Hide the first preloader after a delay
    setTimeout(function() {
        document.querySelector('.first-preloader').style.display = 'none';
        // Show the second preloader
        document.querySelector('.second-preloader').style.display = 'block';
    }, 4000); // Adjust the delay time as needed

    // Hide the entire preloader and show the website content after another delay
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        // Add any additional code here to show the website content or load other scripts
    }, 9000); // Adjust the delay time as needed
});
