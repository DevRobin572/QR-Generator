function genQR() {
    const qrApi = "https://api.qrserver.com/v1/create-qr-code/?data=";
    const myimg = document.getElementById("img");
    const mytext = document.getElementById("qrtext").value.trim();
    const mysize = document.getElementById("size").value;
    const qrContainer = document.querySelector('.qr-container');

    if (mytext === "") {
        alert("Please Enter Text");
        return;
    }

    const qrCodeURL = `${qrApi}${encodeURIComponent(mytext)}&size=${mysize}x${mysize}`;
    myimg.src = qrCodeURL;

    // Show qr-container after generating QR code
    qrContainer.style.display = 'flex';
}
