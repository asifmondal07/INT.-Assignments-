# INT.-Assignments-

AI-Assisted Text Classification API (Node.js)
Overview

This project is a Node.js REST API that classifies input text into predefined categories using AI-assisted logic.
It demonstrates clean backend architecture, AI integration, and graceful error handling.

Supported Categories

Complaint

Query

Feedback

Other

The API returns both the classification result and a confidence score.



Tech Stack

Node.js

Express.js

OpenAI API

ES Modules

dotenv

nodemon




Clone the repository: git clone https://github.com/your-username/ai-text-classifier.git
cd ai-text-classifier



Create .env file

PORT=3000
OPENAI_API_KEY=your_openai_api_key


Request Body:

json 

{
  "text": "My order arrived damaged and I am very unhappy"
}



Response:

json

{
  "category": "Complaint",
  "confidence": 0.9
}


Confidence Mapping Example:

{
  Complaint: 0.90,
  Query: 0.85,
  Feedback: 0.80,
  Other: 0.70
}


Postman Collection :

method : POST(localhost:2000/api/INT)