import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Episode from './Episode';

const RickyMorty = ({ ricky }) => {

    const [ismorty, setismorty] = useState([])

    useEffect(() => {
        axios.get(ricky)
            .then(res => setismorty(res.data))
    }, [])

    //console.log(ismorty)

    const longitudEpisode = ismorty.episode?.length

    const infoStatus = () => {
        if (ismorty.status === "Alive") {
            return "chartreuse"

        } else if (ismorty.status === "Dead") {
            return "red"
        } else {
            return "grey"
        }
    }


    return (
        <div className='CardConteiner'>
            <div className='CardConteiner__Card'>
                <div className='CardConteiner__img'>
                    <img src={ismorty.image} alt="" />
                </div>
                <div className='Datos'>
                    <section className='CardContainer__Space'>
                        <h4> {ismorty.name} </h4>
                    </section>
                    <section className='CardContainer__Space'>
                        <p>Race</p>
                        <h4>  {ismorty.species}  </h4>
                    </section>
                    <section className='CardContainer__Space'>
                        <p> Origin </p>
                        <h4> {ismorty.origin?.name}  </h4>
                    </section>
                    <section className='CardContainer__Space'>
                        <p>Episodes</p>
                        <h4> {longitudEpisode} </h4>
                    </section>
             
                <div className='Status'>
                    <div className='ConStatus' style={{ backgroundColor: infoStatus() }}></div><h4 className='StatusGlobal'>{ismorty.status}</h4>

                </div>
                </div>



                <div>
                    {
                        ismorty.episode?.map(morty => (
                            <Episode AndMorty={morty} key={morty} />
                        ))

                    }

                </div>

            </div>
        </div>

    );
};

export default RickyMorty;


