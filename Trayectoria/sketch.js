let x = 0;
let y = 0;
let phi = 45;           // Ángulo en grados
let g = 9.8;
let vo = 8;             // velocidad inicial
let trajectory = [];    // Almacenar las posiciones de la trayectoria
let inputVo;            // Input para ajustar velocidad inical
let buttonStart;        // Botón para iniciar la animación
let currentEmoji = [];  // Alamcena una lista de emojies

function setup() {
  createCanvas(windowWidth, windowHeight);
  phi = radians(phi); // Convertir phi a radianes para funciones trigonométricas
  
  inputVo = createInput('8');    // Crear input para vo
  inputVo.position(60, windowHeight/2 + 40);
  
  buttonStart = createButton('Start Simulation');  // Crear botón de inicio
  buttonStart.position(60, windowHeight/2 + 80);
  buttonStart.mousePressed(restartAnimation);
    
  noLoop();                      // Inicialmente, detener la animación
  
}

function draw() {
  background(255);

  stroke(0, 0, 0);
  strokeWeight(4);
  line(0, windowHeight/2, windowWidth, windowHeight/2);
  
  let scale = 100; // Factor de escala para hacer la trayectoria visible (pixeles)
  let xpos = x * scale; // Ajustar posición x para la escala
  let ypos = (x * tan(phi) - (g * x * x) / (2 * parseFloat(vo) * parseFloat(vo) * cos(phi) * cos(phi))) * scale;
  
  ypos = windowHeight/2 - ypos; // Ajuste de posición
  
  trajectory.push({x: xpos, y: ypos});  // Guardar la posición actual en el arreglo de trayectoria
  
  // Dibujar la trayectoria
  stroke(0, 0, 255); // Color de la línea
  strokeWeight(2); // Tamaño de los puntos de la trayectoria

  for (let i = 0; i < trajectory.length; i++) {
    point(trajectory[i].x, trajectory[i].y); // Dibuja cada punto de la trayectoria

  }
 
  let canonX = 0;               // Posición x para el emoji 
  let canonY = windowHeight/2 - 18;   // Posición y para el emoji
  textSize(30);
  text('🏹', canonX, canonY);  // Emoji 
  
  x += 0.04; // Incremento en desplazamiento (para animación se usa derivado de fps)

  // Dibujar el proyectil y el valor de Y junto a él
  noStroke();
  textSize(25);
  text('💣', xpos - 20, ypos);  // Emoji
  
  noStroke();
  textSize(25);
  if (frameCount % 10 === 0) {                                // Every 10 frames
    currentEmoji = random(['😀', '😟','😨', '😢', '😱']); // Select a new emoji randomly
  }
  text(currentEmoji, xpos - 20, ypos - 30);

  
  
  noStroke();
  textSize(15);
  fill(255, 0, 0); 
  text("y = " + (ypos.toFixed(0) - windowHeight/2)/scale * -1 + ' m', xpos + 20, ypos); // Muestra el valor de Y
  noStroke()
  fill(0, 0, 255);
  text("x = " + (xpos.toFixed(0))/scale + ' m', xpos + 20, ypos - 20); // Muestra el valor de Y

  
  if (xpos > windowWidth || ypos > (windowHeight/2)) { // Detener la simulación al llegar al final de la ventana
    noLoop();
    noStroke();
    fill('black'); 
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Final Results' , windowWidth/2 , windowHeight/2 + 40);
    text('x = ' + (xpos.toFixed(0))/scale + ' m', windowWidth/2 , windowHeight/2 + 60);
    text('y = ' + (ypos.toFixed(0) - windowHeight/2)/scale * -1 + ' m', windowWidth/2 , windowHeight/2 + 80);
    
  }
  
  
  noStroke();
  fill('black'); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text('Example Parabolic Motion [PUCE]', windowWidth/2 , 20);
  
  noStroke();
  fill('black'); 
  textSize(16);
  textAlign(CENTER, CENTER);
  text('Vo[m/s] ', 30, windowHeight/2 + 50);
  
  
  fill('blue'); 
  textAlign(LEFT, CENTER);
  textSize(12);
  text('Structural Engineering: Dynamics, Seismic Solution, and AI Integration [caceli.net]', 20 , windowHeight - 20);
  
  
}

function restartAnimation() {
  vo = inputVo.value();    // Actualiza vo con el valor del input
  x = 0;                   // Reinicia la simulación
  trajectory = [];         // Limpia la trayectoria
  loop();                  // Inicia la animación
}