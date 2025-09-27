import Navigo from "navigo";
import { homepage } from "./main";


export const router = new Navigo('/') ;

router 
    .on("/",  () => homepage() )
    .notFound(() => {
    document.querySelector("#app").innerHTML = `<h1>404 Page Not Found!</h1>`;
  });


document.addEventListener("DOMContentLoaded", () => {
  router.resolve();
});