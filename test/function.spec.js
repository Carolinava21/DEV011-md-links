const path = require('path');
const fs = require('fs')
const { isAbsolutePath, 
convertAbsolute,
verifyPathExistence,
isItMarkdown,
linksExtract,
validateLinks,
readingFile,
statsFunction
 } = require ('../src/function.js');

describe ("isAbsolutePath", () => {
it(" should check if the route is absolute", () => {
const isAbsoluteResult = isAbsolutePath('C:/Users/caroo/Desktop/Laboratoria/DEV011-md-links/docs/04-milestone.md');
expect (isAbsoluteResult).toBe (true);
});
it("should check if the route is relative", () => {
    const isAbsoluteResult = isAbsolutePath('docs/04-milestone.md');
    expect(isAbsoluteResult).toBe(false);
  });
});

describe ("convertAbsolute", () => {
  it("convert the relative path into absolute", () => {
    const convertedPath = convertAbsolute('docs/01-milestone.md');
    expect(convertedPath).toBe('C:\\Users\\caroo\\Desktop\\Laboratoria\\DEV011-md-links\\docs\\01-milestone.md');
  });
});

describe ("verifyPathExistence", () => {
  it ("the link's path exists", () => {
    const pathExists = verifyPathExistence('docs/03-milestone.md');
    expect(pathExists).toBe(true)
  });
});
describe ("isItMarkdown?",() => {
  it("the extensions are part of a Markdown file", () => {
   const itIsMarkdown = isItMarkdown ('docs/02-milestone.md');
   expect(itIsMarkdown).toBe(true)  
  });
});

//reading test
describe("readingFile", () => {
  it("the content of the file is being read", () => {
    const testPath = './links.md';
    return readingFile(testPath)
      .then(fileContent => {
        expect(typeof fileContent).toBe('string');
      });
  });
});
//extract links
describe("extractLinks", () => {
  it("the links are extracted, and an array is returned", () => {
    const testPath = './links.md';
    return fs.readFile(testPath, 'utf-8', (err, fileContent) => {
      if (err) throw err;

      const linkArray = [
        {
          href: 'https://www.youtube.com/watch?v=4JXnTxXg5sI',
          text: 'lofixmas',
          file: 'links.md'
        },
        {
          href: 'https://developer.mozilla.org/es/docs/Web/HTTP/Status',
          text: 'httpstatus',
          file: 'links.md'
        },
        {
          href: 'https://luisrrleal.com/blog/como-hacer-peticiones-http-en-javascript',
          text: 'información',
          file: 'links.md'
        },
        {
          href: 'https://www.bookbub.com/blog/free-short-stories-online',
          text: 'stories',
        },
        {
          href: 'https://www.grammarly.com/',
          text: 'grammarly',
          file: 'links.md'
        },
        {
          href: 'https://dictionary.cambridge.org/es/diccionario/',
          text: 'diccionario',
          file: 'links.md'
        },
        
      ];

      expect(linksExtract(fileContent, testPath)).toEqual(linkArray);
    });
  });
});

describe('statsFunction', () => {
  it('stats shows the total and Unique links inside the file', () => {
    const links = [
      { href: 'https://www.youtube.com/watch?v=4JXnTxXg5sI' },
      { href: 'https://www.grammarly.com/' }
    ];
    const stats = statsFunction(links);
    expect(stats).toEqual({ Total: links.length, Unique: links.length });
  });
});

// //validate links 
// describe("validateLinks" , () => {
//   it( "the links are validated" 
//   )
// }
// ) 

