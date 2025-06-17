import express from "express";
import { resume } from "./data.js";
const app = express();
const port = 3100;

// Full resume
app.get("/", (req, res) => {
  res.json(resume);
});

// Basic info
app.get("/basic", (req, res) => {
  const { name, title, summary } = resume;
  res.json({ name, title, summary });
});

// Contact information
app.get("/contact", (req, res) => {
  res.json(resume.contact);
});

// Skills
app.get("/skills", (req, res) => {
  res.json(resume.skills);
});

// Education
app.get("/education", (req, res) => {
  res.json(resume.education);
});

// Experience
app.get("/experience", (req, res) => {
  res.json(resume.experience);
});

// Projects
app.get("/projects", (req, res) => {
  res.json(resume.projects);
});

// Specific project by name
app.get("/projects/:name", (req, res) => {
  const project = resume.projects.find(
    (p) => p.name.toLowerCase() === req.params.name.toLowerCase()
  );
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: "Project not found" });
  }
});

// Achievements
app.get("/achievements", (req, res) => {
  res.json(resume.achievements);
});

// Languages
app.get("/languages", (req, res) => {
  res.json(resume.languages);
});

app.listen(port, () => {
  console.log(`Resume API running at http://localhost:${port}`);
});
