export function generateRandomUppercaseCharacters(length: number): string {
  var text = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < length; i++) {
    text += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return text;
}

export function generateRandomNumberString(length: number): string {
  var text = "";
  var numbers = "0123456789";

  for (var i = 0; i < length; i++) {
    text += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

  return text;
}
