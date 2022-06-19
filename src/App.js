import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "./actions";

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(actions.increment())}>Increment</button>
			<button onClick={() => dispatch(actions.decrement())}>Decrement</button>
			<h1>Is Logged: {isLogged}</h1>
			<button onClick={() => dispatch(actions.signIn())}>Sign In</button>
			<button onClick={() => dispatch(actions.signOut())}>Sign Out</button>
		</div>
	);
}

export default App;
