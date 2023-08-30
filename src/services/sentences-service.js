import { conflictError } from "../errors/conflict.error.js";
import { notFoundError } from "../errors/notFound.error.js";
import sentencesRepository from "../repositories/sentences-repository.js";

function getSentences() {
  const result = sentencesRepository.getSentences();
  return result;
}

function getSentence(id) {
  const result = sentencesRepository.getSentenceById(id);
  if (!result) throw notFoundError("Frase")
  return result;
}

function createSentence(author, sentence) {
  const existingSentence = sentencesRepository.getSentence(sentence);
  if (existingSentence) throw conflictError("Frase");

  return sentencesRepository.createSentence(author, sentence);
}

const sentencesService = {
  getSentences,
  getSentence,
  createSentence
}

export default sentencesService;