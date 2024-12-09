import { useState, useEffect } from 'react'
import initPosts from '../../posts'
import Card from '../card/Card'
import Tags from '../tags/Tags'

const initialFormData = {
    title: '',
    image: undefined,
    content: '',
    tags: [],
    category: '',
    published: true
}

export default function mainSection() {

    const [posts, setPostsFilm] = useState(initPosts)

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(e) {

        // console.log(e.target.name, e.target.value)
        // console.log(e.target.type, e.target.checked)

        const key = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        const newFormData = {
            ...formData,
            [key]: value
        }
        // console.log(key)

        setFormData(newFormData)

        // console.log(newFormData)
    }

    useEffect(() => {

        if (!formData.published) {
            alert(`Hai reso il tuo post PRIVATO`)
        }
    }, [formData.published])

    function addFilm(event) {
        event.preventDefault()

        // if (formData.title === '' || formData.content === '') return alert('Devi compilare tutti i campi')

        if (posts.published === false) return setPostsFilm(posts.filter(el => el !== posts))

        const newPost = {
            id: Date.now(),
            ...formData,
        }

        setPostsFilm([...posts, newPost])
        setFormData(initialFormData)

        console.log('aggiunto')
        console.log(formData)

    }

    function deletePost(post) {

        setPostsFilm(posts.filter(el => el !== post))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className='col-100'>

                        <h3>Inserisci un nuovo film</h3>

                        <form onSubmit={addFilm} className='formData' action="">

                            <div className='formData'>
                                <label htmlFor="title" className='formIT' >Titolo</label>
                                <input id='title' name='title' onChange={handleFormData} value={formData.title} type="text" placeholder='Inserisci il titolo' className='formControll' />
                            </div>
                            <div className='formData'>
                                <label htmlFor="content" className='formIT'>Contenuto</label>
                                <textarea id='content' name='content' onChange={handleFormData} value={formData.content} type="text" placeholder='Inserisci un contenuto..' className='formControll text_area' />
                            </div>
                            <div className='formData'>
                                <label htmlFor="img"><strong>Inserisci un immagine</strong></label>
                                <input type="img" id='img' placeholder='http://' className='formControll' />
                            </div>
                            <div className='formData'>
                                <label htmlFor="category" className='formIT'>Categoria</label>
                                <select name="category" id="category" className='formControll selction' onChange={handleFormData}>
                                    <option value="">Scegli la categoria</option>
                                    <option value="html">html</option>
                                    <option value="js">js</option>
                                    <option value="css">css</option>
                                </select>
                            </div>
                            <div className='formData'>
                                <label htmlFor="tags" className='formIT'>Tags</label>
                                <input type="text" id='tags' onChange={handleFormData} placeholder='Digita i tags..' className='formControll' />
                            </div>
                            <div>
                                <p><strong>{formData.published && 'Deseleziona per rendere privato' || 'Seleziona per rendere pubblico'} il nuovo post</strong></p><br />
                                <input type="checkbox" id='avaible' name='published' onChange={handleFormData} checked={formData.published} />
                                <label htmlFor="avaible" className='formIT formDataCheck' >{formData.published && 'Pubblico' || 'Privato'}</label>
                            </div>
                            <br />
                            <input type="submit" value="Aggiungi" id='button_form' />
                        </form>



                    </div>
                    {posts.map((post) =>
                        <div key={post.id} className="col-6">
                            <Card callBack={() => deletePost(post)} title={post.title} content={post.content} tags={post.tags} published={post.published !== false} image={post.image} />
                        </div>)}
                </div >
                <div className="container">
                    <ul className="row">
                        <Tags />
                    </ul>
                </div>
            </div >
        </>

    )
}