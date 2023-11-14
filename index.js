const readExcel = require('read-excel-file/node');//usado para trabalhar com qualquer arquivo excel
const express = require('express')// usado para trabalhar com api
const app = express()
const path = require('path')// usado para interagir com arquivos
const fs = require('fs')// usado para interagir com arquivos
const port = 2000
const db = require('./db/models/gerenciamento_leads')
const upload = require('./services/UploadServices');//usado para lidar com uploads
app.use(express.json()); //enviar dados no corpo da requisição
/*
function getFile(){
    const file = document.getElementById("file").value
    alert("Importação concluída com sucesso!!")
}*/

async function getContent(files) {
    const result = []
    for await (const file of files) {
        await readExcel(fs.createReadStream(file)).then((table) => {
            result.push(table)
        })
    }
    return result
}

app.post('/', upload.single("arquivo"), async (req, res) => {
    const files = [path.join(__dirname, /*getFile()*/'./arquivo.xlsx')]
    const result = await getContent(files);
    var lista_dados = [];
    for(var i = 1; i < result[0].length; i++){
        var registro = {
        "Inscricao": result[0][i][0],
        "Dt_Inscricao": result[0][i][1],
        "Nome": result[0][i][2],
        "Email": result[0][i][3],
        "Num_Telefone": result[0][i][4],
        "Classificacao":result[0][i][5],
        "Dt_Classificacao": result[0][i][6],
        "Curso": result[0][i][7],
        "Duracao": result[0][i][8],
        "CODCurso": result[0][i][9],
        "Turno": result[0][i][10],
        "Filial": result[0][i][11],
        "Modalidade": result[0][i][12],
        "Polo": result[0][i][13],
        "Semestre": result[0][i][14],
        "Valor_Matricula": result[0][i][15],
        "ContratoAceito": result[0][i][16],
        "Tipo_de_Aceite": result[0][i][17],
        "IP_do_Aceite": result[0][i][18]
        };
        lista_dados[i-1] = registro;
        //await db.create(registro);
    }
    
    if (!req.file) {//verifica a extensão do arquivo
        return res.send("ERROR: Selecione um arquivo válido.")
    }
    res.json(registro);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})