import './style.css'
import { router } from './router'

export function homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <div>
      <nav>

      </nav>

      <main>
        <div>
          <input type="text" name="myInput" placeholder="Enter a number" size="30" required>
          <input type="text" name="myInput" placeholder="Enter a number" size="30" required>  
        </div>

        <div>
          <button type="button" name="abstract" id="" class="">Abs</button>
          <button type="button" name="abstract" id="" class="">Abs</button>
          <button type="button" name="abstract" id="" class="">Abs</button>
          <button type="button" name="abstract" id="" class="">Abs</button>
          <button type="button" name="abstract" id="" class="">Abs</button>
          <button type="button" name="abstract" id="" class="">Abs</button>
        </div>
      </main>
    </div>
  </div>
`
}