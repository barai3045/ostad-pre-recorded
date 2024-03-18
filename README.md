# 30 [Data Fetching] Data Caching and Revalidating

const res1 = await fetch('https://dummyjson.com/products, {cache: 'force-cache'})
const res2 = await fetch('https://dummyjson.com/products, {cache: 'no-store'})
const res4 = await fetch('https://dummyjson.com/products, {next:{revalidate:3600}})
