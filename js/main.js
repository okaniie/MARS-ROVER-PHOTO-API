const randomImage = document.getElementById("randomImage");
const cameraused = document.querySelector('h2')
const btn = document.querySelector('button');
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1wCuyjoxfSrvsEbUpfWJvuBEMB5I0x79kXS0pfrg&'
fetch(url)
  .then(res => res.json()) 
  .then(data => {
    console.log(data)
    
    let images = data.photos.map(element => element.img_src);
    btn.textContent = "View Mars";
    btn.addEventListener('click', function() {
      const rnd = Math.floor(Math.random() * images.length);
      randomImage.src = images[rnd];
     
    })
  })
  
  .catch(err => {
    console.log(`error ${err}`)
  });

 
  