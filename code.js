// hero text animation
new TypeIt('#hero', {
    speed: 50,
    loop: true,
    startDelay: 900,
    lifeLike: true,
    nextStringDelay: 1000
})
.type("hello welcome to", { delay: 100 })
.move(-11, { delay: 100 })
.type("!", { delay: 400 })
.move(null, { to: "START", instant: true, delay: 300 })
.move(1, { delay: 200 })
.delete(1)
.type("H", { delay: 225 })
.move(7)
.delete(1)
.type("W", { delay: 225 })
.move(null, { to: "END" })
.type(" my Portfolio.", { delay: 3000 })
.go();


// back to top button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// email validation
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}



