require('dotenv').config()
//Exportar as credenciais do banco de dados

module.exports ={
  "development": {
    "username": "root",
    "password": "123456",
    "database": "gestao_de_leads",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "123456",
    "database": "gestao_de_leads",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
   "username": "root",
    "password": "123456",
    "database": "gestao_de_leads",
    "host": "localhost",
    "dialect": "mysql"
  }
}
