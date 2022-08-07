function onClosePopup() {
  var popup = document.getElementById('covidPopup');
  if (popup) {
    popup.style.display = "none";
  } else {
    // popup not found
  }
}