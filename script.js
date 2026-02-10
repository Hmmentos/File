function openFolder(folder, link) {
  const id = folder.querySelector("p").innerText;
  localStorage.setItem(id, "opened");

  folder.classList.add("used");

  setTimeout(() => {
    window.location.href = link;
  }, 300);
}

window.onload = () => {
  document.querySelectorAll(".folder").forEach(folder => {
    const id = folder.querySelector("p").innerText;
    if (localStorage.getItem(id)) {
      folder.classList.add("used");
    }
  });
};
