const selectElement = el => {
  return document.querySelector(el);
};

const toggles = selectElement('.toggles');

toggles.addEventListener('click', toggleBar);

function toggleBar(e) {
  const { target, currentTarget } = e;
  if (currentTarget) {
    const header = selectElement('.header');
    header.classList.toggle('open');
  }
}
