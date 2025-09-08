// VIRTUD.js
console.log("rafapuyana-js loaded");

// SETUP
Sobre = () => setFunction({
  name:'gradientVirtud',
  type:'color',
  inputs:[],
  glsl:`float t=fract(uv.x + time*0.05);
        vec3 c0=vec3(219.,198.,174.)/255.;
        vec3 c1=vec3(203.,159.,121.)/255.;
        vec3 c2=vec3(91.,113.,116.)/255.;
        vec3 c3=vec3(133.,124.,111.)/255.;
        vec3 c4=vec3(234.,202.,173.)/255.;
        float s=floor(t*5.0);
        float f=smoothstep(0.,1.,fract(t*5.0));
        vec3 col = (s<1.)?mix(c0,c1,f):(s<2.)?mix(c1,c2,f):(s<3.)?mix(c2,c3,f):(s<4.)?mix(c3,c4,f):mix(c4,c0,f);
        return vec4(col,1.);`
})

el_valor = () =>
  // gradient base
  solid()
    .modulate( noise(20,1,1) )
    .gradientVirtud()
  // end of gradient base
  .out(o2);



del_tiempo = () =>
src(s0).out(o3);

// QUERIDO LUCILIO
 //////////////////////////
lucilio = () =>
// gradient base
solid(1)
.layer(
    src(o2).modulate(noise(3,0.1,7)) // Agarra gradient de o2 y lo deforma
    .rotate(1,-.12,-2)
)
// gradient base
.out(o0);

//
// LIBERATE DE TI MISMO
 //////////////////////////
libérate = () =>
src(o2) // usa el gradient o2 de base
 .blend(
     src(o2).modulate(noise(3,0.1,7)) // Agarra gradient de o2 y lo deforma
     .rotate(1,-.12,-2)
 )
.add(src(o3).scale(1,.7)) // agrega la imagen de body.png en o3
.out(o0);


// CONSERVA EL TIEMPO
conserva = () =>
src(o2) // verde
.blend(src(o2).modulate(noise(3,0.1,7),.1) // Agarra gradient de o2 y lo deforma
   .mask(shape(20).scale(1/1,1)) // mascara de la bola
    .brightness([0,.4].smooth())
    .colorama(0.0001).hue([0,3].smooth())
     .modulateScale(o0)
     .modulateScale(o0,.9)
     .add(noise(1000,[2,3]),.2)
)
.blend(src(o3).scale(1,.7)) // agrega la imagen de body.png en o3
 .blend(o0)
 .blend(o0)
 .blend(o0)
 .blend(o0)
.out(o0);


// NOS ARREBATAN
arrebatan = () =>
src(o2) // verde
.blend(src(o3).scale(1,.7))
.blend(src(o2).modulate(noise(3,0.1,7),1)
     .rotate(1,-.12,-2)
//     .mask(shape(20).scale(1/1,.3))
    .brightness([0,.4].smooth())
 //   .colorama(0.0003).hue([0,3].smooth(10))
     .modulateScale(o0)
     .modulateScale(o0,1)
     .add(noise(1000,[2,3]),.2)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.out(o0);

// NOS ROBAN
roban = () =>
solid(0.1,0.3,0.2) // verde
//.blend(src(o3).scale(1,.7))
.add(
    src(o2).modulate(noise(3,0.1,7),1)
    .mask(shape(20).scale(1/1,.3))
    .brightness([0,.4].smooth())
    .colorama(0.3).hue([0,3].smooth())
    .modulateScale(o0)
    .modulateScale(o0,1)
    .add(noise(1000,[2,3]),.1)
)
.saturate(0)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.rotate(0,.000001)
.out(o0);


// SE DESVANENCEN
desvanecen = () =>
src(o2) // verde
.blend(
  	noise(3,0.1,7)
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.01)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(src(o0).scale(.99))
.rotate(0,[.000001,-.0000001].ease("sine"),0)
.out(o0);


// LA PÉRDIDA POR DESCUIDO
descuido = () =>
src(o2) // verde
.blend(src(o3).scale(1,[-1,1].smooth().fast(.1)))
.add(
noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.01)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.rotate(0,[.000001,-.0000001].ease("sine"),0)
.out(o0);

// // NO ACTUAMOS BIEN
actuar_mal = () =>
src(o2) // verde
.blend(src(o3).scale(1).rotate(0,.1).repeat(1,1).scrollX(0,-.1/2).modulate(osc(10,.1)))
.add(
noise(3,0.1,7)
//	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
//	.colorama(0.1).hue([0,4].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.01)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.rotate(0,[.000001,-.0000001].ease("sine"),0)
.out(o0);

// NO HACEMOS NADA
hacer_nada = () =>
src(o2) // verde
.blend(src(o3).scale(1).rotate(0,.1).repeat(2,2).scrollX(0,-.1/2)) // carga body.png y lo modula
.add(
noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.01)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.rotate(0,[.000001,-.0000001].ease("sine"),0)
.out(o0);


//CADA DÍA ESTÁ MURIENDO
muriendo = () =>
src(o2) // verde
.add(
  	noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.1)
)
.blend(o0)
.blend(o0)
.modulateRotate(osc(1,.1,.003),.1/3)
.blend(o0)
.blend(o0)
.saturate(0)
.rotate(0,.000002)
.brightness(-1)
.add(src(o3).scale(1,.7).scale(.5))
.out(o0);
