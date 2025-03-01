import { useEffect, useState } from 'react'
import s from '../components/StylesJSX/mainPage.module.css'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const MainPage = () => {
    const[isLoading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    const [species, setSpecies] = useState('')
    const [name, setName] = useState('')
    const options = [
        { value: 'alive', label: 'Alive' },
        { value: 'dead', label: 'Dead' },
        { value: 'unknown', label: 'Unknown' }
    ]
    const options3 = [
        { value: 'human', label: 'Human' },
        { value: 'alien', label: 'Alien' },
        { value: 'animal', label: 'Animal' },
        { value: 'poopybutthole', label: 'Poopybutthole' },
        { value: 'humanoid', label: 'Humanoid' },
        { value: 'unknown', label: 'Unknown' },
        { value: 'mythological creature', label: 'Mythological Creature' },
        { value: 'cronenberg', label: 'Cronenberg' },
        { value: 'gazorpian', label: 'Gazorpian' },
        { value: 'robot', label: 'Robot' },
    ]
    const options2 = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
    ]
    const onHandleNextPage = () => {
        setPage(page + 1)
    }
    const onHandlePrevPage = () => {
        setPage(page - 1)
    }
    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&status=${status}&gender=${gender}&species=${species}&name=${name}`)
            const dataJson = await data.json()
            setData(dataJson)
            setLoading(false)
        }
        getData()
    }, [page, status, gender, species, name])

    const onHandleChangeSelect = (e) => {
        setStatus(e.value)

    }
    const onHandleChangeSelect2 = (e) => {
        setGender(e.value)

    }
    const onHandleChangeSelect3 = (e) => {
        setSpecies(e.value)

    }

    

    if(isLoading){
        return <h1>Loading</h1>
      }

    console.log(data);

    return (
        <>
        <div className={s.RaM}>
            <img src="./src/assets/PngItem_438051 1.png" alt="" />
        </div>
            <main className={s.character}>
                <div className={s.status_wrapper}>
                    <div className={s.character_status}>
                        <input className={s.text} type="text" value={name} onChange={(b) => setName(b.target.value)} placeholder='Пойск по имени' />
                        <Select className={s.select} onChange={onHandleChangeSelect} placeholder='Статус' options={options} />
                        <Select className={s.select} onChange={onHandleChangeSelect2} placeholder='Гендер' options={options2} />
                        <Select className={s.select} onChange={onHandleChangeSelect3} placeholder='Раса' options={options3} />
                    </div>
                </div>

                <div className={s.characterr_wrapper}>
                    <section className={s.character_row}>
                        {data?.error ? <h1>Not Found</h1> : data?.results.map((item, index) =>
                            <Link to={`/character/${item.id}`} className={s.character_card} key={index}>
                                <img className={s.character_img} src={item.image} alt="" />
                                <div className={s.character_text}>
                                    <h1>{item.name}</h1>
                                    <h5>{item.species}</h5>
                                </div>
                            </Link>
                        )}
                    </section>

                </div>
                <div className={s.character_btn}>
                    <button className={s.page_button} onClick={onHandlePrevPage} disabled={!data?.info.prev}>Prev Page</button>
                    <button className={s.page_button} onClick={onHandleNextPage} disabled={!data?.info.next}>Next Page</button>
                </div>
            </main>
        </>
    )
}

export default MainPage