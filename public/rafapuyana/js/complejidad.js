// contradicciones.js

// SETUP

// Habitar()
// la_complejidad()
// //
// Los_7_saberes()
// necesarios()
// para_la_educación()
// //del futuro

Habitar = () => setFunction({name: 'chroma',type: 'color',inputs: [],glsl:`float maxrb = max( _c0.r, _c0.b );float k = clamp( (_c0.g-maxrb)*5.0, 0.0, 1.0 );float dg = _c0.g; _c0.g = min( _c0.g, maxrb*0.8 ); _c0 += vec4(dg - _c0.g);return vec4(_c0.rgb, 1.0 - k);
	`});

la_complejidad = () => setResolution(1440,900);

// TITULO
Los_siete = () =>
  src(s1)
  //.scale(1,.4)
  .chroma().out(o1);

saberes = () =>
  src(s3)
  //.scale(1,.4)
  .chroma().out(o3);

necesarios = () => src(s2).scale(1,1).chroma().out(o2);

// PARA LA EDUCACION
para_la_educación = () =>
src(o0)
  .layer(solid(1,.71,.047)) // Comms 1st
  .layer(src(o1).scrollX(0,1e-2)) // Comms 2snd ( swith o1/o2/o3)
  //.layer(solid(1,.18,0).brightness([0,1].smooth()).mask(src(o3).scrollX(0,1/100).scrollY(0,1/100)))
  //.layer(src(o3).chroma())
  //.layer(osc(1,1,1).mask(shape()))
  //.layer(osc(1,1,1).mask(src(o3).chroma()))
  //.layer(solid(1,.18,0).brightness([0,1].smooth()).mask(src(o3).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3)
  .rotate(0-1e-3)
.out(o0)

// ERROR
error_ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o1).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
//  .layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0+1e-3) //  0+1e-3 / 0+1e-4
//  .rotate(0+1e-3) //  rotacion adicional
//.blend(o0,.9)
//.modulate(o0,.001)
.out(o0);

ilusión_ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o2).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
//  .layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0+1e-3) //  0+1e-3 / 0+1e-4
  .rotate(0+1e-3) //  rotacion adicional
//.blend(o0,.9)
//.modulate(o0,.001)
.out(o0);

error_e_ilusión_ = () => imgsComplejidad();
error_e_ilusión__ = () => imgsComplejidad2();

error__ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o3).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
  //.layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0-1e-3) //  0+1e-3 / 0+1e-4
  .rotate(0-1e-3) //  rotacion adicional
//.blend(o0,.9)
//.modulate(o0,.001)
.out(o0);

ilusión__ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o2).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
//  .layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0+1e-3) //  0+1e-3 / 0+1e-4
  .rotate(0+1e-3) //  rotacion adicional
.blend(o0,.9)
//.modulate(o0,.001)
.out(o0);

error___ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o0).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
//  .layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0-1e-3) //  0+1e-3 / 0+1e-4
  .rotate(0-1e-3) //  rotacion adicional
.blend(o0,.9)
.modulate(o0,.001)
.out(o0);

ilusión___ = () =>
src(o0)
//.layer(solid(1,.71,.047)) // Solido - comenta para inicio
.layer(src(o3).scrollX(0,1e-2).modulate(osc(10/2,.1,2),0)) // primer texto ( cambia o1,o2,o3 ) // modulate cambia
//
//  .layer(osc(1,1,.21).kaleid().mask(shape(30,[.2,.1,.4,.3],.0))) // circulo
//.layer(solid(1,.18,0).brightness([1,2].smooth()).mask(src(o1).invert([1]).scrollX(0,1/100).scrollY(0,1/100)))
  .scale(1+1e-3) // e-3 / e-2
  .rotate(0-1e-3) //  0+1e-3 / 0+1e-4
  .rotate(0-1e-3) //  rotacion adicional
.blend(o0,.9)
.modulate(o0,.001)
.out(o0);
