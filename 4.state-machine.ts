interface Config<TState> {
  initial: keyof TState;
  states: TState;
}

export const makeStateMachine = <TState>(config: Config<TState>) => {};

makeStateMachine({
  initial: "d",
  states: {
    a: {},
    d: {}
  }
});

function makeStateMachine1<TState>(config: Config<TState>) {}
makeStateMachine1({
  initial: "b",
  states: {
    a: {},
    b: {}
  }
});
