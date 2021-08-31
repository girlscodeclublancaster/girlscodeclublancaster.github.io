function onClosePopup() {
  console.log('click')
  var popup = document.getElementById('covidPopup');
  if (popup) {
    console.log('popup found')
    popup.style.display = "none";
  } else {
    console.log('popup not found')
  }
}