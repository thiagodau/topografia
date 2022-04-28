import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Form } from "./components/Form";
import { Report } from "./components/Report";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  )
}