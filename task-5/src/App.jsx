import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

const Home = () => <h2 className="text-2xl">Home Page</h2>;
const About = () => <h2 className="text-2xl">About Page</h2>;
const Contact = () => <h2 className="text-2xl">Contact Page</h2>;

const UserProfile = () => {
  const { username } = useParams();
  return <h2 className="text-2xl">User Profile: {username}</h2>;
};

const NotFound = () => (
  <h2 className="text-2xl text-red-500">404 - Page Not Found</h2>
);

const NavigateButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Go Home
    </button>
  );
};

const App = () => {
  return (
    <Router>
      <div className="p-4">
        <nav className="space-x-4 mb-4">
          <Link to="/" className="text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-blue-500">
            About
          </Link>
          <Link to="/contact" className="text-blue-500">
            Contact
          </Link>
          <Link to="/user/johndoe" className="text-blue-500">
            John's Profile
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <NavigateButton />
      </div>
    </Router>
  );
};

export default App;
