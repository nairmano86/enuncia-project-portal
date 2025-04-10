import { Link } from 'react-router-dom';
import Navbar from './pages/Navbar'; // or './components/Navbar' depending on your folder structure

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Enuncia Project Portal 🚀</h1>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <Link to="/" className="mr-4">Home</Link>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/register" className="mr-4">Register</Link>
      <Link to="/employee/dashboard" className="mr-4">Employee</Link>
      <Link to="/freelancer/dashboard">Freelancer</Link>
    </nav>
  );
}
export default Navbar;
