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

Habitar_la_Democracia = () => imgsDemocracia_();

Democracia = (out = o0, out2 = o1) =>
solid()
  .add(
      src(out).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
  )
  .mult(
      src(out2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
  )
.blend(src(o0).modulate(noise(1)),[.3,.3].smooth()) // arranca en .3 termina en 0
.modulateScale(src(o0),[9,.50].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
.blend(src(o0),.8)
.contrast(1.0001)
.modulate(noise(1000,1),[.1,.1].smooth()) // #1 cambia de [.1,.1] a [.0,.0]
//.scale(1.01)
.out();

optimismo = (out = o0, out2 = o1)=>
  solid()
    .add(
        src(out).modulate(osc(10,.1/6)) // Arranca en .1/2 > .1/6
    )
    .mult(
        src(out2).modulate(osc(10,-.1/2)) // Arranca en .1/2 > .1/6
    )
  .blend(src(out2).modulate(noise(1)),[.3,.3].smooth(),0) // arranca en .3 termina en 0
  .modulateScale(src(o0),[9,9].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.9)
  .contrast(1.0001)
.out();


filósofos = (out = o2, out2 = o3) =>
  solid()
    .add(
        src(out).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
    )
    .mult(
        src(out2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
    )
  .blend(src(out2).modulate(noise(1)),[.3,.3].smooth(),0) // arranca en .3 termina en 0
  .modulateScale(src(o0),[9,9].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.8)
  .contrast(1.0001)
  .out();


teodicea = (out = o2, out2 = o1) =>
  solid()
    .add(
        src(out).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
    )
    .mult(
        src(out2).modulate(osc(10,-.1/2)) // Arranca en .1/2 > .1/6
    )
  .blend(src(out2).modulate(noise(1)),[.3,.3].smooth(),0) // arranca en .3 termina en 0
  .modulateScale(src(o0),[1,9].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.8)
  .contrast(1.0001)
  .out();

el_crimen = (out = o2, out2 = o1) =>
  solid()
    .add(
        src(out2).modulate(osc(10,.1/2)) // Arranca en .1/2 > .1/6
    )
    .mult(
        src(out).modulate(osc(10,-.1/2)) // Arranca en .1/2 > .1/6
    )
  .blend(src(out2).modulate(noise(1,1)),[.3,0].smooth(),0) // arranca en .3 termina en 0
  .modulateScale(src(o0),[1,.9].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.8)
  .contrast(1.001)
  .out();


libertad = (out = o3, out2 = o1) =>
solid()
  .add(
      src(out).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
  )
  .mult(
      src(out2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
  )
//  .blend(src(o0).modulate(noise(1)),[.3,.3].smooth()) // arranca en .3 termina en 0
.modulateScale(src(o0),[0,1].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
.blend(src(o0),.8)
.contrast(1.0001)
//.modulate(noise(1000,1),[.1,.1].smooth()) // #1 cambia de [.1,.1] a [.0,.0]
//.scale(1.01)
.out();

virtudes = (out = o1, out2 = o2) =>
solid()
  .add(
      src(out).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
  )
  .mult(
      src(out2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
  )
//  .blend(src(o0).modulate(noise(1)),[.3,.3].smooth()) // arranca en .3 termina en 0
.modulateScale(src(o0),[0,1].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
.blend(src(o0),.8)
.contrast(1.0002)
//.modulate(noise(1000,1),[.1,.1].smooth()) // #1 cambia de [.1,.1] a [.0,.0]
//.scale(1.01)
.out();

posibles = (out = o1, out2 = o3) =>
  solid()
    .add(
        src(out).modulate(osc(10,.1/6)) // Arranca en .1/2 > .1/6
    )
    .mult(
        src(out2).modulate(osc(10,-.1/2)) // Arranca en .1/2 > .1/6
    )
  .blend(src(out2).modulate(noise(1)),[.3,.3].smooth(),0) // arranca en .3 termina en 0
  .modulateScale(src(o0),[9,9].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
  .blend(src(o0),.9)
  .contrast(1.0001)
  .out();


o_altitudo = (out = o3, out2 = o2) =>
solid()
  .add( src(out).modulate( osc(12, .1/5) ) )         // freq up, slower drift
  .mult( src(out2).modulate( noise(2, -.1/4) ) )      // higher noise freq
  .blend( src(o0).modulate( noise(1) ), [0.25,0.25].smooth() )
  .modulateScale( src(o0), [0,1].ease("sin"), 0.9 ) // slightly gentler scale
  .blend( src(o0), 0.7 )                            // lighter blend
  .contrast(1.0001)
  .scale(1.02)
  .out();


Leibnitz = () => osc(57).out();
Malebranche = () => osc(442).out();
Fontenelle = () => osc(16).out();
Crimen = () => osc(275).out();
Tarquinio = () => osc(389).out();
Lucrecia = () => osc(128).out();
Libertad = () => osc(512).out();
Roma = () => osc(64).out();
Virtudes = () => osc(221).out();
República = () => osc(78).out();
Dios = () => osc(305).out();
Mundo = () => osc(499).out();
Perfección = () => osc(187).out();
Metafísica = () => osc(92).out();
Vacío = () => osc(347).out();


// Función General

//   solid()
//     .add(
//     		src(o3).modulate(osc(10,.1/4)) // Arranca en .1/2 > .1/6
//     )
//     .mult(
//     		src(o2).modulate(osc(10,-.1/4)) // Arranca en .1/2 > .1/6
//     )
//   .blend(src(o0).modulate(noise(1)),[.3,.3].smooth()) // arranca en .3 termina en 0
//   .modulateScale(src(o0),[9,.50].ease("sin"),1) // arranca en [9,9] y se va pasando a [9,9] , [0,0]
//   .blend(src(o0),.8)
//   .contrast(1.0001)
// .modulate(noise(1000,1),[.1,.1].smooth()) // #1 cambia de [.1,.1] a [.0,.0]
//   //.scale(1.01)
//   .out();
