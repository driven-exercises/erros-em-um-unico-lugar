import httpStatus from "http-status";
import sentencesService from "../services/sentences-service.js";
import { notFoundError } from "../errors/notFound.error.js";
import { incompleteDataError } from "../errors/incompleteData.error.js";

async function getSentences(req, res) {
  const sentences = sentencesService.getSentences();
  res.send(sentences);
}

async function getSentence(req, res) {
  const { id } = req.params;

  try {  
    if (isNaN(id) || id <= 0) throw notFoundError("Frase")

    const sentences = sentencesService.getSentence(parseInt(id));
    res.send(sentences);
  } catch (err) {
    if (err.type === "notFound") return res.status(httpStatus.NOT_FOUND).send(err.message)
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
  }
}

async function createSentence(req, res) {
  const { body } = req;
  const { author, sentence } = body;

  try {
    if (!author || !sentence) throw incompleteDataError()

    sentencesService.createSentence(author, sentence);
    res.sendStatus(httpStatus.CREATED);
  } catch (err) {
    if (err.type === "incompleteData") return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(err.message)
    if (err.type === "conflict") return res.status(httpStatus.CONFLICT).send(err.message)
    res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
  }
}

const sentencesController = {
  getSentences,
  getSentence,
  createSentence
}

export default sentencesController;