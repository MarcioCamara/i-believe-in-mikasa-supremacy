function changeImages() {
  const pageImages = document.getElementsByTagName('img');

  for (let i = 0; i < pageImages.length; i++) {
    const image = pageImages[i];

    image.src = 'https://i.ibb.co/ZhJPH09/10.jpg';
  }
}

function changeTexts() {
  let pageTexts = [];
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('p'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h1'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h2'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h3'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h4'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h5'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('h6'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('code'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('li'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('cite'));
  pageTexts = pageTexts.concat.apply(pageTexts, document.getElementsByTagName('b'));

  for (let i = 0; i < pageTexts.length; i++) {
    const text = pageTexts[i];

    text.innerHTML = '[MIKASA SUPREMACY]';
  }
}

function applyChanges() {
  changeTexts();
  changeImages();
}

setInterval(() => {
  applyChanges();
}, 500);