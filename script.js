function generateQR() {
  let url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Please enter a valid URL");
    return;
  }

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate QR code
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 256,
    height: 256,
  });
}

function downloadQR() {
  let qrCanvas = document.querySelector("#qrcode canvas");
  if (!qrCanvas) {
    alert("Generate a QR code first!");
    return;
  }

  let link = document.createElement("a");
  link.href = qrCanvas.toDataURL("image/png");
  link.download = "qr_code.png";
  link.click();
}
