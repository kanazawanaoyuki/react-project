import { useEffect, useRef, useState } from "react"

function App() {

  // Counter
  const [count, setCount] = useState(0)

  // Timer
  const [seconds, setSeconds] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const timerId = useRef<number | null>(null)

  useEffect(() => {
    if (!isRunning) return

    timerId.current = window.setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1))
    }, 1000)

    return () => {
      if (timerId.current !== null) window.clearInterval(timerId.current)
      timerId.current = null
    }
  }, [isRunning])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <div style={{ padding: 40 }}>

      <h1>Business Tools</h1>

      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>

      <hr />

      <h2>Timer</h2>
      <div style={{ fontSize: 32 }}>{mm}:{ss}</div>

      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>

    </div>
  )
}

export default App