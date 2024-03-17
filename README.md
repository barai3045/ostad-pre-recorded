# 22 Thinking in Next JS What about Client Component


# Why ? 
# Client Components

To ass **client-side interactivity** to your application line onClick, onChange events, useState, useRef, useEffect hooks, transition, animations and other's.

To **use client" directive must be defined at the top of a file before imports.

In Next.js client-component **pre-rendered** on the server and **hydrated** on the client.


| Traditional React applications | Pre-rendering on the server and hydrated on the client |
| --------------  | ------------ |

| newline \ newline2  | new  |


## Server Component Nexting

- Server compenents can be nested within other Server Components
- Server Components can contain client Components, but these Client Components would be re hydrated on the  client side after the initial render.
- Server Components can also contain regular HTML and other content

## Client Component Nesting 

- Client Components can be nested within other Client Components
- Client Components can contain Server Components, but the server-rendered output of these components would be "hydred on the client site, meaning the JavaScripts code would take over and make them interactive.
