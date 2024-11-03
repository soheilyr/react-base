import { BrowserRouter,Route,Routes as Rs } from "react-router-dom"
import Test from "@/pages/index"

const Routes = () => {
 return(
  <BrowserRouter>
  <Rs>
    <Route path="/" element={<Test />} />
  </Rs>
</BrowserRouter>
 )
}

export default Routes