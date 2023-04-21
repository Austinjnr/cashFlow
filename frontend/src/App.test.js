import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import Authentication from './Components/register/Authentication';
import App from './App';

afterEach(() => {
    cleanup();
})

test('should render authentication component', () =>{
    render(<Authentication />);
    const LoginElement = screen.getByTestId('login-1');
    // expect(LoginElement).toBeInTheDocument();
    // expect(LoginElement).toContainHTML('<input type="email" id="inputEmail1" placeholder="youremail@gmail.com" />')
    expect(LoginElement).toContainHTML('</div>')
})
describe("Navigation component", () => {
  test("should render App component", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const navigationElement = screen.getByTestId("Navigation-1");
    expect(navigationElement).toBeInTheDocument();
  });

});
