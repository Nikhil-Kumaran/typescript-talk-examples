// function useState<T>(initialState: T): [T, (newState: T) => void];
// function useState<T = undefined>(initialState?: T): [T | undefined, (newState: T) => void];

function useState<T>(initialState: T): [T, (newState: T) => void] {
  let state = initialState;
  function updateState(newState: T) {
    state = newState;
  }
  return [initialState, updateState];
}

const [text, setText] = useState("text");
