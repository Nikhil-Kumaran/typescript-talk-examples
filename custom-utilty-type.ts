type OmitByType<MainObjectType, TypeToRemove> = Omit<
  MainObjectType,
  {
    [K in keyof MainObjectType]: MainObjectType[K] extends TypeToRemove ? K : never;
  }[keyof MainObjectType]
>;

type Expand<MainObjectType, TypeToRemove> = {
  [K in keyof MainObjectType]: MainObjectType[K] extends TypeToRemove ? K : never;
};

// {
//     name:never
//     age: "age",
//     email: never,
//     isStudent: 'isStudent'
// }['name' | 'age' | 'email' | 'isStudent']

type Person = {
  name: string;
  age: number;
  email: string;
  isStudent: boolean;
};

type StringKeysOnly = OmitByType<Person, boolean | number>;
