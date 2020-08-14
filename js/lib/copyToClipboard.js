function copyColor(color, currentColorTone) {
  let format = document.getElementById("format").value;
  let formatedColor = "";
  let result = null
  let textArea = null
  let successful = false
  let modal = document.getElementById("modal");

  switch (format) {
    case "hexs":
      formatedColor = color.toUpperCase();
      break;
    case "hexc":
      formatedColor = "#" + color.toUpperCase();
      break;
    case "rgb":
      formatedColor = "rgb(" + convertToHex(color) + ")";
      break;
    case "rgba":
      formatedColor = "rgba(" + convertToHex(color) + ",1)";
      break;
  }

  function convertToHex(hex) {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) : null;
  }

  textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = formatedColor;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.log('No se pudo copiar', err);
  }

  document.body.removeChild(textArea);

  if(successful) {
    document.getElementById("copied-color").innerHTML = `<span style="background: #${ color }; padding: 5px 10px; ${ (currentColorTone < 2) ? ' color: black' : ' color: white' }">${ formatedColor }</span> COPIADO`;
  } else {
    document.getElementById("copied-color").innerHTML = `NO SE PUDO COPIAR 🚫`;
  }
  
  modal.style.display = "block";
  setTimeout( () => { modal.style.display = "none"; }, 1000);
}