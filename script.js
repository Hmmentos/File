function openFolder(folder, link) {
  folder.classList.add("used");

  setTimeout(() => {
    window.location.href = link;
  }, 300);
}


