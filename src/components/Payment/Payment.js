const __DEV__ = "localhost";
const __PRODUCTION__ = "";
console.log(process.env.__LOCAL__);

module.exports.razorPayOnLoad = (src) => {
  try {
    //"https://checkout.razorpay.com/v1/checkout.js"
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  } catch (error) {
    console.log(error, "script loading error");
  }
};

module.exports.displayRazorPay = (paymentDetails) => {
  try {
    return new Promise(async (resolve, reject) => {
      console.log(paymentDetails);
      const src = await module.exports.razorPayOnLoad(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!src) {
        console.log("razor pauy script loading error");
        return;
      } else {
        const options = {
          key:
            __DEV__ === "localhost"
              ? "rzp_test_SqGnmB8KZwCrn4"
              : __PRODUCTION__, // Enter the Key ID generated from the Dashboard
          amount: paymentDetails.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: paymentDetails.currency,
          order_id: paymentDetails.id,
          name: "SIDHIK",
          description: "Test Transaction",
          handler: function (response) {
            console.log(response);
            resolve(response)
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
          },
          prefill: {
            name: paymentDetails.fullName,
            email: paymentDetails.email,
            contact: paymentDetails.contactNo,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var paymentObj = new window.Razorpay(options);
        paymentObj.open();

        // const result = await axios.post('http://localhost:5000/payment/orders');
      }
    });
  } catch (error) {
    console.log(error, "razor pay error");
  }
};
