import('./utils')
  .then(({ sum }) => {
    console.log(sum(1, 2))
  })
  .catch(console.error)
