function loopHide() {
  const newid = document.getElementById("heroimg1");
  console.log(newid.style.opacity);
  if (newid.style.opacity == 0) {
    newid.style.opacity = 1;
  } else {
    newid.style.opacity = 0;
  }
}

setInterval(loopHide, 10000);

document
  .getElementById("myForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = document.getElementById("email");
    const message = document.getElementById("message");

    emailjs
      .send(
        "service_43bwa5j",
        "template_84177d8",
        {
          from_name: username.value,
          to_name: "Alfa Aviation academy",
          from_email: username.value,
          to_email: "alfaaviationacdmy@gmail.com",
          message: message.value,
        },
        "3x9HxoLtTI2JRcraF"
      )
      .then(
        (res) => {
          console.log(res);
          alert("Thank you. I will get back to you as soon as possible.");
        },
        (error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  });
