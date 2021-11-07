//Dependencies
const Axios = require("axios")

//Main
class EN {
    constructor(api_key){
        this.api_key = api_key
    }
    
    async request(request_to, parameters){
        return new Promise((resolve)=>{
            Axios.get(request_to, {
                headers: {
                    "X-Api-Key": this.api_key
                },
                params: parameters
            }).then(function(res){
                resolve(res.data)
            }).catch(function(err){
                resolve(err)
            })
        })
    }

    async domain(domain = String = "example.com", parameters = String = { q: null }){
        parameters.q = domain

        return this.request("https://app.netlas.io/api/domain", parameters)
    }

    async domains(domain = String = "example.com"){
        var parameters = {}
        parameters.q = domain

        return this.request("https://app.netlas.io/api/domains", parameters)
    }

    async responses_search(query = String = "example.com", indices = BigInt = 20, parameters = String = { q: null, indices: null }){
        parameters.q = query
        parameters.indices = indices

        return this.request("https://app.netlas.io/api/responses/", parameters)
    }

    async certificates_search(query = String = null){
        var parameters = {}
        parameters.q = query

        return this.request("https://app.netlas.io/api/certs/", parameters)
    }

    async certificates_counts(query = String = null){
        var parameters = {}
        parameters.q = query

        return this.request("https://app.netlas.io/api/certs_count/", parameters)
    }

    async list_indices(){
        return this.request("https://app.netlas.io/api/indices/", {})
    }

    async get_current_profile(){
        return this.request("https://app.netlas.io/api/users/profile/", {})
    }
}

//Exporter
module.exports = {
    EN
}
