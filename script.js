document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const contentContainer = document.getElementById('contentContainer');
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    contentContainer.classList.toggle('light-mode');
    contentContainer.classList.toggle('dark-mode');
  });
});
