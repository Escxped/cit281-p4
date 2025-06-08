const { data } = require("./p4-data");

function getQuestions() {
  return data.map((item) => item.question);
}

function getAnswers() {
  return data.map((item) => item.answer);
}

function getQuestionsAnswers() {
  return data.map((item) => ({ ...item }));
}

function getQuestion(number = "") {
  const result = {
    error: "",
    question: "",
    number: "",
  };

  if (Number.isNaN(Number(number))) {
    result.error = "Question number must be an integer";
  } else if (number < 1) {
    result.error = "Question number must be >= 1";
  } else if (number > data.length) {
    result.error = `Question number must be less than the number of questions (${data.length})`;
  } else {
    result.question = data[number - 1].question;
    result.number = number;
  }

  return result;
}

function getAnswer(number = "") {
  const result = {
    error: "",
    answer: "",
    number: "",
  };

  if (Number.isNaN(Number(number))) {
    result.error = "Answer number must be an integer";
  } else if (number < 1) {
    result.error = "Answer number must be >= 1";
  } else if (number > data.length) {
    result.error = `Answer number must be less than the number of questions (${data.length})`;
  } else {
    result.answer = data[number - 1].answer;
    result.number = number;
  }

  return result;
}

function getQuestionAnswer(number = "") {
  const result = {
    error: "",
    question: "",
    answer: "",
    number: "",
  };

  if (Number.isNaN(Number(number))) {
    result.error = "Question number must be an integer";
  } else if (number < 1) {
    result.error = "Question number must be >= 1";
  } else if (number > data.length) {
    result.error = `Question number must be less than the number of questions (${data.length})`;
  } else {
    result.question = data[number - 1].question;
    result.answer = data[number - 1].answer;
    result.number = number;
  }

  return result;
}

module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer,
};
