//Dependencies
const { EN } = require("../index.js")

//Variables
const Easy_Netlas = new EN("your_netlas_apikey")

//Functions
async function Main(){
    const result = await Easy_Netlas.get_current_profile()

    console.log(result)
}

//Main
Main()
