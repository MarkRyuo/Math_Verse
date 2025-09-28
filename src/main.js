import './style.css'
import { router } from './router.js'
import { converterHandler, opeHandler } from './functions/converter.js'

export function homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <nav>

      </nav>

      <main>
        <h1>Converter</h1>
        <div>
          <input type="text" name="Number1" placeholder="Enter a number 1" size="30" required id="inptNumber1" class="">  
        </div>
        <div>
          <input type="text" name="Number2" placeholder="Enter a number 2" size="30" required id="inptNumber2" class="">  
        </div>
        
        <div>
          <button type="button" name="abstract" id="btnAbs" class="">Absolute</button>
          <button type="button" name="abstract" id="btnCeil" class="">Ceiling</button>
          <button type="button" name="abstract" id="btnFloor" class="">Floor</button>
          <button type="button" name="abstract" id="btnRound" class="">Round</button>
          <button type="button" name="abstract" id="btnTrunc" class="">Truncate</button>
          <button type="button" name="abstract" id="btnSign" class="">Sign</button>
          <button type="button" name="operations" id="operations" class"">x</button>
          <button type="button" name="devide" id="devide" class"">/</button>
          <button type="button" name="devide" id="devide" class"">Kupal</button>
          <button type="button" name="devide" id="devide" class"">tite</button>
          <button type="button" name="devide" id="devide" class"">kopals</button>
          <button type="button" name="devide" id="devide" class"">HEllo World</button>
          <div>
          
          </div>
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

const operations = document.getElementById("operations").addEventListener("click", () => {
  opeHandler("*")
})

const devide = document.getElementById("devide").addEventListener("click", () => {
  opeHandler("/")
})
}