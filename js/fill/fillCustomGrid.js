function fillPalette(container, colors, height){
  let gridContainer = document.getElementById(container);
  let head = document.head || document.getElementsByTagName('head')[0]
  let style = document.createElement('style');
  let colorGrid = ''

  let css = `
    #${ container } {
      grid-template-rows: repeat(${ 4 }, calc(calc(${ height }) / ${ 4 })); 
      grid-template-columns: repeat(${ colors.length / 4 }, 1fr);
    }`

  head.appendChild(style);
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  for (let i = 0; i < colors.length; i++) {
    colorGrid += `
      <div 
        class="color ${ colors[i][2] == 1 ? "white" : "black"}" 
        onclick="copyColor('${ colors[i][1] }', ${ colors[i][2] == 1 ? 2 : 1 })"
        style="background: #${ colors[i][1] };">
          <span style="color: ${ colors[i][2] == 1 ? "#FFFFFF" : "#000000" }; font-weight: ${ colors[i][2] == 1 ? "400" : "500" };">${ colors[i][0] }</span>
      </div>`
  }

  gridContainer.innerHTML = colorGrid
}