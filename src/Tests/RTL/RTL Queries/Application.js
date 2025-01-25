import React from 'react'
import Skills from './skills.js'

function Application() {
    const listArr = ['joen','mark','Asif','Asif']
    return (
        <>
    <span title='title'>Title</span>
        <h1>Application form</h1> 
        <h3>Application starting form</h3>
        <div data-testid='custom-element'>Custom element</div>
        <form>
            <label htmlFor='bio'>Bio</label>
            <textarea id='bio' name='bio'/>

            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='name' name='name'  id='name' value='Asif' onChange={()=>{}}/><br />
            <label>
                Name
            <select id='name'>
                <option value='bikaner'>Bikaner</option>
                <option value='jaipur'>Jaipur</option>
                <option value='dehli'>Dehli</option>
            </select>
            </label>
            <br />
            <label>
                <input type='checkbox' id='terms' />
                agreed on the conddition
            </label>
            <br />
            <button>Submit</button>
            <Skills list={listArr}/>
        </form>
        </>
    )
}

export default Application
