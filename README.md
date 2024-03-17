# 26 Directory File Naming Conventions

## not-found.js
- The not-found file is used to render UI when the **notFound function** is thrown within a route segment.
- Along with serving a custom UI, Next.js will also return a 404 HTTP status code.
- The **root app/not-found.js** file handles any unmatched URLs for your whole application.
- not-found.js components **do not accept any props**.




## error.js

- An error file defines an **error UI Boundary** for a route segment
- It is useful for **catching unexpected errors** that occurs in Server Components and Client Components and displaying  a fallback UI
- error.js boundaries must be **Client Components**.
- In Production builds, errors forwarded from Server Components will be stripped of specific error details **to avoid leaking** sensitive information.