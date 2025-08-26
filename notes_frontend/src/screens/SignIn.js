import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!values.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errs.email = "Enter a valid email";
    }
    if (!values.password) {
      errs.password = "Password is required";
    } else if (values.password.length < 6) {
      errs.password = "Minimum 6 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: hook up to API
    alert(`Signed in as ${values.email}`);
  };

  return (
    <div className="signin-page">
      <div className="signin-card" role="region" aria-label="Sign In">
        <header className="signin-header">
          <h1 className="signin-title">Sign In</h1>
          <p className="signin-subtitle">Welcome back! Please enter your details.</p>
        </header>

        <form className="signin-form" onSubmit={submit} noValidate>
          <div className={`form-field ${errors.email ? "has-error" : ""}`}>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={onChange}
              className="input"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="form-error">{errors.email}</span>
            )}
          </div>

          <div className={`form-field ${errors.password ? "has-error" : ""}`}>
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-password-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={values.password}
                onChange={onChange}
                className="input"
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                className="btn-ghost"
                aria-pressed={showPassword}
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span id="password-error" className="form-error">{errors.password}</span>
            )}
          </div>

          <div className="form-row">
            <label className="checkbox">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#forgot" className="link">Forgot Password?</a>
          </div>

          <button className="btn-primary" type="submit">Sign In</button>

          <div className="divider" role="separator" aria-label="Continue with other providers">
            <span className="divider-text">or continue with</span>
          </div>

          <div className="social-row">
            <button className="btn-social" type="button" aria-label="Continue with Google">
              <span className="social-dot google" />
              <span>Google</span>
            </button>
            <button className="btn-social" type="button" aria-label="Continue with Facebook">
              <span className="social-dot facebook" />
              <span>Facebook</span>
            </button>
          </div>

          <p className="signup-hint">
            Don’t have an account? <a href="#signup" className="link">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
