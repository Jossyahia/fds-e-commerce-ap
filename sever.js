const express = require('express');
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/food-delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a schema for the menu items
const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String
});

// Create a model for the menu items
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Create a new Express server
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Add an API endpoint for retrieving the menu items
app.get('/api/menu', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// Start the server on port 3000
app
