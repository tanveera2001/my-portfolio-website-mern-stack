import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import HomePage from "./pages/public/HomePage";
import AboutPage from "./pages/public/AboutPage";
import ProjectPage from "./pages/public/ProjectPage";
import ContactPage from "./pages/public/ContactPage";
import NotFoundPage from "./pages/public/NotFoundPage";

const App = () => {

	return (
		<div>
			<Routes>
					{/* Public Layout */}
				<Route element={<PublicLayout />}>
					<Route path='/' element={<HomePage />} />
					<Route path="/about" element={<AboutPage/>} />
					<Route path="/projects" element={<ProjectPage/>} />
					<Route path="/contact" element={<ContactPage/>} />
				</Route>
				
				{/* catch all routes */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
