import { projects } from "./projects-data.js"; 

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id"));

const project = projects[projectId];


if (project) {
  

  document.getElementById("project-title").textContent = project.title;
  document.getElementById("title").textContent = project.title;
  // projectImg.classList.add("project");
  document.getElementById("project-description").textContent =
  project.description;
   document.getElementById("project-img").style.backgroundImage = `url(${project.img})`;
   document.getElementById("project-img").style.backgroundSize = "cover";
   document.getElementById("project-img").style.backgroundPosition = "center";


} else {
  document.body.innerHTML = "<h1>Project Not Found</h1>";
}
