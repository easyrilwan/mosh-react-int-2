import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);
  // const [value, dispatch] = useReducer(counterReducer, 0);

  // const { counter, increment, reset } = useCounterStore();

  const counter = useCounterStore((state) => state.counter);
  const increment = useCounterStore((state) => state.increment);
  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      {/* Using Zustand */}
      <p>Counter ({counter})</p>

      <button onClick={increment} className="btn btn-primary mx-1">
        Increment
      </button>

      <button onClick={reset} className="btn btn-primary mx-1">
        Reset
      </button>

      {/* Using useReducer */}
      {/* <p>Counter ({value})</p> */}

      {/* <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button> */}
    </div>
  );
};

export default Counter;
