import React,{ useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [FirstName , setFirstName] = useState('')
    const [LastName, setLastName] = useState('')

    const onSubmit = () => {
        if(FirstName === '' || LastName === '')
            M.toast({ html:'Please enter first and last Name'})
        else 
            addTech({
                FirstName,
                LastName
            })

            M.toast({ html:`${FirstName} ${LastName} is added as a Technician`})

            setFirstName('')
            setLastName('')
    }

    return (
        <div id='add-tech-modal' className="modal">
           <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="FirstName" value={FirstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="FirstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="LastName" value={LastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="LastName" className="active">Last Name</label>
                    </div>
                </div>
            </div> 
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn blue">Enter</a>
            </div>
        </div>
    )
}

AddTechModal.propTypes ={
    addTech:PropTypes.func.isRequired,
}

export default connect(null , { addTech })(AddTechModal)