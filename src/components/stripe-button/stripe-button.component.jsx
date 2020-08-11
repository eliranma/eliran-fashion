import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publushableKey = 'pk_test_51HEvyfBavRq6n1gJY8UiygS5A4C9CQ7bIry64apTxE6yRTtyDSj2KyR4Kwe4GPaKiQVoa1AYufNhaAXBrXPbRdrs00v1jBFDkO';
const onToken = token => {
    alert('Payment Successful');
}

    return (
        <StripeCheckout 
        name='eliran-fashion Co.'
        email=''
        label='Pay Now'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da
        '
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publushableKey}
        iconUrl
        />
    );
};

export default StripeCheckoutButton;