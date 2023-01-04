function describePerson(person: {
  name: string;
  age: number;
  hobbies: [string, string]; // tuple
}) {
  return `${person.name} is ${person.age} years old and love ${person.hobbies.join(" and  ")}.`;
}

type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer FirstArgument, ...args: any[]) => any ? FirstArgument : never;

type FirstArg = GetFirstArgumentOfAnyFunction<typeof describePerson>;
const alex: FirstArg = {
  name: "Alex",
  age: 20,
  hobbies: ["walking", "cooking"]
};
describePerson(alex);

type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type Return = GetReturnType<typeof describePerson>;
