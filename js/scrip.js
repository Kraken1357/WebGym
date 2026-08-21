const btn = document.getElementById('enviar');
document.getElementById('formulario')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_m55lyvc';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = 'Send Email';
        alert('Sent!');
      },
      (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      },
    );
  });
