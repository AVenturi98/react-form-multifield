import style from './Card.module.css'
import imageDefault from '../../assets/31343C.svg'

function Card({ title = '', content = '', tags = '', published, image, callBack = () => { } }) {

    const elementTags = tags.map((tag, elmnTag, className) => {

        if (tag === 'html') className = 'htmlColor'
        if (tag === 'css') className = 'cssColor'
        if (tag === 'js') className = 'jsColor'
        if (tag === 'php') className = 'phpColor'


        return <p key={elmnTag} className={className}>{tag}</p>
    })




    return (
        <>
            {published &&
                <main className="container">
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img className={style.image} src={image || imageDefault} />
                        </div>
                        <div className={style.cardBody}>
                            <div className={style.titleCard}>{title}</div>
                            <div className={style.tagsCard}>{elementTags}</div>
                            <div className={style.descriptionCard}>{content}</div>
                            <div className={style.btnFlex}>
                                <button className={style.btn}>BUTTON</button>
                                <button onClick={callBack} className={style.btnDelete}>DELETE</button>
                            </div>
                        </div>
                    </div >
                </main >}
        </>
    )
}



export default Card
