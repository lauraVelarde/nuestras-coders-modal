
var selectPromo = document.getElementById('select-promo');
var imagesContainer = document.getElementById('images-container');
/*var subImagesContainer = null;*/

imagesContainer.addEventListener('click',showModel)

selectPromo.addEventListener('change',showPromo);

//array de las promociones: alumnas
var arr4Chile = ['anais-araya','andrea-miranda','berenisse-rios','caterina-da-silva','daniela-sanchez','francisca-ojeda','katerine-sandoval'];
var arr5Lima = ['andrea-cabrera', 'ariadna-izaguirre', 'carito-juarez', 'cristy-castro', 'karol-orrillo', 'paola-ortiz', 'teresa-lara'];
var arr6Lima = ['arantza-burga', 'daguiana-revoredo', 'elizabeth-condori', 'grecia-rayme', 'janine-vega', 'michelle-more', 'mishel-velasquez', 'rosario-felix'];

//constantes de ruta para el directorio
var CHILE4= '4-chile';
var LIMA5 = '5-lima';
var LIMA6 = '6-lima';

//metodo que crea las coders
//primer parametro un array de nombres
//segundo parametro un str que indica la promo

function showCoders(arr, promo){
    /*if(subImagesContainer)
        imagesContainer.removeChild(subImagesContainer);

        subImagesContainer = document.createElement('div');
        imagesContainer.appendChild(subImagesContainer);*/

    for(var i =0;i < arr.length ; i++){
    createImage(promo,arr[i]);
    };
}

//metodo que crea una imagen
//primer parametro es un str que indica la promo
//segundo parametro un str que indica el nombre
function createImage(promo,nombre){
    var img = document.createElement('img');

    img.setAttribute('src','assets/images/'+ promo + '/'+ nombre +'.jpg');  
    imagesContainer.appendChild(img);
};

function showPromo(e){
    switch(true){
        case event.target.value === '4chile':
            imagesContainer.textContent = '';
            showCoders(arr4Chile,CHILE4);
            break;
        case event.target.value === '5lima':
            imagesContainer.textContent = '';
            showCoders(arr5Lima,LIMA5);
            break;
        case event.target.value === '6lima':
            imagesContainer.textContent = '';
            showCoders(arr6Lima,LIMA6);
            break;
        default:
        imagesContainer.textContent = '';
        showCoders(arr4Chile,CHILE4);
        showCoders(arr5Lima,LIMA5);
        showCoders(arr6Lima,LIMA6);
    }
/* event.target.value*/
}


function showModel(e){
    var modal = document.createElement('div');

    modal.style.position = 'fixed';
    modal.style.backgroundColor = 'rgba(0,0,0,0.7)';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';

    modal.appendChild(e.target) ;

    event.target.style.display = 'block';
    event.target.style.margin = window.innerHeight / 3 + 'px auto';

    document.body.appendChild(modal);

    modal.addEventListener('click',function(e){
        e.target.parentElement.removeChild(e.target);
    })
}