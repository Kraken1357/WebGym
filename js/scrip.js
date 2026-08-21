const btn = document.getElementById('button');
document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_0we0889';
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
