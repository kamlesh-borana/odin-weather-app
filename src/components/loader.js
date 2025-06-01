const loaderContainerClassName = "loader-container";

export function renderLoader(container) {
  const loaderContainer = document.createElement("div");
  loaderContainer.classList.add(loaderContainerClassName);

  const loadPara = document.createElement("p");
  loadPara.textContent = "Loading...";

  loaderContainer.append(loadPara);

  container.append(loaderContainer);
}

export function removeLoader(container) {
  const loaderContainer = container.querySelector(
    `.${loaderContainerClassName}`
  );
  loaderContainer.remove();
}
