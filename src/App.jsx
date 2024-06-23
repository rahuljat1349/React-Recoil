import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

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
  return (
    <div>
      <b>{count}</b>
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
