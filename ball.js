
      const canvas = document.querySelector('canvas');

     
      const width = window.innerWidth;
      const height = window.innerHeight;

      
      canvas.width = width;
      canvas.height = height;

      
      const ctx = canvas.getContext('2d');

      
      class Ball {
        constructor(x, y, velx, vely, size, color) {
          this.x = x; 
          this.y = y; 
          this.velx = velx; 
          this.vely = vely; 
          this.size = size; 
          this.color = color; 
        }

        
        drawBall() {
          ctx.beginPath(); 
          ctx.fillStyle = this.color; 
          ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
          ctx.fill(); 
        }

        
        updateBall() {
          
          if (this.x + this.size >= width || this.x - this.size <= 0) {
            this.velx = - this.velx;
          }

          if (this.y + this.size >= height || this.y - this.size <= 0) {
            this.vely = - this.vely;
          }

          
          this.x += this.velx;
          this.y += this.vely;
        }
      }

     
      function random(min, max) {
				
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
      }

     
      const balls = [];

      while (balls.length < 15) {
        let size = random(5, 8);

       
        const ball = new Ball(
          random(size, width - size),
          random(size, height - size),
          random(-11, 11),
          random(-11, 11),
          size,
          `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);

        balls.push(ball);
      }

     
      function loop() {
      
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);

      
        for (let i = 0; i < balls.length; i++) {
          balls[i].drawBall();
          balls[i].updateBall();
        }

        
        requestAnimationFrame(loop);
      }

   
      loop();




