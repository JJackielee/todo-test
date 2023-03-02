import React, { useState } from 'react';

function Form(prop) {

    const [input, setInput] = useState('');
    let [eagerness, setEagerness] = useState('');

    const handleChange = (e) => {
    setInput(e.target.value);
    };
    const eagernessLevel = ['high', 'medium', 'low']

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!input){
            return alert("must input something");
        }
        
        if (!eagerness) {
            eagerness = 'low';
        }

        prop.onSubmit({
            id : Math.random(Math.floor() * 1000),
            text: input,
            eagerness: eagerness
        })

        setInput('');
        setEagerness('');
        console.log(prop.todo)
    }


    return (
        <div>
            <form className="bucket-form" onSubmit = {handleSubmit} >
                <input
                    type="text"
                    placeholder="Add to your bucket list"
                    value={input}
                    name="text"
                    className="bucket-input"
                    onChange={handleChange}
                ></input>


                <div className="dropdown">
                    <button className={`dropbtn ${eagerness}`}>
                        {eagerness || 'Priority'}
                    </button>
                    <div className="dropdown-content">
                        <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
                        <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
                        <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
                    </div>
                </div>

                <button className="bucket-button">Add bucket list item</button>
            </form>
        </div>
    );

}

export default Form;