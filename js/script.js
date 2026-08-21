let codigo;


document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    codigo = Math.floor(Math.random() * 900000) + 100000;
    document.getElementById('codegen').value = codigo;
    const serviceID = 'default_service';
    const templateID = 'template_m55lyvc';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        alert('Correo enviado, revisa tu bandeja de entrada');
        document.getElementById('divRegistro').classList.add('oculto');
        document.getElementById('divVerificacion').classList.remove('oculto');
      },
      (err) => {
        alert(JSON.stringify(err));
      },
    );
  });
document.getElementById('validation')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    if (codigo == Number(document.getElementById('codigo').value)) {
      alert('Se ha confirmado su registro');
      window.location.href = "index.html";
    } else {
      alert('Codigo incorrecto');
    }
  });
