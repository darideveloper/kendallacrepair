## 1. Environment Configuration
- [x] 1.1 Create a `.env.example` file at the root of the project with: `CONTACT_FORM_ENDPOINT`, `CONTACT_FORM_USER`, `CONTACT_FORM_API_KEY`, and `SITE_URL`.

## 2. Component Integration
- [x] 2.1 Update `src/components/molecules/HeroForm.astro` frontmatter to retrieve API environment variables.
- [x] 2.2 Configure the `<form>` in `src/components/molecules/HeroForm.astro` with `action`, `method="POST"`, and `enctype="multipart/form-data"`.
- [x] 2.3 Add required hidden fields: `api_key`, `user`, `subject`, and `redirect`.
- [x] 2.4 Use `Astro.site` or `import.meta.env.SITE_URL` to ensure the `redirect` URL is absolute (e.g., `https://kendallacrepairs.com/thank-you`).
- [x] 2.5 **REMOVE** the `<script>` block entirely to allow native HTML submission.

## 3. Validation
- [x] 3.1 Verify that the form performs a full-page navigation to the backend service.
- [x] 3.2 Confirm successful redirection back to the `/thank-you` page.
- [x] 3.3 Ensure all user inputs (`name`, `phone`, `email`, `message`) are correctly captured in the `POST` payload.

