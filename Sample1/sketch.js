// ball을 위한 변수
let xPos, xDir; // 공의 x축 위치와 진행 방향
let yPos, yDir; // 공의 y축 위치와 진행 방향
let diam;  // 공의 반지름
let speed; // 공의 속도

// pad를 위한 변수
let padX, padWidth; // pad 중심 x좌표, pad폭

function setup() {
  createCanvas(600, 640);
  speed = 8.5;
  xPos = width / 2; // 공을 화면의 중심에서 출발
  xDir = speed;
  yPos = height / 2; 
  yDir = speed;
  diam = 55;

  padWidth = 150;
}

function draw() {
  background(128);

  // ball drawing and movement
  stroke(100);
  fill("#8080FF");
  ellipse(xPos, yPos, diam, diam);
  xPos = xPos + xDir;
  yPos = yPos + yDir;

  // pad를 마우스 위치로 움직이기
  padX = mouseX - padWidth / 2;
  fill('#008080');
  rect(padX, height - 30, padWidth, 30);

  // ball bouncing
  if (xPos - diam / 2 < 0) xDir = xDir * -1;
  if (xPos + diam / 2 > width) xDir *= -1;

  if (yPos - diam / 2 < 0) yDir *= -1;
  if (yPos + diam / 2 > height) yDir *= -1;
}
