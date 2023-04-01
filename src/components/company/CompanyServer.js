const API_URL = 'https://reqres.in/api/users'

export const listCompanies = async () => {
    return await fetch(API_URL)
}

export const registerCompany = async (newCompany) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "first_name": String(newCompany.first_name).trim(),
            "email": String(newCompany.email).trim()
        })
    })
}

export const deleteCompany = async (company_id) => {
    return await fetch(`${API_URL}${company_id}`, {
        method: 'DELETE'       
    })
}

export const getCompany = async (company_id) => {
    return await fetch(`${API_URL}${company_id}`)
}