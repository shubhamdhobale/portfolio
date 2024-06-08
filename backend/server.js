import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config({
  path: './.env',
});

const app = express();

app.get('/', (req, res) => {
  res.send("Routes are working");
});

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shubhamdhobale2021it:shubham123@cluster0.lihjfuu.mongodb.net/portfolio");
    console.log(`DB Connected ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error", error);
    // process.exit(1);
  }
};
connectDB();

// Define Schema & Model
const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

app.use(bodyParser.json());

// API endpoint for formdata handling
app.post('/api/formdata', (req, res) => {
  const { name, message } = req.body;
  const formData = new Form({ name, message });
  formData.save()
    .then(() => {
      res.status(201).json({ message: "Form Data saved Successfully" });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Error occurred while saving the form data" });
    });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
