import React, { useEffect, useState } from 'react';
import * as CompanyServer from './CompanyServer'
import { useNavigate, useParams } from 'react-router-dom'

function Companyform() {
    const history = useNavigate()
    const params = useParams();
    // console.log(id)
    const initialState = {
        id: "",
        email: "",
        first_name: ""
    }
    const [company, setCompany] = useState(initialState)
    const handleInputChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res
            res = await CompanyServer.registerCompany(company)
            const data = await res.json()
            console.log(data.length)
            if (data) {
                setCompany(initialState)
                console.log('bien')
                history("/");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getCompany = async (company_id) => {
        try {
            const res = await CompanyServer.getCompany(company_id)
            const data = await res.json()  
            console.log(data)          
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (params.id) {
            getCompany(params.id)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit}>
                <h1 className='mb-3 text-center'>Formulario</h1>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" name='first_name' value={company.first_name} onChange={handleInputChange} id="exampleFormControlInput1" placeholder="Nombre" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Email</label>
                    <input type="email" className="form-control" name='email' value={company.email} onChange={handleInputChange} id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div>
                   {params.id ? (
                     <button className='btn btn-primary'>
                     guardar
                 </button>
                   ):(
                    <button className='btn btn-success'>
                    guardar
                </button>
                   )}
                </div>
            </form>
        </div>




    )
}

export default Companyform