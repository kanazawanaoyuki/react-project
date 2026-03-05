import { useEffect, useRef, useState } from "react"

export function Timer() {
  const [seconds, setSeconds] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const timerId = useRef<number | null>(null)

  useEffect(() => {
    if (!isRunning) return

    timerId.current = window.setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          setIsRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)

    return () => {
      if (timerId.current !== null) window.clearInterval(timerId.current)
      timerId.current = null
    }
  }, [isRunning])

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0")
  const ss = String(seconds % 60).padStart(2, "0")

  return (
    <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Timer</h2>

      <div style={{ fontSize: 40, margin: "12px 0" }}>
        {mm}:{ss}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {!isRunning ? (
          <button onClick={() => setIsRunning(true)}>Start</button>
        ) : (
          <button onClick={() => setIsRunning(false)}>Stop</button>
        )}

        <button
          onClick={() => {
            setIsRunning(false)
            setSeconds(25 * 60)
          }}
        >
          Reset 25:00
        </button>

        <button
          onClick={() => {
            setIsRunning(false)
            setSeconds(5 * 60)
          }}
        >
          Set 05:00
        </button>
      </div>
    </section>
  )
}