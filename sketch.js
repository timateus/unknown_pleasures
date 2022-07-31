const offset = 0.1;
let img;

function preload() {
  img = loadImage('bg.png');
}

function setup() {
  createCanvas(400, 400);
  // frameRate(2)
  
}

const pdf = (x, mean, std) => {
  return 1/ (std) 
    * Math.pow(2.7, -(1/2) * ((x - mean)/std)**2)
  
}

// console.log()


function draw() {

  background('#81fa81');
  // image(img, 0, 0, width,height);
  fill('#81fa81');
  stroke(150);
  
  
  for(let i = height * offset; i < height * (1 - offset); i+=7){
    beginShape();
    for(let j = width * offset; j < width * (1 - offset); j+=1){
      vertex(
        j,
        // i - pow(j/100,3)
        // * map(noise(i/30, j/30), 0,1,0,1)
        i - pdf(j,width / 2, 30) * 1000 
        * map(
          // noise(j + i/30 + frameCount/50), 
          noise(j/20 + i - frameCount/50), 
          0,1,0,2)
        // randomGaussian(width / 2, 20)
      );
      // console.log(pdf(j,width / 2, 10))
    }
    
    endShape();
  }
}
