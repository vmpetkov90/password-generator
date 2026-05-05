import { useEffect, useRef, useState } from "react"
import { CheckboxOption } from "./components/CheckboxOption"

/*
  Password Generator App
  --------------------------------------------------
  - Generates a random password based on:
      • Uppercase letters
      • Lowercase letters
      • Numbers
      • Symbols
      • Adjustable length
  - Displays password strength visually
  - Allows copying to clipboard
*/

function App() {

  // Password + strength
  const [password, setPassword] = useState('')
  const [strength, setStrength] = useState(0)

  // Character type toggles
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  // Password length
  const [length, setLength] = useState(10)

  // Reference for copy-to-clipboard
  const passwordRef = useRef(null)

  /*
    Generate a new password based on selected options.
    Also calculates strength based on how many character
    groups are enabled.
  */
  function generate() {
    let chars = ''
    let score = 0

    if (uppercase) {
      chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      score++
    }
    if (lowercase) {
      chars += 'abcdefghijklmnopqrstuvwxyz'
      score++
    }
    if (numbers) {
      chars += '1234567890'
      score++
    }
    if (symbols) {
      chars += '-=+?!_*&^%$£~#@'
      score++
    }

    // Build password
    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * chars.length)
      newPassword += chars.charAt(index)
    }

    setPassword(newPassword)
    setStrength(score)
  }

  // Generate on button click
  function randomize(e) {
    e.preventDefault()
    generate()
  }

  // Copy password to clipboard
  function copy(e) {
    e.preventDefault()
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }

  // Render strength bars
  function displayStrength() {
    return (
      <>
        {/* Empty bars */}
        {Array.from({ length: 4 - strength }).map((_, i) => (
          <span
            key={'empty-' + i}
            className="h-7 w-2.5 mx-1 inline-block border-2 border-gray-500"
          ></span>
        ))}

        {/* Filled bars */}
        {Array.from({ length: strength }).map((_, i) => (
          <span
            key={'full-' + i}
            className="h-7 w-2.5 mx-1 inline-block border-2 border-green-300 bg-green-300"
          ></span>
        ))}
      </>
    )
  }

  /*
    Auto-generate a new password whenever:
    - length changes
    - any character type toggle changes
  */
  useEffect(() => {
    generate()
  }, [length, uppercase, lowercase, numbers, symbols])

  return (
    <div className="bg-gray-900 h-screen flex justify-center items-center p-10">
      <form className="w-full max-w-lg text-white">

        {/* Password display + copy button */}
        <div className="bg-gray-800 relative">
          <input
            className="w-full px-8 py-6 text-3xl font-medium outline-0"
            type="text"
            value={password}
            readOnly
            placeholder="P4$5W0rD!"
            ref={passwordRef}
          />
          <button
            className="absolute h-full w-20 right-0 text-green-300 text-2xl"
            onClick={copy}
          >
            <i className="cursor-pointer hover:text-white fa-regular fa-copy"></i>
          </button>
        </div>

        {/* Options panel */}
        <div className="bg-gray-800 mt-5 p-8 text-xl">

          {/* Length slider */}
          <div>
            <div className="flex justify-between items-baseline">
              <p>Character length</p>
              <span className="text-green-300 text-2xl">{length}</span>
            </div>

            <input
              className="w-full h-2 my-7 bg-gray-900 rounded-none appearance-none
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:h-5
              [&::-webkit-slider-thumb]:w-5
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-green-300
              [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-green-300
              [&::-webkit-slider-thumb:hover]:bg-gray-900
              [&::-moz-range-thumb]:h-5
              [&::-moz-range-thumb]:w-5
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-green-300
              [&::-moz-range-thumb:hover]:bg-gray-900"
              type="range"
              id="length"
              min={10}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Checkboxes using CheckboxOption */}
          <CheckboxOption
            id="uppercase"
            label="Include uppercase letters"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />

          <CheckboxOption
            id="lowercase"
            label="Include lowercase letters"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />

          <CheckboxOption
            id="numbers"
            label="Include numbers"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />

          <CheckboxOption
            id="symbols"
            label="Include symbols"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />

          {/* Strength indicator */}
          <div className="flex justify-between bg-gray-900 px-6 py-4 mt-10">
            <p className="uppercase text-gray-500">Strength</p>
            <div>{displayStrength()}</div>
          </div>

          {/* Generate button */}
          <button
            className="border-2 w-full p-3 uppercase mt-7 border-green-300 bg-green-300 text-gray-800 font-medium cursor-pointer hover:bg-gray-800 hover:text-green-300"
            onClick={randomize}
          >
            Randomize
          </button>

        </div>
      </form>
    </div>
  )
}

export default App
