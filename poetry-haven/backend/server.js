// backend/server.js

const express = require('express');
const stripe = require('stripe')('your-secret-key-here');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// backend/server.js

// Add a simple GET route for testing
app.get('/', (req, res) => {
    res.send('Server is running');
  });
  

// Endpoint to handle payment
app.post('/charge', async (req, res) => {
  const { token, amount } = req.body;

  try {
    // Create a new charge using Stripe's charges API
    const charge = await stripe.charges.create({
      amount, // amount in cents
      currency: 'usd',
      source: token.id,
      description: 'Poetry Book Purchase',
    });

    // Respond with success and charge details
    res.json({ success: true, charge });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
