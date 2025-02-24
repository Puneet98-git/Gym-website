document.getElementById('form-group').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
 if (name && phone && email) {
  alert('Thank you for contacting us,' + name + '! We will get back to you soon.');
  document.getElementById('contacts').reset();
 } else {
  alert('Please fill out all fields.');
 }
});
