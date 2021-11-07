<h1 align="center">easy-netlas</h1>
<h4 align="center">Fast & flexible netlas.io API module</h4>
<p align="center">
	<a href="https://github.com/I2rys/easy-netlas/blob/main/LICENSE"><img src="https://img.shields.io/github/license/I2rys/easy-netlas?style=flat-square"></img></a>
	<a href="https://github.com/I2rys/easy-netlas/issues"><img src="https://img.shields.io/github/issues/I2rys/easy-netlas.svg"></img></a>
	<a href="https://nodejs.org/"><img src="https://img.shields.io/badge/-Nodejs-green?style=flat-square&logo=Node.js"></img></a>
</p>


## Installation
Github:

    git clone https://github.com/I2rys/easy-netlas

NPM Packages:

    npm i axios
    
## Usage
Get current profile/account information
```
Easy_Netlas.get_current_profile()
```

List indices
```
Easy_Netlas.list_indices()
```

Certificates counts
```
Easy_Netlas.certificates_counts(query)
```

Certificates search
```
Easy_Netlas.certificates_search(query)
```

Responses search
```
Easy_Netlas.responses_search(query, indices, parameters)
```

Domains
```
Easy_Netlas.domains(domain)
```

Domain
```
Easy_Netlas.domain(domain)
```

## License
MIT © I2rys
