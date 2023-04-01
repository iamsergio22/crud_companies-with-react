import React, { useEffect, useState } from 'react';
import * as CompanyServer from './CompanyServer'
import CompanyItem from './CompanyItem';

function CompanyList() {
    const [companies, setCompanies] = useState([])

    const listCompanies = async () => {
        try {
            const res = await CompanyServer.listCompanies();
            const data = await res.json()

            setCompanies(data.data)
            console.log(companies)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(companies)

    useEffect(() => {
        listCompanies();
    }, [])


    return (
        <div className='row'>
            {companies.map((company) => (
                <CompanyItem company={company} CompanyList={CompanyList}/>                
            ))}
        </div>
    )
}

export default CompanyList