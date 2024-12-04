import { useState, useEffect } from 'react'
import initPosts from '../../posts'
import Card from '../card/Card'
import Tags from '../tags/Tags'

const initialFormData = {
    title: '',
    image: undefined,
    content: '',
    tags: [{
        'Horror': false,
        'Fantasy': false,
        'Thriller': false,
        'Sci-fi': false,
        'Animazione': false,
        'Mistero': false,
        'True Story': false,
        'Crime': false,
        'Commedia': false,
        'Documentario': false
    }],
    published: true
}

export default function mainSection() {

    const [posts, setPostsFilm] = useState(initPosts)

    const [formData, setFormData] = useState(initialFormData)

    function handleFomrData(e) {

        // console.log(e.target.name, e.target.value)
        console.log(e.target.type, e.target.checked)

        const key = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        const newFormData = {
            ...formData,
            [key]: value
        }
        console.log(key)

        setFormData(newFormData)

        // console.log(newFormData)
    }

    // function tagFilter(e) {
    //     console.log(e.target.type, e.target.checked)

    //     const key = e.target.name
    //     const value = e.target.value

    //     const tagFiltered = {
    //         [key]: value
    //     }

    //     if (tagFiltered === true) return

    //     setFormData(tagFiltered)
    // }

    useEffect(() => {
        console.log('Ho usato useEffect')
    }, [formData.tags.map((tag) => tag)])

    function addFilm(event) {
        event.preventDefault()

        if (formData.title === '' || formData.content === '') return alert('Devi compilare tutti i campi')

        const newPost = {
            id: Date.now(),
            ...formData
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
                                <input id='title' name='title' onChange={handleFomrData} value={formData.title} type="text" placeholder='Inserisci il titolo' className='formControll' />
                            </div>
                            <div className='formData'>
                                <label htmlFor="content" className='formIT'>Contenuto</label>
                                <input id='content' name='content' onChange={handleFomrData} value={formData.content} type="text" placeholder='Inserisci un contenuto..' className='formControll' />
                            </div>
                            <ul>
                                {/* {formData.tags.map((post) =>
                                    <li>
                                        <input onChange={handleFomrData} checked={formData.tags} name='tags' id="tag" type="checkbox" />
                                        <label htmlFor="tag" className='formIT formDataCheck' >{post}</label>
                                    </li>
                                )} */}
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Horror' id="horror" type="checkbox" />
                                    <label htmlFor="horror" className='formIT formDataCheck'>Horror</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Fantasy' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Fantasy</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Thriller' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Thriller</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Sci-fi' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Sci-fi</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Animazione' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Animazione</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Mistero' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Mistero</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='True Story' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >True Story</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Crime' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Crime</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Commedia' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Commedia</label>
                                </li>
                                <li>
                                    <input onChange={handleFomrData} checked={formData.tags} name='Documentario' id="tag" type="checkbox" />
                                    <label htmlFor="tag" className='formIT formDataCheck' >Documentario</label>
                                </li>
                            </ul>
                            <div>
                                <input onChange={handleFomrData} checked={formData.published} name='published' id="avaible" type="checkbox" />
                                <label htmlFor="avaible" className='formIT formDataCheck' >Disponilità</label>
                            </div>
                            <input type="submit" value="Aggiungi" id='button_form' />
                        </form>



                    </div>
                    {posts.map((post) =>
                        <div key={post.id} className="col-6">
                            <Card callBack={() => deletePost(post)} title={post.title} content={post.content} tags={post.tags} published={post.published} image={post.image} />
                        </div>)}
                </div>
                <div className="container">
                    <ul className="row">
                        <Tags />
                    </ul>
                </div>
            </div>
        </>

    )
}