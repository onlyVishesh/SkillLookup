const express = require("express");
const { SKILLS_LIST } = require("../skills");
require("dotenv").config();
const app = express();
const port = 3000;

const skills = SKILLS_LIST;

function searchSkills(query) {
  if (!query) return skills; 

  const queryLower = query.toLowerCase();

  const exactMatches = skills.filter((skill) =>
    skill.toLowerCase().startsWith(queryLower)
  );

  return [...exactMatches];
}

function paginateResults(results, page = 1, limit = 10) {
  const start = (page - 1) * limit;
  const end = page * limit;
  return results.slice(start, end);
}

app.get("/api/skills", (req, res) => {
  
  const { query = "", page = 1, limit = 10 } = req.query;

  const filteredSkills = searchSkills(query);

  const paginatedSkills = paginateResults(
    filteredSkills,
    parseInt(page),
    parseInt(limit)
  );

  res.json({
    query,
    totalResults: filteredSkills.length,
    totalPages: Math.ceil(filteredSkills.length / limit),
    currentPage: parseInt(page),
    skills: paginatedSkills,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
