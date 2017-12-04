import normalizeTitle from '../normalizeTitle';

describe('normalize title', () => {
  it('should replace dashes with spaces', () => {
    const testName = 'test-this-title';
    const expectedTitle = 'Test This Title';

    const result = normalizeTitle(testName);
    expect(result).toBe(expectedTitle);
  });
});
