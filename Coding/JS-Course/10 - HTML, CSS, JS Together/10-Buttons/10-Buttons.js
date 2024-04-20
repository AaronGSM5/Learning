function clickButton(Klass) {
  const invButton = document.querySelector(`.${Klass}`);
  const jsButton = document.querySelector('.js-button');
  const aaButton = document.querySelector('.aa-button');
  const abButton = document.querySelector('.ab-button');
  const acButton = document.querySelector('.ac-button');


    if (invButton.classList.contains('is-toggled') === false) {
      aaButton.classList.remove('is-toggled')
      abButton.classList.remove('is-toggled')
      acButton.classList.remove('is-toggled')
      invButton.classList.add('is-toggled');
    }
    else {
      invButton.classList.remove('is-toggled')
    }
  }
 