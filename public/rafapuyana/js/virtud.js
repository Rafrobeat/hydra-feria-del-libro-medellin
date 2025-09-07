// VIRTUD.js
console.log("rafapuyana-js loaded");

// SETUP
//Sobre el valor
del_tiempo = () => src(s0).out(o3);

// QUERIDO LUCILIO
 //////////////////////////
Querido_lucilio = () =>
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
libérate_de_ti_mismo = () =>
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
conserva_el_tiempo = () =>
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
nos_arrebatan = () =>
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
//
//
// NOS ROBAN
nos_roban = () =>
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
//
// SE DESVANENCEN
se_desvanecen = () =>
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
//
// LA PÉRDIDA POR DESCUIDO
la_pérdida_por_descuido = () =>
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
//
// // NO ACTUAMOS BIEN
no_actuamos_bien = () =>
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
//
//
// NO HACEMOS NADA
no_hacemos_nada= () =>
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
//
// // > lo que no deberíamos estar haciendo
//
//CADA DÍA ESTÁ MURIENDO
cada_día_está_muriendo= () =>
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
//
//
// // test = () => s1.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png")
// // test2 = () => src(s1).out(o0);
// // test3 = () => s1.initImage("./public/rafapuyana/images/body.png")
// // test4 = () => src(s1).out(o0);
//
//
// //NOTAS
// // Frases personalizadas
// // querido = () => osc().out();
// // lucilio = () => osc().kaleid().out();
// // queridoLucilio = () => osc(1,1,1).kaleid().out();
