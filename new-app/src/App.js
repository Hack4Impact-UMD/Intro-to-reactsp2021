import logo from './logo.svg';
import './App.css';

const profile = {
	name: 'Aslan',
	characteristic: 'Lion'
}

// say we have a list of Smash Bros characters...
const characters = [
	{name: 'Zelda', tier: 'C'},
	{name: 'Fox', tier: 'S'},
	{name: 'Jigglypuff', tier: 'E'}
]

// we turn each object into a JSX element...
const characterElements = characters.map(characterObject => {
	// return some JSX, just like we would for a component
	return (
		<section>
			<h1>{characterObject.name}</h1>
			<p>{characterObject.tier}</p>
		</section>
	)
})

// and we display each of these characters as a list on our page
// just slap in the array of JSX we just created as a variable
const SmashCharacterTiers = () => (
	{characterElements}
)

const SmashCharacterTiersCleaner = (props) => (
	characters.map(characterObject => (
		<section>
			<h1>{characterObject.name}</h1>
			<p>{characterObject.tier}</p>
		</section>
	)) // <-- notice we needed two close parenthesis and a curly brace!
)


const Profile = (props) => (
	<div>
		<h1>{props.name}</h1>
		<p>{props.characteristic}</p>
	</div>
)
// Now, we want to tell our Profile component these variables
const App = () => (
  <section>
    <Profile name= {profile.name} characteristic={profile.characteristic} />,
    <Profile name="Harry Potter" characteristic="Wizard" />,
    <SmashCharacterTiersCleaner/>
  </section>
)

export default App;
