# **SkillLookup** 🚀

A powerful skill search API built with **Node.js, Express, and Fuse.js** for **fast, intelligent, and fuzzy skill matching**.

---

## **📌 Features**

1. **Fuzzy Search** using **Fuse.js** for intelligent skill matching
2. **Prioritizes exact matches** (skills that start with the query)
3. **Pagination support** for structured results
4. **Highly scalable & fast**
5. **Easy integration** for job portals, resume builders, and AI-driven skill-matching platforms

---

## **📦 Installation**

### **1️. Clone the Repository**

```sh
git clone https://github.com/onlyVishesh/SkillLookup.git
cd SkillLookup
```

### **2️. Install Dependencies**

```sh
npm install
```

## **3. Set Up Environment Variables**

Create a skills.js file in the root directory and add:

```js
export const SKILLS_LIST = [
  "Angular",
  "Android Development",
  "AWS",
  "Amazon Web Services",
  "Apache",
  "API Design",
  "App Development",
  "ASP.NET",
  "Assembly Language",
  "Artificial Intelligence",
  "Azure",
  "Agile",
  "Agile Methodology",
  "Ansible",
  "AWS Lambda",
  "Automation",
  "Apache Kafka",
  ...
]
```

Running the Server

```sh
npm start
Server is running on 3000 port
```

## **🔍 API Usage**

**📌 Endpoint:**

```php
GET /api/skills?query=<search_term>&page=<page_number>&limit=<items_per_page>
```

### **📌 Query Parameters:**

| Parameter | Type   | Description                  | Default  |
| --------- | ------ | ---------------------------- | -------- |
| `query`   | String | Search keyword (e.g., "aws") | Required |
| `page`    | Number | Page number for pagination   | `1`      |
| `limit`   | Number | Number of results per page   | `10`     |

**📌 Example Request:**

```bash
GET http://localhost:3001/api/skills?query=re&page=1&limit=10
```

**📌 Example Response:**

```json
{
  "query": "re",
  "totalResults": 52,
  "totalPages": 6,
  "currentPage": 1,
  "skills": [
    "React",
    "React Native",
    "Redux",
    "REST API",
    "Real-Time Data",
    "Ruby on Rails",
    "Redis"
  ]
}
```

## **🛠 Tech Stack**

1. Node.js
2. Express.js
3. Fuse.js (for fuzzy search)

## **📜 License**

This project is open-source and available under the MIT License.

## **🙌 Contributing**

Contributions are welcome! Feel free to submit a pull request.

Also please make sure to give it a 🌟
