import './style.css'
import { router } from './router.js'
import { converterHandler } from './functions/converter.js'

export function homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <nav>

      </nav>

      <main>
        <h1>Converter</h1>
        <div>
          <input type="text" name="Number1" placeholder="Enter a number 1" size="30" required id="inptNumber" class="">  
        </div>
        <div>
          <input type="text" name="Number2" placeholder="Enter a number 2" size="30" required id="inptNumber" class="">  
        </div>
        
        <div>
          <button type="button" name="abstract" id="btnAbs" class="">Absolute</button>
          <button type="button" name="abstract" id="btnCeil" class="">Ceiling</button>
          <button type="button" name="abstract" id="btnFloor" class="">Floor</button>
          <button type="button" name="abstract" id="btnRound" class="">Round</button>
          <button type="button" name="abstract" id="btnTrunc" class="">Truncate</button>
          <button type="button" name="abstract" id="btnSign" class="">Sign</button>
          <button type="button" name="operations" id="${onclick(*)}" class"">x</button>
          <button type="button" name="operations" id="operations" class"">/</button>
        </div>
      </main>
    </div>
  </div>
`

const btnAds = document.getElementById("btnAbs").addEventListener("click", () => {
  converterHandler("Absolute")
})

const btnCeil = document.getElementById("btnCeil").addEventListener("click", () =>{
  converterHandler("Ceil")
})
const btnFloor = document.getElementById("btnFloor").addEventListener("click", () =>{
  converterHandler("Floor")
})
const btnRound = document.getElementById("btnRound").addEventListener("click", () =>{
  converterHandler("Round")
})
const btnTrunc = document.getElementById("btnTrunc").addEventListener("click", () =>{
  converterHandler("Trunc")
})
}