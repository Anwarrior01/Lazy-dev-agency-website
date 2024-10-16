import { projects } from "./projects-data.js";

const iconMapping = {
  "google-play": "fab fa-google-play",
  "app-store": "fab fa-apple",
  demo: "fas fa-desktop",
  preview: "fas fa-eye",
};

const filterButtons = document.querySelectorAll(".filter-btn");
const projectsContainer = document.getElementById("projects-container");


filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterType = button.getAttribute("data-filter");
    filterProjects(filterType);
  });
});


const validFilters = [
  "all",
  "Mobile Application",
  "Web App",
  "Web Design / Landing Page",
];

function filterProjects(type) {
  if (!validFilters.includes(type)) {
    console.warn(`Invalid filter: ${type}`);
    return;
  }

  projectsContainer.innerHTML = "";
  projects
    .filter((project) => type === "all" || project.type === type)
    .forEach((project) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("project");
      projectCard.style.backgroundImage = `url(${project.img})`;
      projectCard.style.backgroundSize = "cover";
      projectCard.style.backgroundPosition = "center";

      const projectTitle = document.createElement("h2");
      projectTitle.classList.add("project-title");
      projectTitle.textContent = project.title;

      const projectDescription = document.createElement("p");
      projectDescription.textContent = project.description;

      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("projects-buttons");


      project.buttons.forEach((button) => {
        const btn = document.createElement("a");
        btn.href = button.link;
        btn.target = "_blank"; 
        btn.classList.add("pro-btn");

   
        btn.addEventListener("click", (event) => {
          event.stopPropagation();
        });

        btn.innerHTML = `<i class="${iconMapping[button.icon]}"></i> ${
          button.label
        }`;
        buttonsContainer.appendChild(btn);
      });

      const moreInfoContainer = document.createElement("div");
      moreInfoContainer.classList.add("more-info-container");

      const moreInfoButton = document.createElement("button");
      moreInfoButton.textContent = "More Info";
      moreInfoButton.classList.add("btn", "btn-more-info");

      moreInfoButton.onclick = (event) => {
        event.stopPropagation(); 
        window.location.href = `project-details.html?id=${projects.indexOf(
          project
        )}`;
      };


      projectCard.onclick = () => {
        window.location.href = `project-details.html?id=${projects.indexOf(
          project
        )}`;
      };

      moreInfoContainer.appendChild(moreInfoButton);

      projectCard.appendChild(projectTitle);
      projectCard.appendChild(projectDescription);
      projectCard.appendChild(buttonsContainer);
      projectCard.appendChild(moreInfoContainer);

      projectsContainer.appendChild(projectCard);
      projectsContainer.addEventListener("click", (event) => {
        const target = event.target.closest(".pro-btn");
        if (target) {
          event.stopPropagation(); 
        }
      });

    });
}




filterProjects("all");
