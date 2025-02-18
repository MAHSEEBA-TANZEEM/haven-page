<template>
    <div>
      <!-- Payment Options -->
      <div class="payment-options">
        <button 
          @click="showCreditCardForm" 
          :class="{ active: paymentMethod === 'creditCard' }">
          Credit Card
        </button>
        <button 
          @click="showPayPalButton" 
          :class="{ active: paymentMethod === 'paypal' }">
          PayPal
        </button>
      </div>
  
      <!-- Credit Card Form -->
      <div v-if="paymentMethod === 'creditCard'">
        <form id="payment-form" class="payment-form">
          <div id="card-element" class="card-element">
            <!-- Stripe.js injects the Card Element -->
          </div>
          <button type="submit" class="pay-button">Pay</button>
          <div id="card-errors" role="alert" class="card-errors"></div>
        </form>
      </div>
  
      <!-- PayPal Button -->
      <div v-if="paymentMethod === 'paypal'" id="paypal-button-container"></div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';
  
  export default {
    name: 'Payment',
    setup() {
      // Reactive state for the selected payment method and Stripe instance
      const paymentMethod = ref('creditCard');
      const stripe = ref(null);
      const cardElementInstance = ref(null);
  
      // Function to switch to Credit Card view
      const showCreditCardForm = () => {
        paymentMethod.value = 'creditCard';
      };
  
      // Function to switch to PayPal view and render the button
      const showPayPalButton = () => {
        paymentMethod.value = 'paypal';
        renderPayPalButton();
      };
  
      // Initialize Stripe and mount the card element
      const initializeStripe = async () => {
        stripe.value = await loadStripe('your-public-key-here');
        const elements = stripe.value.elements();
  
        // Create and mount the card element with custom styling
        cardElementInstance.value = elements.create('card', {
          style: {
            base: {
              fontSize: '16px',
              color: '#32325d',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#fa755a',
              iconColor: '#fa755a',
            },
          },
        });
        cardElementInstance.value.mount('#card-element');
      };
  
      // Set up the payment form submission handler for Stripe
      const initializePaymentForm = () => {
        const form = document.getElementById('payment-form');
        if (form) {
          form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const { token, error } = await stripe.value.createToken(cardElementInstance.value);
            if (error) {
              document.getElementById('card-errors').textContent = error.message;
            } else {
              console.log('Received Stripe token:', token);
              // Send the token to your server here
            }
          });
        }
      };
  
      // Render the PayPal button
      const renderPayPalButton = () => {
        // Ensure the PayPal SDK is loaded
        if (window.paypal) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '5.00' // Set the transaction amount here
                  }
                }]
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then(details => {
                console.log('Transaction completed by ' + details.payer.name.given_name);
              });
            },
            onError: (err) => {
              console.error(err);
            }
          }).render('#paypal-button-container');
        } else {
          console.error('PayPal SDK not loaded.');
        }
      };
  
      // Initialize Stripe and the payment form when the component is mounted
      onMounted(async () => {
        await initializeStripe();
        initializePaymentForm();
      });
  
      return {
        paymentMethod,
        showCreditCardForm,
        showPayPalButton,
      };
    },
  };
  </script>
  
  <style scoped>
  .payment-options {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }
  
  .payment-options button {
    margin: 0 8px;
    padding: 8px 16px;
    background-color: #f0f0f0;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .payment-options button.active {
    background-color: #6772e5;
    color: #fff;
    border-color: #5469d4;
  }
  
  .payment-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  .card-element {
    padding: 10px 12px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 16px;
  }
  
  .pay-button {
    width: 100%;
    padding: 12px;
    background-color: #6772e5;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  
  .pay-button:hover {
    background-color: #5469d4;
  }
  
  .card-errors {
    color: #fa755a;
    margin-top: 12px;
  }
  </style>
  