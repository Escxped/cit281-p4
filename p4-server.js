const express = require("express");
const app = express();
const port = 3000;

const {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
} = require("./p4-module");

app.get("/cit/question", (req, res) => {
  res.json({ error: "", statusCode: 200, questions: getQuestions() });
});

app.get("/cit/answer", (req, res) => {
  res.json({ error: "", statusCode: 200, answers: getAnswers() });
});

app.get("/cit/questionanswer", (req, res) => {
  res.json({ error: "", statusCode: 200, questions_answers: getQuestionsAnswers() });
});

app.get("/cit/question/:number", (req, res) => {
  const result = getQuestion(parseInt(req.params.number));
  res.status(result.error ? 400 : 200).json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    question: result.question,
    number: result.number,
  });
});

app.get("/cit/answer/:number", (req, res) => {
  const result = getAnswer(parseInt(req.params.number));
  res.status(result.error ? 400 : 200).json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    answer: result.answer,
    number: result.number,
  });
});

app.get("/cit/questionanswer/:number", (req, res) => {
  const result = getQuestionAnswer(parseInt(req.params.number));
  res.status(result.error ? 400 : 200).json({
    error: result.error,
    statusCode: result.error ? 400 : 200,
    question: result.question,
    answer: result.answer,
    number: result.number,
  });
});

app.get("*", (req, res) => {
  res.status(404).json({ error: "Route not found", statusCode: 404 });
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
