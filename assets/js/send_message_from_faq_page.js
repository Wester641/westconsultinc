document.addEventListener("DOMContentLoaded", function () {
  let submit_button = document.querySelector("button[type='submit']");
  // let error_message = document.getElementById("error");
  // let success_message = document.getElementById("success");

  const form = document.getElementById("faq-form_id");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const dataFromFaqPage = {
      name: form.querySelector('input[type="text"]').value,
      email: form.querySelector('input[type="email"]').value,
      phone: form.querySelector('input[placeholder="Phone number"]').value,
      comments: form.querySelector('textarea[placeholder="Write a message"]').value,
      checkbox: form.querySelector('input[type="checkbox"]').checked,
    };

    console.log(dataFromFaqPage);

    fetch("https://thewestconsult.com/backend/email_server_2.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFromFaqPage),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (success_message) {
          success_message.innerHTML = data.status;
          success_message.className = "n-success";
          setTimeout(() => {
            success_message.innerHTML = null;
            success_message.className = "";
          }, 5000);
        } else {
          console.log(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    form.reset();

    if (submit_button) {
      submit_button.disabled = true;
    }
  });
});
