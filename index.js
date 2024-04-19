const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Trekking', {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
 console.error('Failed to connect to MongoDB', err);
});

// Create a Mongoose schema
const formDataManSchema = new mongoose.Schema({
  name: String,
  country:String,
  email: String,
  contactNo: String,
  noOfTraveller: String,
  passportNo:String,
  arrivalDate:String,
  specialRequirement:String,
  message: String
});
12
// Create a Mongoose model
const FormDataMan = mongoose.model('FormDataMan', formDataManSchema);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit-form', async (req, res) => {
  try {
    // Create a new FormData document
    const FormDataMan = new FormDataMan({
      name: req.body.name,
      country: req.body.email,
      email: req.body.email,
      contactNo: req.body.email,
      noOfTraveller: req.body.email,
      passportNo: req.body.email,
      arrivalDate: req.body.email,
      specialRequirement: req.body.email,
      message: req.body.message
    });

    // Save the form data to MongoDB
    await FormDataMan.save();

    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/form-data', async (req, res) => {
  try {
    const formData = await FormDataMan.find();
    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.put('/update-form/:id', async (req, res) => {
  try {
    const formData = await FormDataMan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(formData);
  } catch (error) {
    console.error('Error upd ating form data:', error);
    res.status(500).json({ error: 'Inter\nal server error' });
  }
});
app.delete('/delete-form/:id', async (req, res) => {
  try {
    await FormDataMan.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Form data deleted successfully' });
  } catch (error) {2
    console.error('Error deleting form data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
 
app.get('/search', async (req, res) => {
  const query = req.query.q; // Assuming the search query is passed as a query parameter

  try {
    const result = await collection.find({ $text: { $search: query } }).toArray();
    res.json(result);
  } catch (error) {
    console.error('Error searching:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Start the server 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
