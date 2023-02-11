  function disableButton() {
      const myElement = document.querySelector('.ctnWelcome')
      myElement.style.display = "none";
  }

  function validateForm() {
    let xEmail = document.querySelector('#email-login').value;
    let xPassword = document.querySelector('#password-login').value;
    if (xEmail == "") {
      alert("O campo email deve ser preenchido");
      return false
    };
    if (xPassword == "") {
      alert("O campo senha deve ser preenchido");
      return false
    }
  }