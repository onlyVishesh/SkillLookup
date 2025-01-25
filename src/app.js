const express = require("express");
const cors = require("cors");
const Fuse = require("fuse.js");
const { SKILLS_LIST } = require("../skills");
require("dotenv").config();
const app = express();
const port = 3000;

const skills = SKILLS_LIST;

const options = {
  includeScore: true,
  threshold: 0.2,
  keys: ["skill"],
};

const fuse = new Fuse(
  skills.map((skill) => ({ skill })),
  options
);

function searchSkills(query) {
  if (!query) return skills;

  const queryLower = query.toLowerCase();

  const exactMatches = skills.filter((skill) =>
    skill.toLowerCase().startsWith(queryLower)
  );

  const results = fuse.search(queryLower);

  const nonExactMatches = results
    .map((result) => result.item.skill)
    .filter((skill) => !exactMatches.includes(skill));

  return [...exactMatches, ...nonExactMatches];
}

function paginateResults(results, page = 1, limit = 10) {
  const start = (page - 1) * limit;
  const end = page * limit;
  return results.slice(start, end);
}

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/api/skills", (req, res) => {
  try {
    const { query = "", page = 1, limit = 10 } = req.query;

    const filteredSkills = searchSkills(query);

    const paginatedSkills = paginateResults(
      filteredSkills,
      parseInt(page),
      parseInt(limit)
    );

    return res.json({
      success: true,
      message:"Skills fetched",
      query,
      totalResults: filteredSkills.length,
      totalPages: Math.ceil(filteredSkills.length / limit),
      currentPage: parseInt(page),
      skills: paginatedSkills,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port} Port`);
});
