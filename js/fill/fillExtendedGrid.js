function fillExtendedPalette(container, colors, tones, colorNames, height){
  let gridContainer = document.getElementById(container);
  
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style');

  let css = `
    #${ container } {
      grid-template-rows: repeat(${ tones.length }, calc(calc(${ height }) / ${ tones.length })); 
      grid-template-columns: repeat(${ colorNames.length }, 1fr);
    }`

  let colorGrid = ''
  let currentColorName = 0
  let currentColorTone = 0

  head.appendChild(style);
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  for (let i = 0; i < colors.length; i++) {
    if(i > 0 && i % tones.length == 0)
      currentColorName++
    currentColorTone = i % tones.length
    colorGrid += `
      <div 
        class="color" 
        onclick="copyColor('${ colors[i] }', ${ currentColorTone })"
        style="background: #${ colors[i] }">
          ${colorNames[currentColorName]} ${ (i < tones.length * (colorNames.length - 2)) ? tones[currentColorTone] : Math.floor(((i % tones.length) + 1) / tones.length * 100) + "%" }
      </div>`
  }

  gridContainer.innerHTML = colorGrid
}