import "./App.css"
import { Counter } from "./components/Counter"
import { Timer } from "./components/Timer"

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Business Tools</h1>

      <div style={{ display: "grid", gap: 16, maxWidth: 520 }}>
        <Counter />
        <Timer />
      </div>
    </div>
  )
}

export default App