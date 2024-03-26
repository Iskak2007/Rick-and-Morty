import s from '../components/StylesJSX/rick02.module.css'
function Rick(){
    return(
        <>
        <div className={s.big_block}>
            <div className={s.mid_block}>
            <img className={s.rick_picture} src='./src/assets/_image_.png'/>
            <h1>Rick Sanchez</h1>
            </div>
        </div>
        <div className={s.tablica}>
            <div className={s.pillars}>
                <div className={s.infa}>
                    <h2>Informations</h2>
                    <div className={s.block}>
                        <h1>Gender</h1>
                        <h3>Male</h3>
                    </div>
                    <div className={s.block}>
                        <h1>Status</h1>
                        <h3>Alive</h3>
                    </div>
                    <div className={s.block}>
                        <h1>Specie</h1>
                        <h3>Human</h3>
                    </div>
                    <div className={s.block}>
                        <h1>Origin</h1>
                        <h3>Earth (C-137)</h3>
                    </div>
                    <div className={s.block}>
                        <h1>Type</h1>
                        <h3>Unknown</h3>
                    </div>
                    <div className={s.block}>
                        <h1>Location</h1>
                        <h3>Earth (Replacement Dimension)</h3>
                    </div>
                </div>
                <div className={s.infa}>
                    <h2>Episodes</h2>
                    <div className={s.block}>
                        <h1>S01E01</h1>
                        <h3>Pilot</h3>
                        <h3>December 2, 2013</h3>
                    </div>
                    <div className={s.block}>
                        <h1>S01E02</h1>
                        <h3>Lawnmower Dog</h3>
                        <h3>December 9, 2013</h3>
                    </div>
                    <div className={s.block}>
                        <h1>S01E03</h1>
                        <h3>Anatomy Park</h3>
                        <h3>December 16, 2013</h3>
                    </div>
                    <div className={s.block}>
                        <h1>S01E04</h1>
                        <h3>M. Night Shaym-Aliens!</h3>
                        <h3>January 13, 2014</h3>
                    </div>
                </div>
            </div>
        </div>
        <h1 className={s.heart}>Make with ❤️ for the MobProgramming team</h1>
        </>
    )
}
export default Rick