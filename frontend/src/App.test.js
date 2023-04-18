import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Login from './Components/register/Login';
import Navigation from './Components/userNavbar/Navigation';

afterEach(() => {
    cleanup();
})

test('should render Login component', () =>{
    render(<Login />);
    const LoginElement = screen.getByTestId('login-1');
    expect(LoginElement).toBeInTheDocument();
    expect(LoginElement).toHaveTextContent('Welcome Back')
    // expect(LoginElement).toContainHTML('<input type="email" id="inputEmail1" placeholder="youremail@gmail.com" />')
    // expect(LoginElement).toContainHTML('<Button type="submit">Login</Button>')
})
describe("Navigation component", () => {
  test("should render Navigation component", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const navigationElement = screen.getByTestId("Navigation-1");
    expect(navigationElement).toBeInTheDocument();
  });

  test("should render Navbar component", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const navbarElement = screen.getByTestId("Navbar-1");
    expect(navbarElement).toBeInTheDocument();
  });
});
