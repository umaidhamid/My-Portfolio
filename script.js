let body = document.querySelector("body");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  window.scrollTo(0, 0);
  const welcome = document.getElementById("welcome");
  const body = document.body;

  body.style.overflowX = "hidden";
  body.style.overflowY = "scroll";

  welcome.classList.add("hidden");
  setTimeout(() => {
    welcome.style.display = "none";
  }, 500); // match your CSS transition duration for opacity
});
window.onload = () => {
  const welcome = document.getElementById("welcome");
  const body = document.body;

  // Show welcome overlay on every reload
  welcome.style.display = "block";
  welcome.classList.remove("hidden");

  // Disable scroll until Get Start clicked
  body.style.overflowX = "hidden";
  body.style.overflowY = "hidden";
};
let email = document.querySelector("#email");
let nameInput = document.querySelector("#name"); // if you want to check name too

document.querySelector(".helllloform").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = true;
  if (nameInput) {
    if (nameInput.value.trim().length <= 2) {
      document.querySelector(".nameMSG").textContent =
        "Name should be greater than 2 characters";
      isValid = false;
    } else {
      document.querySelector(".name").textContent = "";
    }
  }
  if (!emailRegex.test(email.value.trim())) {
    document.querySelector(".emailMSG").textContent = "Enter a valid email";
    isValid = false;
  } else {
    document.querySelector(".nameMSG").textContent = "...";
  }
  if (isValid) {
    console.log("Form submitted!");
  }
});
document.addEventListener('DOMContentLoaded', function() {
  // Home button
  const homeBtn = document.getElementById('homebtn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // About Me button
  const aboutBtn = document.getElementById('AboutBtn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
      console.log("hello")
      const aboutSection = document.getElementById('AboutMe');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Service button
  const serviceBtn = document.getElementById('ServiceBtn');
  if (serviceBtn) {
    serviceBtn.addEventListener('click', function() {
      const serviceSection = document.getElementById('service');
      if (serviceSection) {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Projects button
  const projectsBtn = document.getElementById('ProjectsBtn');
  if (projectsBtn) {
    projectsBtn.addEventListener('click', function() {
      const projectsSection = document.querySelector('.projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
document.querySelectorAll('.social a').forEach(link => {
  link.addEventListener('click', e => {
    console.log('Clicked:', link.href);
  });
});
