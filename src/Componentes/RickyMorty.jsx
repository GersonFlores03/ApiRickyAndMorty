import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Episode from './Episode';

const RickyMorty = ({ricky}) => {
   
    const [ismorty , setismorty] = useState([])

    useEffect(()=>{
        axios.get(ricky)
        .then(res=>setismorty(res.data))
    },[])

    //console.log(ismorty)
    
    const longitudEpisode = ismorty.episode?.length
 
    const infoStatus =()=>{
           if(ismorty.status==="Alive"){
              return "chartreuse"

           } else if(ismorty.status==="Dead"){
                return "red"
           }else{
            return "grey"
           }
    }


    return (
        <div className='CardConteiner'> 
        <div className='Card'>
            <div className='imagen'> 
            <img src={ismorty.image} alt="" />
            </div>
            <div className='Caracteristicas'>
            <div className='Datos'>
            <section className='SpaceName'>     
            <h4> {ismorty.name} </h4>
            </section> 
            <section className='Space'>  
            <p>Race</p>
            <h4>  {ismorty.species}  </h4>
            </section>
            <section className='Space'>  
            <p> Origin </p>
            <h4> {ismorty.origin?.name}  </h4>
            </section>
            <section className='Space'>
            <p>Episodes</p>
            <h4> {longitudEpisode} </h4>
            </section>
            </div>
            <div className='Status'> 
            <div className='ConStatus' style={{backgroundColor: infoStatus()}}></div><h4>{ ismorty.status}</h4>   
             
            </div>
             


            <div>
                 {
                  ismorty.episode?.map(morty=>(
                     <Episode AndMorty ={morty} key= {morty}   />
                  ))

                 }

            </div>
            </div>
            
        </div>
        </div>
           
    );
};

export default RickyMorty;


