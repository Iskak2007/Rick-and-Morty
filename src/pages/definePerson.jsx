import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import s from '../components/StylesJSX/define.module.css'

function DefinePerson(){
    const params = useParams()
    const [data, setData] = useState()
    useEffect(()=>{ 
        const getData = async() =>{
            const data = await fetch(`https://rickandmortyapi.com/api/character/${params.id} `)
            const dataJSON = await data.json()
            setData(dataJSON)
        }
        getData()
    }, [params.id])
    console.log(data);
    return(
        <>
        <div className={s.giga_block}>
            <div className={s.middle_block}>
            <img className={s.roundIMG} src={data?.image}/>
            <h1>{data?.name}</h1>
            </div>
        </div>
        <div className={s.tablica}>
            <div className={s.pillars}>
            <div className={s.infa}>
                <h2>Informations</h2>
                <div className={s.block}>
                        <h1>Gender</h1>
                        <h3>{data?.gender} </h3>
                    </div>
                    <div className={s.block}>
                        <h1>Status</h1>
                        <h3>{data?.status} </h3>
                    </div>
                    <div className={s.block}>
                        <h1>Specie</h1>
                        <h3>{data?.species} </h3>
                    </div>
                    {/* <div className={s.block}>
                        <h1>Origin</h1>
                        <h3> {data?.origin} </h3>
                    </div> */}
                    <div className={s.block}>
                        <h1>Type</h1>
                        <h3>{data?.type} </h3>
                    </div>
                    {/* <div className={s.block}>
                        <h1>Location</h1>
                        <h3>{data?.location} </h3>
                    </div> */}
            </div>
            <div className={s.infa}>
                <div className={s.block}>
                    {/* <h1>Episodes</h1>
                    <h3>{data?.episode} </h3> */}
                </div>
            </div>
            </div>
        </div>
        </>
    );
   
}
export default DefinePerson