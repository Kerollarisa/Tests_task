import './css/style.css';
import GameSavingLoader from './js/GameSavingLoader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    console.error(error);
  }
})();