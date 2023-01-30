import React from 'react'

const Contacts = () => {
    const [formData, setFormData] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            message:"",
            rating:""
        }
    )

    const handleChange = (event) => {
        console.log(event)
        const {name, value} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

  return (
    <div className='contact-container'>
        <div className='contact-form-and-title'>
            <div>
                <h2>Now that you know me, <span> let's talk!</span></h2>
                <p>Phone, e-mail, message, take your pick.</p>
            </div>
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='First Name'
                        onChange={handleChange}
                        name='firstName'
                        value={formData.firstName}
                    />
                    <input
                        type='text'
                        placeholder='Last Name'
                        onChange={handleChange}
                        name='lastName'
                        value={formData.lastName}
                    />
                    <input
                        type='email'
                        placeholder='Primary Email'
                        onChange={handleChange}
                        name='email'
                        value={formData.email}
                    />
                    <select
                        id='rating'
                        value={formData.rating}
                        onChange={handleChange}
                        name='rating'
                    >
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>
                        <option value='2'>2</option>
                        <option value='1'>1</option>
                    </select>
                    <textarea
                        value={formData.message}
                        placeholder='Message'
                        onChange={handleChange}
                        name='message'
                    />
                    <button>Send</button>
                </form>
            </div>
        </div>
        <div className='map'>

        </div>
    </div>
  )
}

export default Contacts;