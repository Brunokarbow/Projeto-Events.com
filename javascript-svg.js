document.addEventListener('DOMContentLoaded', function() {
  const meuPath = document.querySelector('.coracao path');
  let corPadrao = true;

  meuPath.addEventListener('click', function() {
    if (corPadrao) {
      this.style.fill = 'rgb(109, 36, 255)';
      corPadrao = false;
    } else {
      this.style.fill = 'white'; // Cor padrão
      corPadrao = true;
    }
  });
});


      


