import CarftItemCard from '../../componets/CarftItemCard/CarftItemCard';
import DescriptionCard from '../../layouts/Home/DescriptionCard/DescriptionCard';
import HeroSection from '../../layouts/Home/HeroSection/HeroSection'
import WorkOfArt from '../../layouts/Home/WorkOfArt/WorkOfArt';
import { useEffect, useState } from 'react';


const HomePage = () => {

    const [carftItems, setCarftItems] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/six-craft-items')
        .then(res => res.json())
        .then(data => setCarftItems(data))
    },[])

    console.log(carftItems)

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
            <section className='py-16'>
                <div className='container mx-auto'>
                    <div>

                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-10 px-4 md:px-16'>
                        {
                            carftItems.map(carftItem => <CarftItemCard carftItem={carftItem}  key={carftItem._id}/>)
                        }
                    </div>
                </div>

            </section>
        </>
    );
};

export default HomePage;