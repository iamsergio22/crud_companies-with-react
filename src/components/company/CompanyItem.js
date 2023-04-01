import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteCompany } from './CompanyServer'

function CompanyItem({ company, CompanyList }) {
    const history = useNavigate();    
    const handleDelete = async (company_id) => {
        await deleteCompany(company_id)
        CompanyList();
    }
    return (
        <div className='col-md-4 mb-4' key={company.id}>
            <div className="card card-body">
                <div className="card-title">
                    <h2>{company.first_name} <button className='btn btn-success ms-2' onClick={() => {
                        history(`/updateCompany/${company.id}`)
                    }}>Actualizar</button></h2>
                    <p>{company.email}</p>
                    {/* <img src={company.avatar} alt="" /> */}
                    <a className='btn btn-primary' target={'_blank'} rel="noopener noreferrer">
                        Descripción
                    </a>
                    <a className='btn btn-danger my-2' onClick={() => company.id && handleDelete(company.id)} target={'_blank'}>Eliminar</a>
                </div>
            </div>
        </div>
    )
}

export default CompanyItem