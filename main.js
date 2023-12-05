

<body>
  <canvas id="myCanvas" width="400" height="200"></canvas>

  <script>
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Draw red rectangle on the canvas
    ctx.fillStyle = 'red';
    ctx.fillRect(50, 50, 200, 100);

    canvas.addEventListener('mousemove', function(event) {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Check if the mouse is inside the red rectangle
      if (mouseX >= 50 && mouseX <= 250 && mouseY >= 50 && mouseY <= 150) {
        document.body.style.backgroundColor = 'red';
      } else {
        document.body.style.backgroundColor = 'white';
      }
    });
  </script>
</body>
</html>
