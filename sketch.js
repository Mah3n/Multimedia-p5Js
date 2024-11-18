// Contoh dasar pembuatan objek 3D dengan p5.js
function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}
 
function draw() {
  // Mengatur background
  background(200);
 
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(100);
 
  rotateY(frameCount * 0.01);
  rotateX(frameCount * 0.01)
  
  push();
  translate(0, -70, 0);
  fill(255, 244, 79);
  sphere(80);
  pop();
  
  push();
  fill(0, 0, 0)
  ellipsoid(30, 30)
  pop();
  
  push(); 
  fill(255, 0, 0); 
  cone(100, 60); 
  pop();
  
}