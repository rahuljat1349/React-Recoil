import { useRecoilState, useRecoilValue, useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <>
      <Count />
    </>
  );
}

function Count() {
  return (
    <div>
      <CountRendrer />
    </div>
  );
}

function CountRendrer() {
  const count = useRecoilValue(countAtom);

  // Also can be like this
  // const count = useRecoilValueLoadable(countAtom);
  // now count is an object which has "State", which can be loading, hasValue and hasError and "Content" which has actual content only if "hasValue".

  const isEven = useRecoilValue(evenSelector)

  return (
    <div>
      <b>{count}</b>
      {isEven % 2 == 0 && " it is even"}
      <Buttons />
    </div>
  );
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(pre => pre+1)}>Increase</button>
      <button onClick={() => setCount(pre => pre-1)}>Decrease</button>
    </div>
  );
}

export default App;
