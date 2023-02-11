$(".btnIniciar").click(function() {
      $(".ctnWelcome").hide();
  })


$('.myLoginForm').submit(function() {
    let xEmail = $("#email-login").val();
    let xPassword = $("#password-login").val();
    if (xEmail == "") {
      alert("O campo email deve ser preenchido")
      return false
    }
    if (xPassword == ""){
      alert("O campo senha deve ser preenchido")
      return false
    }
})