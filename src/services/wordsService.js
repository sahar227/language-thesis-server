const { wordPhase1 } = require("../models/wordPhase1");
const { wordPhase2 } = require("../models/wordPhase2");

class WordsService {
  constructor(WordModel) {
    this.WordModel = WordModel;
  }

  async getWords() {
    const words = await this.WordModel.find();
    return words;
  }

  async getById(id) {
    const word = await this.WordModel.find({ id });
    return word;
  }

  async addWord(word) {
    const newWord = new this.WordModel(word);
    await newWord.save();
    return newWord;
  }

  async removeWord(id) {
    const word = await this.WordModel.findByIdAndRemove(id);
    return word;
  }
}

module.exports.wordsPhase1Service = new WordsService(wordPhase1);
module.exports.wordsPhase2Service = new WordsService(wordPhase2);
