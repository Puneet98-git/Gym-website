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


let topBottom = document.getElementById("topBottom");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

topButton.addEventListener("click", function() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});
