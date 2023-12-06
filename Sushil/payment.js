const form = document.getElementById("form");
const cardpay = document.querySelectorAll(".paybtn");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = form.children[5].value;
  const name = form.children[1].value;
  const email = form.children[3].value;
  initializeRazorpay(amount, name, email);
});

function initializeRazorpay(amount, name, email) {
  let options = {
    key: "rzp_test_EMkQhsMD9vM0QB",
    amount: amount * 100,
    currency: "INR",
    name: "Childern's NGO",
    description: "Donation",
    image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    handler: function (response) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      name: name,
      email: email,
    },

    theme: {
      color: "#6739B7",
    },
  };
  var rzp = new Razorpay(options);
  rzp.open();
}

for (let i = 0; i < cardpay.length; i++) {
  const btn = cardpay[i];
  btn.addEventListener("click", function (e) {
    let options = {
      key: "rzp_test_EMkQhsMD9vM0QB",
      amount: parseInt(data[i].amount) * 100,
      currency: "INR",
      name: "Childern's NGO",
      description: data[i].description,
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: data[i].name,
      },

      theme: {
        color: "#6739B7",
      },
    };
    var rzp = new Razorpay(options);
    rzp.open();
  });
}
