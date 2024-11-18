// Signup.test.js
import { render, screen } from '@testing-library/react';
import Signup from '../components/Signup.jsx';
test('calls API and handles success', async () => {
    axios.post.mockResolvedValue({ data: { idToken: 'fakeToken' } });
  
    render(<Signup />);
  
    fireEvent.change(screen.getByPlaceholderText('enter email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('enter password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('enter password'), { target: { value: 'password123' } });
  
    fireEvent.click(screen.getByText('Signup'));
  
    expect(axios.post).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        email: 'test@example.com',
        password: 'password123',
        returnSecureToken: true,
      }),
    );
  });
  
test('renders input fields for email, password, and confirm password', () => {
  render(<Signup />);

  const emailInput = screen.getByPlaceholderText(/enter email/i);
  const passwordInput = screen.getByPlaceholderText(/enter password/i);
  const confirmPasswordInput = screen.getByPlaceholderText(/enter password/i);

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
});

test('user can type in input fields', () => {
    render(<Signup />);

    const emailInput = screen.getByPlaceholderText(/enter email/i);
    const passwordInput = screen.getByPlaceholderText(/enter password/i);
    const confirmPasswordInput = screen.getByPlaceholderText(/enter password/i);
  
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });
  
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
    expect(confirmPasswordInput.value).toBe('password123');
  });
  