var img = document.createElement('img');
img.setAttribute('src', 'examples/octocat.png')

/*
 * TODO: comment
 */
img.addEventListener('load', function() {
  var vibrant = new Vibrant(img);
  var swatches = vibrant.swatches()
  for (var swatch in swatches) {
    if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
      console.log(swatch, swatches[swatch].getHex())
    }
  }
});
