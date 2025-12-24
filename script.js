window.addEventListener("load", function () {
    alert("Welcome to my portfolio!");
});

const aboutParagraph = document.querySelector("#about-me p");

const originalText = aboutParagraph.textContent;
const newText =
  "I am a motivated developer constantly learning new technologies and building projects to improve my skills.";

let isOriginal = true;

const changeTextButton = document.getElementById("change-text");
changeTextButton.textContent = "Change About Me Text";

aboutParagraph.after(changeTextButton);

changeTextButton.addEventListener("click", function () {
  if (isOriginal) {
    aboutParagraph.textContent = newText;
    changeTextButton.textContent = "Restore Original Text";
  } else {
    aboutParagraph.textContent = originalText;
    changeTextButton.textContent = "Change About Me Text";
  }

  isOriginal = !isOriginal;
});

// Show / hide Projects section
const projectsSection = document.querySelector("#projects");

const toggleProjectsButton = document.getElementById("show-projects");
toggleProjectsButton.textContent = "Show / Hide Projects";

projectsSection.before(toggleProjectsButton);

toggleProjectsButton.addEventListener("click", function () {
    if (projectsSection.style.display === "none") {
        projectsSection.style.display = "flex";
    } else {
        projectsSection.style.display = "none";
    }
});
