function timelineFilter(button, filterOption) {
  // add and remove active class
  let previousActive = document.getElementsByClassName("active");
  for (let i = 0; i < previousActive.length; i++) {
    previousActive[i].classList.remove("active");
  }
  button.classList.add("active");

  // add and remove list items that don't match the filter option
  let timeline = document.getElementsByTagName("li");
  for (let i = 0; i < timeline.length; i++) {
    timeline[i].style.display = "list-item";
  }
  // this step only necessary if filter option is not "all"
  if (filterOption != "all") {
    for (let i = 0; i < timeline.length; i++) {
      if (timeline[i].id != filterOption) {
        timeline[i].style.display = "none";
      }
    }
  }
}

function navFilter(filterOption) {
  let sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    if (filterOption != sections[i].id) {
      sections[i].style.display = "none";
    } else {
      sections[i].style.display = "block";
    }
  }
}
