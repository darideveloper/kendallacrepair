# Implement Native Contact Form Submission

## Description
Integrates the `HeroForm` component with the backend API endpoint (`https://services.darideveloper.com/contact-form/`) using native HTML form submission. This involves adding required hidden fields, reading configuration from environment variables, and removing the client-side JavaScript interceptor to allow the browser to handle the submission and redirection naturally.

## Motivation
The goal is to provide the most reliable and simple lead capture mechanism. By using a vanilla HTML form, we:
- Eliminate potential CORS issues and complex "opaque" response handling in JavaScript.
- Reduce client-side bundle size and execution overhead.
- Leverage the browser's built-in form handling and redirection capabilities.
- Ensure the primary business goal (lead capture) works even in environments with limited JavaScript support.
