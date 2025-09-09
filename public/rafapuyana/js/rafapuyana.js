// rafapuyana.js
console.log("rafapuyana-js loaded");

// Cargar Hydra para poder cargar las imagenes
window.addEventListener('DOMContentLoaded', function() {
    // Inicializar Hydra
    const hydra = new Hydra({
        canvas: document.getElementById('hydra-canvas'),
        makeGlobal: true
    });

    // Esperar a que Hydra esté completamente inicializado
    setTimeout(() => {
        try {
            // Verificar que los buffers estén definidos
            if (typeof s0 !== 'undefined' && typeof s1 !== 'undefined' && typeof s2 !== 'undefined' && typeof s3 !== 'undefined') {
                // Precargar imagenes
                s0.initImage("./public/rafapuyana/images/body.png");
                s1.initImage("./public/rafapuyana/images/morin.png");
                s2.initImage("./public/rafapuyana/images/morin-2.png");
                s3.initImage("./public/rafapuyana/images/04.jpg");
                console.log("Imágenes precargadas correctamente");
            } else {
                console.error("Alguno de los buffers (s0, s1, s2, s3) no está definido");
            }
        } catch (error) {
            console.error("Error al cargar las imágenes:", error);
        }
    }, 500);
});

// Frases personalizadas
// querido = () => osc().out();
// lucilio = () => osc().kaleid().out();
// queridoLucilio = () => osc(1,1,1).kaleid().out();

// test0 = () => src(s0).out(o0);
// test1 = () => src(s1).out(o0);
// test2 = () => src(s2).out(o0);
// test3 = () => src(s3).out(o0);

//s1.initImage("./public/rafapuyana/images/body.png")
// test4 = () => src(s1).out(o0);
//shape().out(o0)

// precarga otras imagenes
function imgsVirtud() {
    try {
            // Precargar imagenes
            s0.initImage("./public/rafapuyana/images/body.png");
            s1.initImage("./public/rafapuyana/images/06.jpg");
            s2.initImage("./public/rafapuyana/images/07.jpg");
            s3.initImage("./public/rafapuyana/images/08.jpg");
    } catch (error) {
        console.error("Error al cargar paquete de imagenes:", error);
    }
}
