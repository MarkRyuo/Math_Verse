import Navigo from "navigo";
import { homepage } from "./main";
import  algebraPage  from "./pages/algebra_page.js";


export const router = new Navigo('/') ;

router 
    .on("/",  () => homepage() )
    .on("/algebraPage", () => algebraPage() )
    .notFound(() => {
    document.querySelector("#app").innerHTML = `<h1>404 Page Not Found!</h1>`;
  });


document.addEventListener("DOMContentLoaded", () => {
  router.resolve();
});