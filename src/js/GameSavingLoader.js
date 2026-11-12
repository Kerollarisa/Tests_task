import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const string = await json(data);
    return new GameSaving(JSON.parse(string));
  }
}