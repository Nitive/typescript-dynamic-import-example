async function main() {
  const { sum } = await import('./module')
  console.log(sum(1, 2))
}

main()
