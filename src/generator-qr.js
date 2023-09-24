const qr = require("qr-image");
const fs = require("fs");
function generateQRCode(text, filename) {
  // Создаем QR-код
  const qrCode = qr.image(text, { type: "png" });

  // Сохраняем QR-код в файл
  qrCode.pipe(fs.createWriteStream(filename));

  console.log(`QR-код успешно создан и сохранен в файле '${filename}'`);
}
module.exports = generateQRCode;
