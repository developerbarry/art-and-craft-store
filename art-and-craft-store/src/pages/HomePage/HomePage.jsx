import CarftItemCard from '../../componets/CarftItemCard/CarftItemCard';
import DescriptionCard from '../../layouts/Home/DescriptionCard/DescriptionCard';
import HeroSection from '../../layouts/Home/HeroSection/HeroSection'
import WorkOfArt from '../../layouts/Home/WorkOfArt/WorkOfArt';


const HomePage = () => {
    return (
        <>
            <section>
                <HeroSection />
            </section>
            <section className='py-16'>
                <WorkOfArt/>
            </section>
            <section>
                <DescriptionCard />
            </section>
            <section>
                <CarftItemCard />
            </section>
        </>
    );
};

export default HomePage;