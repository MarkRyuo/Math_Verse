import './style.css'
import { router } from './router'

export function homepage() {
  document.querySelector('#app').innerHTML = `
  <div>
    <h1>Homepage</h1>
  </div>
`
}