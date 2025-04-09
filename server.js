const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let projects = [];
let freelancers = [];

app.get('/', (req, res) => {
  res.send('Enuncia Project Portal Backend is running.');
});

// Endpoint to post a new project
app.post('/api/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.status(201).send({ message: 'Project added', project });
});

// Endpoint to get all projects
app.get('/api/projects', (req, res) => {
  res.send(projects);
});

// Endpoint to register freelancer
app.post('/api/freelancers', (req, res) => {
  const freelancer = req.body;
  freelancers.push(freelancer);
  res.status(201).send({ message: 'Freelancer registered', freelancer });
});

// Endpoint to get all freelancers
app.get('/api/freelancers', (req, res) => {
  res.send(freelancers);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
