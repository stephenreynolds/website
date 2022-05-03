const removeClass = (id, className) => {
  document.getElementById(id).classList.remove(className);
};

const addClass = (id, className) => {
  document.getElementById(id).classList.add(className);
};

const wrapper = document.getElementById("wrapper");
const intro = document.getElementById("intro");
wrapper.addEventListener("scroll", () => {
  const top = wrapper.scrollTop;
  const introBottom = intro.offsetTop + intro.offsetHeight;
  if (introBottom < top) {
    addClass("header", "reveal");
    addClass("top", "reveal");
  } else {
    removeClass("header", "reveal");
    removeClass("top", "reveal");
  }
});

const selectFrontend = () => {
  removeClass("backend", "selected");
  removeClass("tools", "selected");

  addClass("skills-backend", "display-none");
  addClass("skills-tools", "display-none");

  addClass("frontend", "selected");
  removeClass("skills-frontend", "display-none");
};

const selectBackend = () => {
  removeClass("frontend", "selected");
  removeClass("tools", "selected");

  addClass("skills-frontend", "display-none");
  addClass("skills-tools", "display-none");

  addClass("backend", "selected");
  removeClass("skills-backend", "display-none");
};

const selectTools = () => {
  removeClass("frontend", "selected");
  removeClass("backend", "selected");

  addClass("skills-frontend", "display-none");
  addClass("skills-backend", "display-none");

  addClass("tools", "selected");
  removeClass("skills-tools", "display-none");
};

const selectProject = (index, count) => {
  for (let i = 1; i <= count; i++) {
    removeClass(`project-${i}-thumbnail`, "selected");
    addClass(`project-${i}-content`, "display-none");
  }

  addClass(`project-${index}-thumbnail`, "selected");
  removeClass(`project-${index}-content`, "display-none");
};