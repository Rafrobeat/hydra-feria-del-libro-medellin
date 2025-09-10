// HABITAR LA DEMOCRACIA
// enciclopedia
// Denis Diderot
//Optimismo

// Startup

// Habitar_la()
// Democracia()
// Denis_Diderot()
//
// Optimismo()
//
// filosofía()

Habitar_la = () => imgsDemocracia();
Democracia = () => setResolution(1440*2,900*2);
Denis_Diderot = ()=>
  src(s1) // Cambia s0 / s1 / s2 / s3
    .scale(innerWidth/innerHeight/1.7)
  .out(o3);

Optimismo = () =>
  src(s2) // Cambia s0 / s1 / s2 / s3
    .scale(innerWidth/innerHeight/1.7)
  .out(o2);

filosofía = () =>
  solid()
    .add(
    		src(o3).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
    )
    .mult(
    		src(o2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
    )
  .blend(src(o0).modulate(noise(1)),[.3,.3].smooth()) // arranca en .3 termina en 0
  .modulateScale(src(o0),[9,.50].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.8)
  .contrast(1.0001)
  //.modulate(noise(1000,1),[.1,.1].smooth()) // #1 cambia de [.1,.1] a [.0,.0]
  //.scale(1.01)
  .out();
