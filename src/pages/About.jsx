import React from 'react'
import useData from '../assets/data/data'
import { tanda_tanya_seru } from '../assets/data/assets'
import { Avatar } from '@mui/material'
import CountUp from '../components/CountUp'

const About = () => {
    const { information } = useData()
    return (
        <section className='py-16' id='tentang-kita'>
            <div className="max-w-6xl mx-auto px-6">
                <div  className="px-6 py-8 shadow-lg shadow-indigo-500/70 max-w-6xl my-6 mx-auto flex max-lg:flex-col max-lg:gap-y-6 items-center bg-gradient-to-t from-indigo-500 to-indigo-400/75 rounded-lg font-poppins text-white border border-indigo-500">
                    <div className="flex max-xs:flex-col gap-y-6 items-center justify-around w-full lg:border-r lg:border-white max-lg:order-2">
                        {information.map((i, idx) => (
                            <div key={idx} className='text-center'>
                                <p className='text-sm md:text-lg font-light'>{i.label}</p>
                                {typeof i.value === "number" ? (
                                    <h1 className="text-md md:text-2xl font-bold font-montserrat">
                                        <CountUp to={i.value} duration={2} />
                                    </h1>
                                ) : i.value.includes("-") ? (
                                    <h1 className="text-md md:text-2xl font-bold font-montserrat">
                                        {/* pecah jadi dua CountUp */}
                                        <CountUp from="2000" to={parseInt(i.value.split("-")[0])} duration={1} />-
                                        <CountUp from="2003" to={parseInt(i.value.split("-")[1])} duration={1} />
                                    </h1>
                                ) : (
                                    <h1 className="text-md md:text-2xl font-bold font-montserrat">
                                        {i.value}
                                    </h1>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex max-xs:flex-col max-xs:text-center items-center gap-x-3 w-full">
                        <Avatar src={tanda_tanya_seru} sx={{ bgcolor: 'white', width: 64, height: 64 }} className='sm:ml-6'></Avatar>
                        <div className="text">
                            <h1 className='text-sm md:text-lg font-semibold font-poppins'>Ngaku-Ngaku!</h1>
                            <p className='text-xs'>Katanya sih pusing, tapi pusingnya rame-rame bareng 36 orang biar lebih gampang ketawa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About