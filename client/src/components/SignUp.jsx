import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SignUp(props) {

    // states for the form
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    //  Handle the form submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            confirmPassword
        }
        fetch('http://localhost:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                } else {
                    props.setUser(true);
                    navigate('/chat');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <main class="form-signin w-100 m-auto">
            <form>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="72"
                    height="57"
                    fill="currentColor"
                    class="bi bi-chat-dots mb-4"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                    />
                    <path
                        d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"
                    />
                </svg>
                <h1 class="h3 mb-3 fw-normal">Please SignUp</h1>
                <div class="form-floating mb-1">
                    <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-1">
                    <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating mb-1">
                    <input
                        type="password"
                        class="form-control"
                        name="confirmPassword"
                        id="floatingPassword"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Confirm Password</label>
                </div>
                <button
                    class="btn btn-primary w-100 py-2 my-3"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Sign up
                </button>
                <a class="btn btn-light w-100 py-2" href="/login">
                    Already have account? Login
                </a>
            </form>
        </main>
    );
}

export default SignUp;
