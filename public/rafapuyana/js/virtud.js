// VIRTUD.js
// Para correr este codigo hay que inicializar con:



// SETUP
Sobre_el_valor = () => console.log("hello");

del_tiempo = () => src(s0).out(o3);

// QUERIDO LUCILIO
 //////////////////////////
Lucilio = () =>
solid(1)
.add(
  	noise(3,0.1,7)
    .rotate(1,-.12,-2)
)
.out(o0);
//
//
// LIBERATE DE TI MISMO
 //////////////////////////
libérate = () =>
solid(1)
.add(src(o3).scale(1,.7))
.add(
  	noise(3,0.1,7)
    .rotate(1,-.12,-2)
)
.out(o0);

liberate_de_ti_mismo = () =>
solid(1)
.add(src(o3).scale(1,.7))
.add(
  	noise(3,0.1,7)
    .rotate(1,-.12,-2)
)
.out(o0);
//
//
// CONSERVA EL TIEMPO
conserva = () =>
solid(1)
.add(src(o3).scale(1,.7))
.add(
  	noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.2)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.out(o0);
//

// NOS ARREBATAN
arrebatan = () =>
solid(1)
.add(src(o3).scale(1,.7))
.add(
  	noise(3,0.1,7)
//	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.2)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
//.rotate(0,[.00002,-.00001].ease("sine"))
.out(o0);


// NOS ROBANAAA
roban = () =>
solid(1)
//.add(src(o3).scale(1,.7))
.add(
  	noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.3).hue([0,3].smooth())
.modulateScale(o0)
.modulateScale(o0,1)
.add(noise(1000,[2,3]),.1)
)
.blend(o0)
.blend(o0)
.blend(o0)
.blend(o0)
.saturate(0)
.rotate(0,.000001)
.out(o0);

//
// SE DESVANENCEN
desvanecen = () =>
solid(1)
.add(
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
solid(1)
.add(src(o3).scale(1,[-1,1].smooth().fast(.1)))
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

// NO ACTUAMOS BIEN
actuar_mal = () =>
solid(1)
.add(src(o3).scale(1).rotate(0,.1).repeat(2,2).scrollX(0,-.1/2))
.add(
noise(3,0.1,7)
	.mask(shape(20).scale(1/1,.3))
	.brightness([0,.4].smooth())
.colorama(0.4).hue([0,4].smooth())
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
hacer_nada= () =>
solid(1)
.add(src(o3).scale(1).rotate(0,.1).repeat(2,2).scrollX(0,-.1/2))
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
muriendo= () =>
solid()
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
.blend(o0)
.blend(o0)
.saturate(0)
.rotate(0,.000001)
.brightness(-1)
.add(src(o3).scale(1,.7).scale(.3))
.modulateRotate(osc(1,.1,.003),.1/10)
.out(o0);