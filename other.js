window.addEventListener("load", () => {
    const btn = document.querySelector('.joker');
  
    btn.addEventListener('click', () => {
      alert('Has hecho trampas');
    });
  
    btn.addEventListener('mouseover', moveButton);
  
    function moveButton(e) {
      const btnWidth = btn.offsetWidth;
      const btnHeight = btn.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
  
      let newX, newY;
      do {
        newX = Math.random() * (viewportWidth - btnWidth);
        newY = Math.random() * (viewportHeight - btnHeight);
      } while (isMouseOverButton(e.clientX, e.clientY, newX, newY, btnWidth, btnHeight));
  
      btn.style.position = "absolute";  // Asegura que el botón sea movible
      btn.style.top = newY + "px";
      btn.style.left = newX + "px";
    }
  
    function isMouseOverButton(mX, mY, x, y, width, height) {
      return mX > x && mX < (x + width) && mY > y && mY < (y + height);
    }
  });
  