(function () {
  const showListWrapper = document.querySelectorAll(
    ".cut__show"
  );

  if (showListWrapper.length) {
    showListWrapper.forEach(function (wrapper) {
      const showList = wrapper.querySelector(
        ".cut__list-show"
      );

      const showListItems = showList.querySelectorAll(
        ".cut__var"
      );

      const showMoreButton = wrapper.querySelector(
        ".cut__btn"
      );

      if (
        showListWrapper &&
        showListItems.length > 2 &&
        showMoreButton
      ) {
        let isCollapsed = false;

        function toggleItemsVisibility(show) {
          showListItems.forEach(function (item, index) {
            if (index < 2) {
              return;
            }

            item.style.display = show ? "" : "none";
          });
        }

        toggleItemsVisibility(false);
        showMoreButton.classList.add("__is-visible");
        isCollapsed = true;
        showMoreButton.addEventListener("click", function () {
          if (isCollapsed) {
            toggleItemsVisibility(true);
            showMoreButton.innerText = "Weniger Details";

            isCollapsed = false;
            return;
          }

          if (!isCollapsed) {
            toggleItemsVisibility(false);
            showMoreButton.innerText = "Mehr Details";
            isCollapsed = true;
            return;
          }
        });
      }
    });
  }
})();

