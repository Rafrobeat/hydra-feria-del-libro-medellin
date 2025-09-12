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
                s0.initImage("./public/rafapuyana/images/body.png"); // Cuerpo humano para virtud
                s1.initImage("./public/rafapuyana/images/complejidad/complejidad-01.png");
                s2.initImage("./public/rafapuyana/images/complejidad/complejidad-02.png");
                s3.initImage("./public/rafapuyana/images/complejidad/complejidad-03.png");
                console.log("Imágenes precargadas correctamente");
            } else {
                console.error("Alguno de los buffers (s0, s1, s2, s3) no está definido");
            }
        } catch (error) {
            console.error("Error al cargar las imágenes:", error);
        }
    }, 500);
});



// precarga otras imagenes
function imgsComplejidad() {
    try {
            // Limpiar buffers
            // solid().out(o0);
            // solid().out(o1);
            // solid().out(o2);
            // solid().out(o3);
            // Precargar imagenes
            s0.initImage("./public/rafapuyana/images/complejidad/complejidad-04.png");
            s1.initImage("./public/rafapuyana/images/complejidad/complejidad-05.png");
            s2.initImage("./public/rafapuyana/images/complejidad/complejidad-06.png");
            s3.initImage("./public/rafapuyana/images/complejidad/complejidad-07.png");
    } catch (error) {
        console.error("Error al cargar paquete de imagenes:", error);
    }
};

function imgsComplejidad2() {
    try {
            // Limpiar buffers
            // solid().out(o0);
            // solid().out(o1);
            // solid().out(o2);
            // solid().out(o3);
            // Precargar imagenes
            s0.initImage("./public/rafapuyana/images/complejidad/complejidad-01.png");
            s1.initImage("./public/rafapuyana/images/complejidad/complejidad-02.png");
            s2.initImage("./public/rafapuyana/images/complejidad/complejidad-03.png");
            s3.initImage("./public/rafapuyana/images/complejidad/complejidad-04.png");
    } catch (error) {
        console.error("Error al cargar paquete de imagenes:", error);
    }
};

function imgsDemocracia_() {
    try {
            // Limpiar buffers
            // solid().out(o0);
            // solid().out(o1);
            // solid().out(o2);
            // solid().out(o3);

            // Precargar imagenes
            s0.initImage("./public/rafapuyana/images/democracia/democracia-01.png");
            s1.initImage("./public/rafapuyana/images/democracia/democracia-01.png");
            s2.initImage("./public/rafapuyana/images/democracia/democracia-02.png");
            s3.initImage("./public/rafapuyana/images/democracia/democracia-03.png");

            //asignar buffers
            src(s1).out(o1);
            src(s2).out(o2);
            src(s3).out(o3);

    } catch (error) {
        console.error("Error al cargar paquete de imagenes:", error);
    }
};

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
