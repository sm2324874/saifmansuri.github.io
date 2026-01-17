function toggleMode() {
  document.body.classList.toggle("dark");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

// Loader
window.onload = function() {
  document.getElementById("loader").style.display = "none";
};

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Animation
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
sections.forEach(sec => {
  sec.classList.add("hidden");
  observer.observe(sec);
});
