import translit from '../src/translit';

describe('translit', () => {

  it('Taras', () => {
    expect(translit('Кохайтеся чорнобриві та не з москалями')).toBe('Kohaitesja chornobrivi ta ne z moskaljami');
  });

  it('Taras', () => {
    expect(translit('Садок вишневий коло хати, Хрущі над вишнями гудуть')).toBe('Sadok vishnevii kolo hati, Hruschi nad vishnjami gudut\'');
  });

});