function isJavaScriptFile(fileName) {
  if (typeof fileName !== 'string' ) {
    return 'Input Valid text file name';
  }
  if (fileName.endsWith('.js')) {
    return true;
  } else {
    return false;
  }
}

const getJavaScript = isJavaScriptFile('app.png');
console.log(getJavaScript);
