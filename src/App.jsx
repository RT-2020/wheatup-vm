import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import About from "./pages/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
		]
	},
]);

const App = () => {
	return (
		<div id="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
