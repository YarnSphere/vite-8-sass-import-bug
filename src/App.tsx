import { Button, enUS, Root } from "@ostack.tech/ui";
import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Root locale={enUS}>
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
      <span className={styles.counter}>{count}</span>
    </Root>
  );
}

export default App;
