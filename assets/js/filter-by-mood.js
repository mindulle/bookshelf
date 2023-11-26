function filterByMood(id) {
  const contents = document.querySelectorAll(".collapsible > *");
  const isFormChecked = document.getElementById(id).matches(":checked");
  const selectedType = document.querySelector(`#${id} + div > div.paper-switch-tile-card-back`).textContent.trim();

  if (isFormChecked) {
    contents.forEach(content => {
      if (content.classList.contains(selectedType)) content.classList.remove("hide");
    });
    return;
  }

  contents.forEach(content => {
    if (content.classList.contains(selectedType)) content.classList.add("hide");
  });
}
