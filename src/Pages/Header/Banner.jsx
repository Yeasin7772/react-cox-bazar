
import Sajek from '../../assets/Sajek.png'
import Sreemongol from '../../assets/Sreemongol.png'
import sundorbon from '../../assets/sundorbon.png'

const Banner = () => {
    return (
        <div className='h-[900px]'>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/F0QJJnX/Rectangle-1.png)' }}>
                <div>
                    
                </div>
                <div className="hero-overlay bg-opacity-40"></div>

                <div className="flex justify-between ">
                    <div className="text-white">
                        <h1 className="mb-5 text-5xl font-bold">Cox's bazar</h1>
                        <p className="mb-5"><small>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh.
                            It is famous mostly for its long natural sandy beach, and it ...</small></p>
                        <button className="btn bg-[#F9A51A] text-white">Booking</button>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div className="card   ">
                            <figure className="px-10 pt-10">
                                <img src={Sajek} alt="Shoes" className="rounded-xl" />
                            </figure>

                        </div>
                        <div className="card  ">
                            <figure className="px-10 pt-10">
                                <img src={Sreemongol} alt="Shoes" className="rounded-xl" />
                            </figure>

                        </div>
                        <div className="card  ">
                            <figure className="px-10 pt-10">
                                <img src={sundorbon} alt="Shoes" className="rounded-xl" />
                            </figure>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;