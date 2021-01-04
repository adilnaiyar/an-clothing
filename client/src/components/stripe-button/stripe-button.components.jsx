import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert2';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HxaM7G63HECrUAUIESYv9PuGzwqDR4QzXfYelGoj1fbDY45olSd8rArbu1WTkIpBGVrKPE6rkCnhh2G1O8ZWj6k00qEyZYSp5';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        swal.fire("Done!", "Successful Payment", "success");

      })
      .catch(error => {
        console.log('Payment Error: ', error);
        swal.fire("Error!", "Payment Failed", "error");

      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='ANN Clothing '
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₹{price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;