
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

/* Hire button for conatct me block */

function openContactModal() {
    document.getElementById("contactModal").style.display = "block";
  }
  
  function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
  }
  
  function sendEmail(event) {
    event.preventDefault(); // prevent actual form submission
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const mailtoLink = `mailto:sharmarakshya7@gmail.com?subject=Hiring%20Request%20from%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%0A${encodeURIComponent(message)}`;
  
    window.location.href = mailtoLink;
  
    // Optional: Close the modal
    closeContactModal();
  }