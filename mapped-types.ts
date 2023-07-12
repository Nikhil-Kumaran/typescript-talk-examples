// Mapped types
// type NewType = { [K in keyof ExistingType]: MappingFunction };

export type Person = {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
};

type ReadonlyPerson = { readonly [K in keyof Person]: Person[K] };

const readOnlyPerson: ReadonlyPerson = {
  name: "John",
  age: 30,
  email: "john@gmail.com",
  isStudent: true
};

// readOnlyPerson.age = 25

type PartialPerson = { [K in keyof Person]?: Person[K] };

type RequiredPerson = { [K in keyof PartialPerson]-?: PartialPerson[K] };

type NonReadonlyPerson = { -readonly [K in keyof ReadonlyPerson]: ReadonlyPerson[K] };
