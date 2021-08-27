// IMPORT MODULES

// IMPORT COMPONENTS
import "../../components/TextScramble";
import TextScramble from "../../components/TextScramble";

// IMPORT STYLES
import "./styles.css";

function Home() {
	return (
		<div className="main" id="home-main">			
			<h1>floresse</h1>
			
			<h3><TextScramble/> web design</h3>
		</div>
	);
}

export default Home;