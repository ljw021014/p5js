function setup() {
    createCanvas(600, 600);
    drawFace();
    background(230);
  }
  
  function mousePressed() {
    background(mouseX, mouseY, 127); //마우스 클릭 시 위치에 따른 배경색 변화
  }
  
  function drawFace() {
    // 옷
    stroke(200);
    fill(50);
    arc(300, 610, 650, 200, 0, TWO_PI);
  
    // 쇄골쪽
    fill("#FFCC99");
    noStroke();
    arc(300, 511, 175, 100, 0, PI);
  
    // 목
    rect(262.5, 450, 75, 70);
    stroke(180);
    line(262.5, 450, 262.5, 530);
    line(338, 450, 338, 530);
  
    // 귀
    noStroke();
    fill("#FFCC99");
    ellipse(163, 330, 30, 60); // 왼쪽
    ellipse(436, 330, 30, 60); // 오른쪽
  
    // 귀 안
    stroke(150);
    noFill();
    arc(160, 330, 10, 30, HALF_PI, (3 / 2) * PI); // 왼쪽
    arc(439, 330, 10, 30, -HALF_PI, (-3 / 2) * PI); // 오른쪽
  
    // 얼굴 크기
    stroke(180);
    fill("#FFCC99");
    arc(300, 300, 265, 350, 0, PI); // 아래
  
    fill(25);
    stroke(45);
    strokeWeight(3);
    arc(300, 300, 280, 310, PI, 0); // 위
  
    // 머리카락
    fill("#FFCC99");
    noStroke();
    arc(300, 170, 400, 360, radians(65), radians(115));
  
    // 머리카락 외곽선
    stroke(25);
    strokeWeight(3.5);
    noFill();
  
    //머리 시스루
  
    arc(200, 170, 200, 660, radians(0), radians(55));
    arc(200, 170, 200, 540, radians(0), radians(56));
    arc(200, 170, 200, 450, radians(0), radians(58));
    arc(200, 170, 200, 400, radians(0), radians(60));
    arc(200, 170, 200, 360, radians(0), radians(62));
    arc(200, 170, 200, 340, radians(0), radians(64));
    arc(200, 170, 200, 320, radians(0), radians(66));
    arc(200, 170, 200, 305, radians(0), radians(68));
    arc(200, 170, 200, 292, radians(0), radians(71));
    arc(200, 170, 200, 282, radians(0), radians(73));
  
    arc(400, 170, 200, 600, radians(124.5), radians(180));
    arc(400, 170, 200, 500, radians(123), radians(180));
    arc(400, 170, 200, 440, radians(122), radians(180));
    arc(400, 170, 200, 400, radians(120), radians(180));
    arc(400, 170, 200, 360, radians(118), radians(180));
    arc(400, 170, 200, 340, radians(116), radians(180));
    arc(400, 170, 200, 320, radians(114), radians(180));
    arc(400, 170, 200, 305, radians(112), radians(180));
    arc(400, 170, 200, 292, radians(109), radians(180));
    arc(400, 170, 200, 282, radians(106), radians(180));
  
    //머리 빈틈 채우기
    strokeWeight(8);
    line(300, 170, 245, 295);
    line(300, 170, 255, 290);
    line(300, 170, 265, 285);
    line(300, 170, 275, 275);
  
    line(300, 170, 359, 295);
    line(300, 170, 350, 290);
    line(300, 170, 340, 285);
    line(300, 170, 330, 280);
    line(300, 170, 320, 260);
  
    drawEyes(eyesOpen);
  
    // 코
    stroke(180);
    strokeWeight(2);
    fill("#FFBB77");
    triangle(286, 385, 314, 385, 300, 335);
  
    // 입
    noStroke();
    fill("#DD3333");
    arc(300, 421, 60, 30, 0, PI);
  
    // 입술 선
    stroke(180);
    strokeWeight(2);
    noFill();
    arc(300, 422, 60, 30, 0, PI);
  }
  
  function drawEyes(open) {
    noStroke();
    fill(255);
    if (open) {
      ellipse(240, 320, 40, 15); // 왼쪽 눈 흰자
      ellipse(360, 320, 40, 15); // 오른쪽 눈 흰자
      fill(0);
      ellipse(240, 320, 15, 15); // 왼쪽 눈동자
      ellipse(360, 320, 15, 15); // 오른쪽 눈동자
      fill(255);
      ellipse(235, 315, 5, 5); // 왼쪽 눈 반짝임
      ellipse(355, 315, 5, 5); // 오른쪽 눈 반짝임
    } else {
      fill(0);
      rect(220, 312, 40, 5, 10); // 감긴 왼쪽 눈
      rect(340, 312, 40, 5, 10); // 감긴 오른쪽 눈
    }
  }
  
  let eyesOpen = true;
  function keyPressed() {
    eyesOpen = !eyesOpen; // 눈  토글
    drawFace();
  }
  
  function draw() {
    drawFace();
  }
  