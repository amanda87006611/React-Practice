import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')
  const [textArea, setTextArea] = useState('')

  const [radioCheck, setRadioCheck] = useState('')
  const foodOption = ['牛肉麵', '排骨飯', '雞肉飯']

  const [selectedOption, setSelectedOption] = useState('')

  const [checkboxOptions, setCheckboxOptions] = useState([])
  const fruit = ['芒果', '葡萄', '西瓜']

  return (
    <>
      <h2>input text</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <br />
      <br />
      <h2>input textArea</h2>
      <textarea
        type="text"
        value={textArea}
        onChange={(e) => {
          setTextArea(e.target.value)
        }}
      />

      <br />
      <h2>Radio Value</h2>
      {foodOption.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={v}
              id={'foodOption' + i}
              checked={v === radioCheck}
              onChange={(e) => {
                setRadioCheck(e.target.value)
              }}
            />
            <label htmlFor={'foodOption' + i}>{v}</label>
          </div>
        )
      })}
      <br />
      <h2>下拉式選單</h2>
      <select
        name="cars"
        id="cars"
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>

      <h2>複選清單</h2>
      {fruit.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={v}
              checked={checkboxOptions.includes(v)}
              onChange={(e) => {
                const inState = checkboxOptions.includes(e.target.value)
                if (inState) {
                  const newCheckboxOptions = checkboxOptions.filter(
                    (v, i) => v !== e.target.value
                  )
                  setCheckboxOptions(newCheckboxOptions)
                } else {
                  const newCheckboxOptions = [
                    ...checkboxOptions,
                    e.target.value,
                  ]
                  setCheckboxOptions(newCheckboxOptions)
                }
              }}
            />
            <label>{v}</label>
          </div>
        )
      })}
    </>
  )
}

export default App
