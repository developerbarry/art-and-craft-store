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
            
        </>
    );
};

export default HomePage;