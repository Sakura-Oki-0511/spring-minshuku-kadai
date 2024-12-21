const stripe = Stripe('pk_test_51QR8dkRoKicrXnasLOQXVTS0EIFd1Uw5hJw5JfZFgFkBqNba4YNDFPHQUUDoZZ6I9rayrpSrEZOOKtWWku8Mfj3D00rsROxQpk');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
  stripe.redirectToCheckout({
    sessionId: sessionId
  })
});