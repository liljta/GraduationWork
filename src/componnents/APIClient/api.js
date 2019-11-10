class APIClient{
    _baseURL = "http://127.0.0.1:8000/api/";

    async getContacts(){
        const contacts = await fetch(`${this._baseURL}contacts`);
        if(!contacts.ok){
            throw new Error("Can't get data!");
        }
        else{
            return await contacts.json();
        }
    }

    async deleteContact(id){
        const result = await fetch(`${this._baseURL}contacts/${id}`, {
            method: 'DELETE'
        });
        console.log(result);
        if(!result.ok){
            throw new Error("Can't delete contact!");
        }
        else{
            return true;
        }
    }

    async addContact(contact) {
        const result = await fetch(`${this._baseURL}contacts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });
        //console.log(result);
        if(!result.ok){
            throw new Error("Can't add contact!");
        }
        else{
            return await result.json();
        }
    }

    async setField(id, field) {
        const result = await fetch(`${this._baseURL}contacts/${id}/setField`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(field)
        });
        //console.log(result);
        if(!result.ok){
            throw new Error("Can't set field!");
        }
        else{
            return await result.json();
        }
    }

}

export default APIClient;