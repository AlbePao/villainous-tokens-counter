/*!
 * ios-pwa-splash <https://github.com/avadhesh18/iosPWASplash>
 *
 * Copyright (c) 2023, Avadhesh B.
 * Released under the MIT License.
 */
//index.js
export function iosPWASplash(icon: string, color = 'white') {
  // Calculate the device's width and height
  const deviceWidth = screen.width;
  const deviceHeight = screen.height;
  // Calculate the pixel ratio
  const pixelRatio = window.devicePixelRatio || 1;
  // Create two canvases and get their contexts to draw landscape and portrait splash screens.
  const canvas = document.createElement('canvas');
  const canvas2 = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const ctx2 = canvas2.getContext('2d');

  // Create an image element for the icon
  const iconImage = new Image();

  iconImage.onerror = function () {
    throw new Error('Failed to load icon image');
  };

  iconImage.src = icon;
  // Load the icon image, make sure it is served from the same domain (ideal size 512pxX512px). If not then set the proper CORS headers on the image and uncomment the next line.
  //iconImage.crossOrigin="anonymous"
  iconImage.onload = function () {
    // Calculate the icon size based on the device's pixel ratio
    const iconSizeWidth = iconImage.width / (3 / pixelRatio);
    const iconSizeHeight = iconImage.height / (3 / pixelRatio);

    if (!ctx || !ctx2) {
      return;
    }

    canvas.width = deviceWidth * pixelRatio;
    canvas2.height = canvas.width;
    canvas.height = deviceHeight * pixelRatio;
    canvas2.width = canvas.height;
    ctx.fillStyle = color;
    ctx2.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height);

    // Calculate the position to center the icon
    const x = (canvas.width - iconSizeWidth) / 2;
    const y = (canvas.height - iconSizeHeight) / 2;
    const x2 = (canvas2.width - iconSizeWidth) / 2;
    const y2 = (canvas2.height - iconSizeHeight) / 2;
    // Draw the icon with the calculated size
    ctx.drawImage(iconImage, x, y, iconSizeWidth, iconSizeHeight);
    ctx2.drawImage(iconImage, x2, y2, iconSizeWidth, iconSizeHeight);
    const imageDataURL = canvas.toDataURL('image/png');
    const imageDataURL2 = canvas2.toDataURL('image/png');

    // Create the first startup image <link> tag (splash screen)

    const appleTouchStartupImageLink = document.createElement('link');
    appleTouchStartupImageLink.setAttribute('rel', 'apple-touch-startup-image');
    appleTouchStartupImageLink.setAttribute('media', 'screen and (orientation: portrait)');
    appleTouchStartupImageLink.setAttribute('href', imageDataURL);
    document.head.appendChild(appleTouchStartupImageLink);

    // Create the second startup image <link> tag (splash screen)

    const appleTouchStartupImageLink2 = document.createElement('link');
    appleTouchStartupImageLink2.setAttribute('rel', 'apple-touch-startup-image');
    appleTouchStartupImageLink2.setAttribute('media', 'screen and (orientation: landscape)');
    appleTouchStartupImageLink2.setAttribute('href', imageDataURL2);
    document.head.appendChild(appleTouchStartupImageLink2);
  };
}
