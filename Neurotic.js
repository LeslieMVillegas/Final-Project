
  function openPopup(imageUrl) {
    // Specify the width and height of the popup window
    var width = 600;
    var height = 400;
    
    // Calculate the left and top positions to center the window
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    
    // Open the popup window
    var popupWindow = window.open(imageUrl, 'ImagePopup', 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top);
    
    // Focus the popup window
    if (popupWindow) {
        popupWindow.focus();
    }
}
