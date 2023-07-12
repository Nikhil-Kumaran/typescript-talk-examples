interface Config<TState> {
  states: TState;
  initial: keyof TState;
}

export const makeStateMachine = <TState>(config: Config<TState>) => {};

makeStateMachine({
  states: {
    a: {},
    b: {}
  },
  initial: "a"
});
