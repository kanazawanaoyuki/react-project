import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section style={{ padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2>Counter</h2>
      <p>count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </section>
  )
}