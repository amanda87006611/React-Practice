import { useState } from 'react'
import './menu.css'

function App() {
  const items = ['首頁', '關於我們', '產品']
  const [activeIndex, setActiveIndex] = useState()
  return (
    <ul>
      {items.map((v, i) => {
        return (
          <li
            key={i}
            onClick={() => {
              setActiveIndex(i)
            }}
          >
            <a href="#/" className={activeIndex === i ? 'active' : ''}>
              {v}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default App
