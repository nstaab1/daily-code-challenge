// ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

// An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

// For example:

// ISBN     : 1 1 1 2 2 2 3 3 3  9
// position : 1 2 3 4 5 6 7 8 9 10
// This is a valid ISBN, because:

// (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
// Examples
// 1112223339   -->  true
// 111222333    -->  false
// 1112223339X  -->  false
// 1234554321   -->  true
// 1234512345   -->  false
// 048665088X   -->  true
// X123456788   -->  false

export function validISBN10(isbn: string): boolean {
  const isbnArray = isbn.split('');

  const invalidChars = isbnArray.some(
    // Should havbe used Number.isNaN(val)
    (val, index) => isNaN(Number(val)) && index !== 9,
  );

  if (isbn.length !== 10 || invalidChars) {
    return false;
  }

  const initialValue = 0;

  const summation = isbnArray.reduce(
    (accumulator: number, currentValue: string, currentIndex: number) => {
      const num = currentValue === 'X' ? 10 : currentValue;
      if (!isNaN(Number(num))) {
        return accumulator + Number(num) * (currentIndex + 1);
      } else {
        return accumulator;
      }
    },
    initialValue,
  );

  return summation % 11 === 0;
}

// console.log(validISBN10('1112223339'));
// console.log(validISBN10('111222333'));
// console.log(validISBN10('1112223339X'));
// console.log(validISBN10('1234554321'));
// console.log(validISBN10('1234512345'));
// console.log(validISBN10('048665088X'));
// console.log(validISBN10('X123456788'));
