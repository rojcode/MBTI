class FontLoader {
    /**
     * Constructor for FontLoader class.
     * @param {object[]} fonts - An array of font objects, each containing fontFamily, fontUrl, and optional fontFormat.
     */
    constructor(fonts) {
      this.fonts = fonts;
    }
  
    /**
     * Load all the fonts by creating style elements and adding them to the head.
     */
    loadFonts() {
      this.fonts.forEach(font => {
        const fontElement = document.createElement('style');
        const fontcss = `
          @font-face {
            font-family: '${font.fontFamily}';
            src: url('${font.fontUrl}') format('${font.fontFormat || 'woff2'}');
            /* You can add other font parameters here, such as font-weight and font-style */
          }
  
          /* Add other styles here */
        `;
  
        fontElement.innerHTML = fontcss;
        document.head.appendChild(fontElement);
      });
    }
  }
  
  // Example of using the updated class
  const fontLoader = new FontLoader([
    { fontFamily: 'mi-black', fontUrl: 'fonts/Mikhak-Black.woff2' },
    { fontFamily: 'mi-regular', fontUrl: 'fonts/Mikhak-DS1-Medium.woff2' },
    // Add more fonts as needed
  ]);
  
  fontLoader.loadFonts();