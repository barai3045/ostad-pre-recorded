# 18 [Routing] Link Component Prefetch and Replace Properties

## href 
The path or URL to navigate to.

`<Link href="/dashboard">Dashboard</Link>`

`href` can also accept an object, for example:

`<Link href={{pathname: '/about',query: { name: 'test' }, }}> About </Link>`

## replace
Defaults to false. When true, next/link will replace the current history state instead of adding a new URL into the browser’s history stack.

`<Link href="/dashboard" replace> Dashboard</Link>`


## prefetch 
-`true`: The full route will be prefetched for both static and dynamic routes.
-`false`: Prefetching will never happen both on entering the viewport and on hover.

`<Link href="/dashboard" prefetch={false}> Dashboard </Link>`