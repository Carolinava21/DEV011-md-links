const mdLinks = require('../src/index.js');

describe('mdLinks', () => {

  it('it should return a promise', () => {
    expect(mdLinks('docs/05-milestone.md')).toBeInstanceOf(Promise);
});
  });
  
  it('it should return an array with the links properties', () => {
    return mdLinks('links.md')
    .then((result) => {
      expect(Array.isArray(result)).toBe(true);
      result.forEach((link) => {
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('text'); 
      });
    });
  });
  it('it should return the array of links when stats is set to false', () => {
    return mdLinks('README.md', { stats: false })
      .then((result) => {
        expect(Array.isArray(result)).toBe(true); 
      });
  });

  it('it should the validate links', () => {
    const linkPath = 'links.md';
    return mdLinks(linkPath, true).then((result) => {
      result.forEach((link) => {
        expect(link).toHaveProperty('href');
        expect(link).toHaveProperty('text');
        expect(link).toHaveProperty('file');
      });
    });
  });