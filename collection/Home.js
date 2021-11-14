import Landing from '../components/Home/Landing';
import Services from '../components/Home/Services';
import NewsSection from '../components/Home/NewsSection';
import Footer from '../components/Home/Footer';
import LandingBody from '../components/Home/LandingBody';
import Heightlight from '../components/Home/Heighlights';

function Home() {
	return (
		<div>
			<Landing />
			<LandingBody />
			<Services />
			<Heightlight />
			<NewsSection />
			<Footer />
		</div>
	);
}

export default Home;
