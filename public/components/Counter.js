import { useState, useCallback } from '../web_modules/preact/hooks.js'
import { html } from '../web_modules/htm/preact.js'

export default () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1)
  }, [count]);
  return html`
    <div>
      <h2>Counter Component</h2>
      <p>${count}</p>
      <button onclick="${increment}">+</button>
      <button onclick="${decrement}">-</button>
    </div>
  `;
}
