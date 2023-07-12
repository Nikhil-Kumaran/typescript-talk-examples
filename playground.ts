type Person = {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
};

export const person: Person = {
  name: "John",
  age: 30,
  email: "john@gmail.com",
  isStudent: true
};

// Union of keys
type ObjectKeys = keyof Person;
const objectKeys: ObjectKeys = "age";

type ObjectKeyType = Person["name"];

// type ObjectKeyType = Person["name" | 'age'];

// Union of key types
type ObjectKeyTypes = Person[keyof Person];

const roles = ["role0", "role1", "role2"] as const;
// Union of possible values of array
type Roles = (typeof roles)[number];
