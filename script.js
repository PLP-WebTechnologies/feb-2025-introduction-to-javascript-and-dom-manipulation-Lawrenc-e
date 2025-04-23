function changeContent() {
    const description = document.getElementById("description");
    description.textContent = "The content has been changed dynamically!";
    description.style.color = "blue";
    description.style.fontSize = "20px";
    description.style.fontWeight = "bold";
  }
  
  function toggleElement() {
    const container = document.getElementById("extra-info-container");
    const existing = document.getElementById("extra-paragraph");
  
    if (existing) {
      container.removeChild(existing);
    } else {
      const newPara = document.createElement("p");
      newPara.id = "extra-paragraph";
      newPara.textContent = "Here’s some extra info that was just added!";
      container.appendChild(newPara);
    }
  }
  