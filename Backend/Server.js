const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoute');
const taskRouter = require('./routes/taskRouter');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors());
// Middleware
app.use(express.json());

const conn = process.env.MONGODB || "mongodb+srv://ja8688126:3XZe9DFtgptR6byQ@cluster0.vcrdnwc.mongodb.net/Tasksmaster?retryWrites=true&w=majority&appName=Cluster0"

// MongoDB Connection
mongoose.connect(conn)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/users', userRoutes);
app.use('/tasks', taskRouter);
// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
