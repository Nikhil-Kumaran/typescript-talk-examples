const getUser = () => ({ name: "Nikhil", age: 25 });

type GetReturnType<T> = T extends (...args: any) => infer R ? R : never;

type Return = GetReturnType<typeof getUser>;

const Component: React.FC<{ name: string; age: number }> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

type PropsType<T> = T extends React.ComponentType<infer P> ? P : never;

type Props = PropsType<typeof Component>;
