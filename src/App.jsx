import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import PaymentForm from "./components/PaymentForm";
import { SendMoney } from "./pages/SendMoney";
import Purchases from "./components/Purchases";
import 'tailwindcss/tailwind.css';


function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment" element={<PaymentForm/>} />

          <Route exact path="/purchases" element={<Purchases/>}/>          {/* <Route path="/send" element={<SendMoney />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
