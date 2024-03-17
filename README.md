# 25 Directory File Naming Conventions

## page.js
- A page is UI that is **unique** to a route.
- Special file that is used to **define a page** in your application
- The page.js must **export a component** .
- The component **name must match** the file name.
- The component can be **any kind of React component**, including functional components, class components, and custom hooks.
- The component **can access** the props objects, which contains animation about routem such as the route path, the route parameters, and the route query parameters.
- The componets can be rendered **server-side or client-side**.


## layout.js
- A layout is UI that is **shared** between routes.
- It can be used to render **common components** or functionality accross **multiple pages** in your application
- For example, you could use a layout to render a **header and footer on every page** in your application


