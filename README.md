
# 20 [Routing] Progamatically Routing properties

# useRouter

The `useRouter` hook allows you to programmatically change routes inside Client Components.


- `router.push(href: string, { scroll: boolean })`: Perform a client-side navigation to the provided route. Adds a new entry into the browser’s history stack.

- `router.replace(href: string, { scroll: boolean })`: Perform a client-side navigation to the provided route without adding a new entry into the browser’s history stack.

- `router.refresh()`: Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).

- `router.prefetch(href: string)`: Prefetch the provided route for faster client-side transitions.

- `router.back()`: Navigate back to the previous route in the browser’s history stack.

- `router.forward()`: Navigate forwards to the next page in the browser’s history stack.