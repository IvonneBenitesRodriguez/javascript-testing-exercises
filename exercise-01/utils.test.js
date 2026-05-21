const { formatName, clamp, slugify, truncate, isLeapYear, countOcurrences } = require ('./utils');

describe ('formatName', () => {
    test('formats name in correct order', () => {
        expect(formatName('Maria','Garcia')).toBe('Garcia, Maria');
    });

    test('returns false for an empty string', () => {
        expect(formatName('','')).toBe(false);
    });
});

describe('clamp', () => {
    test('returns a bounded value among the arguments',() => {
        expect(clamp(10,18,35)).toBe(18);
    })
    test('returns false for an invalid value', () => {
        expect(clamp('',0,1000)).toBe("invalid reply");
    });
    test('returns false for an invalid value', () => {
        expect(clamp('/', -2, 35)).toBe("invalid reply");
    });
    test('returns false for an invalid value', () => {
        expect(clamp('?', -5, 66)).toBe("invalid reply");
    })
    
});


describe('slugify', () => {

    test('transforms the uppercase to lower case and add hyphens', () => {
        expect( slugify('Hello World')).toBe('hello-world');
    });

    test('remove extra white spaces at start and end of the word and transforms uppercase to lowercase for the first character of the word.', () => {
        expect( slugify('  Leading spaces  ')).toBe('leading-spaces');
    })

    test('returns invalid reply when there is an empty string', () => {
        expect( slugify('')).toBe('invalid reply');
    });

});


describe( 'truncate', () => {
    
    test('returns text with ... after the first word according maxLength', () => {
        expect( truncate('Hello, world', 8)).toBe('Hello...');
    });

    test('returns text exactly', () => {
        expect( truncate('Hi', 10)).toBe('Hi');
    });

    test('returns invalid reply', () => {
        expect( truncate('', 10)).toBe('invalid reply');
    })

});


describe( 'isLeapYear', () => {
     
    test('returns true if the year is divisible by 400', () => {
        expect( isLeapYear(2000)).toBe(true);
    });

    test('returns false if the year is divisible by 100', () => {
        expect( isLeapYear(1900)).toBe(false);
    });

      test('returns true if the year is divisible by 4', () => {
        expect( isLeapYear(2024)).toBe(true);
      })

    test('returns invalid if it is an empty string', () => {
        expect( isLeapYear('')).toBe("invalid reply");
    });
});


describe ('countOcurrences', () => {

    test('return invalid reply due to empty arguments', () => {
        expect( countOcurrences('', '')).toBe("invalid reply");
    });

    test('return invalid reply due to a lack of text', () => {
        expect( countOcurrences('', 'r')).toBe("invalid reply");
    });


    test('return the number of times char appears in text', () => {
        expect( countOcurrences('hello world', "l")).toBe(3);
    });

    test('return the number of times char appears in text', () => {
        expect( countOcurrences('banana', "a")).toBe(3);
    });
})
