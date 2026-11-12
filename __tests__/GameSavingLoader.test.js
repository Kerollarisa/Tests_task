jest.mock('../src/js/reader.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

import read from '../src/js/reader.js';
import GameSavingLoader from '../src/js/GameSavingLoader.js';
import GameSaving from '../src/js/GameSaving.js';

const JSON_STRING = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';

function createBuffer(data) {
  const buffer = new ArrayBuffer(data.length * 2);
  const view = new Uint16Array(buffer);
  for (let i = 0; i < data.length; i += 1) {
    view[i] = data.charCodeAt(i);
  }
  return buffer;
}

describe('GameSavingLoader', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('load возвращает GameSaving (read resolve)', async () => {
    read.mockResolvedValue(createBuffer(JSON_STRING));
    const saving = await GameSavingLoader.load();
    expect(saving).toBeInstanceOf(GameSaving);
    expect(saving.id).toBe(9);
    expect(saving.created).toBe(1546300800);
    expect(saving.userInfo).toEqual({
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    });
  }, 10000);

  test('load отклоняется при ошибке read (read reject)', async () => {
    read.mockRejectedValue(new Error('read error'));
    await expect(GameSavingLoader.load()).rejects.toThrow('read error');
  });
});