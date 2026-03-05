import { useEffect, useRef, useState } from "react"

function App() {
  const [seconds, setSeconds] = useState(25 * 60) // 25分
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

  useEffect(() => {
    if (seconds === 0) setIsRunning(false)
  }, [seconds])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  const start = () => setIsRunning(true)
  const stop = () => setIsRunning(false)
  const reset25 = () => {
    setIsRunning(false)
    setSeconds(25 * 60)
  }
  const reset5 = () => {
    setIsRunning(false)
    setSeconds(5 * 60)
  }

  return (
    <div style={{ padding: 40, fontFamily: "system-ui" }}>
      <h1>Pomodoro Timer</h1>

      <div style={{ fontSize: 48, margin: "16px 0" }}>
        {mm}:{ss}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {!isRunning ? (
          <button onClick={start}>Start</button>
        ) : (
          <button onClick={stop}>Stop</button>
        )}

        <button onClick={reset25}>Reset 25:00</button>
        <button onClick={reset5}>Set 05:00</button>
      </div>

      <p style={{ marginTop: 16 }}>
        Start / Stop とリセットができる簡易ポモドーロタイマーです。
      </p>
    </div>
  )
}

export default App