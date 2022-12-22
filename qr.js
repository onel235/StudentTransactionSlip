qrData = document.getElementById('dataInput');
qrrequest = document.getElementById('request');
qrnat = document.getElementById('nat');
qrblank = document.getElementById('blank');
qrImage = document.getElementById('imageInput');
qrdepartment = document.getElementById('department');

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square"
  },
});

const updateQrData = () => {
  newQrData = qrData.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrRequest = () => {
  newQrData = qrData.value+qrrequest.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrnat = () => {
  newQrData = qrData.value+qrrequest.value+qrnat.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrdepartment = () => {
  newQrData = qrData.value+qrrequest.value+qrnat.value+qrdepartment.value;
  qrCode.update({
    data: newQrData
  });
};
const updateQrblank = () => {
  newQrData = "Full Name: "+qrData.value+"   "+"Section: "+qrnat.value+"   "+"Student Number: "+qrblank.value+"   "+"Requesting: "+qrrequest.value+"	"+"		"+"Department: "+qrdepartment.value+"   ";
  qrCode.update({
    data: newQrData
  });
};


const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage
  });
};

const updateQrType = () => {
  newQrType = qrType.value;
  qrCode.update({
    dotsOptions: {
      type: newQrType
    }
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById('canvas'));