import convertToSlug from '../src/convertToSlug';

describe('convertToSlug', () => {

  it('Taras', () => {
    expect(convertToSlug('Кохайтеся чорнобриві та не з москалями')).toBe('kohaitesja-chornobrivi-ta-ne-z-moskaljami');
  });

  it('Taras', () => {
    expect(convertToSlug('Садок вишневий коло хати, Хрущі над вишнями гудуть')).toBe('sadok-vishnevii-kolo-hati-hruschi-nad-vishnjami-gudut');
  });

});