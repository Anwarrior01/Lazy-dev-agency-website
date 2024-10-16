import { projects } from "./projects-data.js";

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id"));

const project = projects[projectId];

if (project) {

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("title").textContent = project.title;
  document.getElementById("project-description").textContent =
    project.description;

  document.getElementById(
    "project-img"
  ).style.backgroundImage = `url(${project.img})`;
  document.getElementById("project-img").style.backgroundSize = "cover";
  document.getElementById("project-img").style.backgroundPosition = "center";
 document.getElementById(
   "screen"
 ).style.backgroundImage = `url(${project.screenshots})`;
 
document.getElementById("screen-description").textContent =
  project.description2;


  const technologiesDiv = document.getElementById("technologies");
  let technologiesHTML = "";

  project.technologies.forEach((tech, index) => {

    if (index % 2 === 0) {
      technologiesHTML += `<div class="tech-row">`;
    }

    technologiesHTML += `
      <div class="tech-item">
        <img src="./img/icons/${tech.icon}.png" alt="${tech.name}" class="tech-icon">
        <span class="tech-name">${tech.name}</span>
      </div>
    `;


    if (index % 2 === 1 || index === project.technologies.length - 1) {
      technologiesHTML += `</div>`;
    }
  });

  technologiesDiv.innerHTML = technologiesHTML;
} else {
  document.body.innerHTML = "<h1>Project Not Found</h1>";
}
