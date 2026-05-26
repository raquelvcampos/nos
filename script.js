const pages = document.querySelectorAll(".page");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;

nextBtn.addEventListener("click", () => {

  pages[currentPage].classList.remove("active");

  currentPage++;

  if (currentPage >= pages.length) {
    currentPage = pages.length - 1;
  }

  pages[currentPage].classList.add("active");

  if (currentPage === pages.length - 1) {
    nextBtn.style.display = "none";
  }

});

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

  try {

    await music.play();

    musicBtn.remove();

  } catch (err) {

    alert("Toque novamente para iniciar a música ❤️");

  }

});
