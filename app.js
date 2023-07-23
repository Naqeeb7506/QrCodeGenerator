let qrform = document.getElementById("qrform");
let qrcontainer = document.getElementById("qrcontainer");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");
let qrbutton = document.getElementById("qrbutton");

let renderqr = (url) => {
  if (!url) return;
  qrbutton.innerText = "Generating QR Code...";
  qrimg.src = url;
  qrcontainer.classList.add("show");

  qrimg.addEventListener("load", () => {
    qrbutton.innerText = "Generate QR Code";
  });
};

qrform.addEventListener("submit", (event) => {
  event.preventDefault();

  let formdata = new FormData(qrform);
  let text = formdata.get("qrtext");
  let qrurl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;

  renderqr(qrurl);
});

qrtext.addEventListener("keyup", () => {
  if (!qrtext.value.trim()) {
    qrcontainer.classList.remove("show");
  }
});
