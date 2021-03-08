import React from 'react'

const list = [
  '1 1/2 cups milk',
  '1 cup pumpkin puree',
  '1 egg',
  '2 tablespoons vegetable oil',
  '2 tablespoons vinegar',
  '2 cups all-purpose flour',
  '3 tablespoons brown sugar',
]

const Ingredients = () => {
  const [isClosed, setIsClosed] = React.useState(false)
  const [collapseCount, setCollapseCount] = React.useState(0)

  const toggleDropdown = () => {
    console.log(isClosed)
    setIsClosed(!isClosed)
    setCollapseCount(collapseCount + 1)
  }

  return (
    <section>
    <div class="header">
      <h2>Ingredients</h2>
      <p>Amount of times collapsed: {collapseCount}</p>
      <button onClick={toggleDropdown}>Collapse</button>
    </div>
    <ul className={isClosed ? 'hidden' : ''}>
      {list.map(item => {
        return <li>{item}</li>
        })}
    </ul>
  </section>
  )
}

export default Ingredients;