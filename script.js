const OTP = document.querySelectorAll('.count');
const NewOTP = document.querySelector('.newotp');
console.log(OTP);
const randomNumber = () => {
  const number = Math.floor(Math.random() * 10000).toString();
 
  if (number.length > 3) {
    for (let i = 0; i < OTP.length; i++) {
      OTP[i].innerHTML = number[i];
    }
  }
};

NewOTP.addEventListener('click', randomNumber);

randomNumber();