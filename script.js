const projects = [
  {
    title: "Casa Pateo",
    type: "residencial",
    typeLabel: "Residencial",
    year: "2024",
    location: "Cascais",
    description:
      "Remodelação integral de moradia com reorganização do piso térreo e forte relação com o jardim.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Galeria Norte",
    type: "comercial",
    typeLabel: "Comercial",
    year: "2023",
    location: "Porto",
    description:
      "Espaço expositivo com desenho depurado, circulação fluida e iluminação pensada para peças de grande escala.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Edifício Alfama",
    type: "reabilitacao",
    typeLabel: "Reabilitação",
    year: "2022",
    location: "Lisboa",
    description:
      "Intervenção em edifício histórico com atualização funcional e preservação dos elementos construtivos originais.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Casa Arribas",
    type: "residencial",
    typeLabel: "Residencial",
    year: "2021",
    location: "Ericeira",
    description:
      "Habitação unifamiliar voltada ao Atlântico, com materiais minerais, pátios protegidos e luz controlada.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Estúdio Vértice",
    type: "comercial",
    typeLabel: "Comercial",
    year: "2024",
    location: "Braga",
    description:
      "Transformação de escritório criativo com zonas colaborativas, acústica reforçada e presença material discreta.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Quinta da Fonte",
    type: "reabilitacao",
    typeLabel: "Reabilitação",
    year: "2020",
    location: "Sintra",
    description:
      "Recuperação de volume rural com adaptação a nova vivência contemporânea e cuidado na integração paisagística.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
];

const projectGrid = document.querySelector("#projects-grid");
const template = document.querySelector("#project-card-template");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProjects(filter = "all") {
  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.type === filter);

  projectGrid.innerHTML = "";

  filteredProjects.forEach((project) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".project-image").src = project.image;
    clone.querySelector(".project-image").alt = `${project.title}, projeto em ${project.location}`;
    clone.querySelector(".project-type").textContent = project.typeLabel;
    clone.querySelector(".project-year").textContent = project.year;
    clone.querySelector(".project-title").textContent = project.title;
    clone.querySelector(".project-location").textContent = project.location;
    clone.querySelector(".project-description").textContent = project.description;
    projectGrid.appendChild(clone);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
