# 22 Thinking in Next JS What about Client Component

## Server Component Nexting

- Server compenents can be nested within other Server Components
- Server Components can contain client Components, but these Client Components would be re hydrated on the  client side after the initial render.
- Server Components can also contain regular HTML and other content

## Client Component Nesting 

- Client Components can be nested within other Client Components
- Client Components can contain Server Components, but the server-rendered output of these components would be "hydred on the client site, meaning the JavaScripts code would take over and make them interactive.
