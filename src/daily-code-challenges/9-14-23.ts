// Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

// a = new Vector([1, 2, 3])
// b = new Vector([3, 4, 5])
// c = new Vector([5, 6, 7, 8])

// a.add(b)      # should return a new Vector([4, 6, 8])
// a.subtract(b) # should return a new Vector([-2, -2, -2])
// a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
// a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// a.add(c)      # throws an error
// If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

// Also provide:

// a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
// an equals method, to check that two vectors that have the same components are equal
// Note: the test cases will utilize the user-provided equals method.

export class Vector {
  vectorParams: number[];
  public constructor(components: number[]) {
    this.vectorParams = components;
  }

  public add = (vector: Vector) => {
    this.checkEqualLength(vector);
    const newParams = this.vectorParams.map((num, i) => {
      return num + vector.vectorParams[i];
    });
    return new Vector(newParams);
  };

  public subtract = (vector: Vector) => {
    this.checkEqualLength(vector);
    const newParams = this.vectorParams.map((num, i) => {
      return num - vector.vectorParams[i];
    });
    return new Vector(newParams);
  };

  public dot = (vector: Vector) => {
    this.checkEqualLength(vector);
    let sum = 0;
    this.vectorParams.map((num, i) => {
      sum += num * vector.vectorParams[i];
    });
    return sum;
  };

  public norm = () => {
    let sum = 0;
    this.vectorParams.map((num) => {
      sum += Math.pow(num, 2);
    });
    return Math.sqrt(sum);
  };

  public equals = (vector: Vector) => {
    let isEqual = true;
    this.vectorParams.map((num, i) => {
      if (vector.vectorParams[i] && num != vector.vectorParams[i]) {
        isEqual = false;
      }
    });
    return isEqual;
  };

  public toString = () => {
    return `(${this.vectorParams.join()})`;
  };

  private checkEqualLength = (vector: Vector) => {
    if (vector.vectorParams.length !== this.vectorParams.length) {
      throw Error('Vectors not same length');
    }
  };
}

// const a = new Vector([1, 2, 3]);
// const b = new Vector([3, 4, 5]);
// const c = new Vector([5, 6, 7, 8]);
// const d = new Vector([1, 2, 3]);
// // eslint-disable-next-line no-console
// console.log(a.norm());

// console.log(a.toString());
