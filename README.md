# circle_illusion
coding trig functions and polar coordinates to create a circle_illusion

## sinCosCircle
A quick #P5js sketch partially inspired by a numberphile video on trig functions. Also partially inspired by a dog we know. Let's call him Chewko. He runs in circles and Mj and I run back and forth. This could be an abstract visualization of our play. Chewko is the blue circle of course. And our motions are all defined by sin, cos, or both. I am again naming objects after loved ones.
 updateY(x) {
    this.y = map(sin(x), 0, 1, height/2, height/10); // from the middle to the edges
   
  }
  updateX(y) {
    this.x = map(cos(y), 0, 1, width/2, width/10);
  }
  
  an X motion is obtained by mapping to the cos(y) where y is an iteration from 0 to 360 : but plotting y as constant
  a Y motion is obtaied by mapping to the  sin (x) where x is an interation from 0 to 360 : but plotting x as constant
  the circle motion is obtaaind mapping and ploting both x and y
  
  see code for more comments
  
  
