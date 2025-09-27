import './style.css'
import { router } from './router'

export function homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <nav>

      </nav>

      <main>
        <h1>Converter</h1>
        <div>
          <input type="text" name="myInput" placeholder="Enter a number" size="30" required>
          <input type="text" name="myInput" placeholder="Enter a number" size="30" required>  
        </div>

        <div>
          <button type="button" name="abstract" id="btnAbs" class="">Absolute</button>
          <button type="button" name="abstract" id="btnCeiling" class="">Ceiling</button>
          <button type="button" name="abstract" id="btnFloor" class="">Floor</button>
          <button type="button" name="abstract" id="btnRound" class="">Round</button>
          <button type="button" name="abstract" id="btnTruncate" class="">Truncate</button>
          <button type="button" name="abstract" id="btnSign" class="">Sign</button>
        </div>
      </main>
    </div>
  </div>
`
}