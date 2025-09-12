Habitar_las = (cam=1) => s1.initCam(cam);

Contradicciones = () =>
  src(s1)
  	.modulateHue(osc(.01,.01,.01),1000)
  	.modulateScale(noise(.1,.1),.1)
  	.blend(solid(0, 0.278, 0.031),0.3)
  	.scale(1,[1.001,1].smooth(.2),.99,3,.7)
  	.blend(o0,.6)
  	//.modulate(o0,.0001)
.out();

Cándido = () =>
  src(s1)
  	.modulateHue(osc(.01,.01,.01),1000)
  	.modulateScale(noise(.1,.1),.1)
  	.blend(solid(0, 0.278, 0.031),0)
  	.scale(1,[1.001,1].smooth(.2),.99,3,.7)
  	//.blend(o0,.9)
  	.modulate(o0,.0001)
  .out();

Cándido_ = () =>
    src(s1)
    	.modulateHue(osc(.01,.01,.01),1000)
    	.modulateScale(noise(.1,.1),.1)
      .modulateScale((noise(.1,.1)),.2)
    	.blend(solid(0, 0.278, 0.031),0.3)
    	.scale(1,[1.001,1].smooth(.2),.99,3,.7)
    	.blend(o0,.6)
    	//.modulate(o0,.0001)
  .out();
