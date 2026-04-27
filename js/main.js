const arrayHeader = ['images/header-1-escritorio.jpg','images/header-2-escritorio.jpg','images/header-3-escritorio.jpg','images/header-4-escritorio.jpg','images/header-5-escritorio.jpg','images/header-6-escritorio.jpg','images/header-7-escritorio.jpg']

/* para que el array me de un número entre 0 y 6 al azar */
const numeroAzar = Math.floor(Math.random() * arrayHeader.length);


/* funciona para que me devuelva una imagen aleatoria y la pinte en el Header */
const imgHeader = document.getElementById("imgHeader");
imgHeader.src = (arrayHeader [numeroAzar]);


/* construir el article con una imagen un titulo y un texto */

const arrayCajas = [
  { imagen: 'images/header-1-escritorio.jpg', titulo: 'Lorem Ipsum', texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit' },
  { imagen: 'images/header-3-escritorio.jpg', titulo: 'Dolor Sit amet', texto: 'Molestiae, soluta? Cum reiciendis neque quas accusantium molestias officiis' },
  { imagen: 'images/header-5-escritorio.jpg', titulo: 'Dies irae, dies illa', texto: 'Delectus, praesentium fugiat iste quo soluta tempora itaque vitae dolor sed' },
  { imagen: 'images/header-7-escritorio.jpg', titulo: 'Animula, vagula', texto: 'Consequatur aliquid aspernatur temporibus possimus soluta explicabo enim earum nesciunt' }
];

const divContenedor = document.querySelector('.contenedorCards');

for (let i = 0; i <arrayCajas.length; i++) {
  const crearArticle = document.createElement('article');
  const crearDivImg = document.createElement('div')
  const crearDivTxt = document.createElement ('div')
  const crearImagen = document.createElement('img');
  const crearTitulo = document.createElement('h3');
  const crearTexto = document.createElement('p');
  crearDivImg.classList.add('imgCard');
  crearDivTxt.classList.add('txtCard');
  crearArticle.classList.add('boxCard')
  crearImagen.src = (arrayCajas[i].imagen);
  crearTitulo.textContent = (arrayCajas[i].titulo)
  crearTexto.textContent = (arrayCajas[i].texto)
  crearDivImg.append(crearImagen);
  crearDivTxt.append(crearTitulo,crearTexto);
  crearArticle.append(crearDivImg,crearDivTxt);
  divContenedor.append(crearArticle)
}



