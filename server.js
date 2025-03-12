const express = require('express');
const cors = require('cors'); // Importe o cors
const { Curseforge } = require('node-curseforge');
//const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Ativa o CORS para todas as requisições
app.use(cors());

// Substitua 'SUA_API_KEY_AQUI' pela sua chave de API
const cf = new Curseforge('$2a$10$eCKwlbe1XtpB0mtlzMjuBOwiHhx7ZBbLBOioSZlchSorEDmhujLxW');

const projectId = '813540';
const fileId = 6292557; // Substitua com o ID correto do arquivo

app.get('/api/changelog', async (req, res) => {
    try {
    const changelog = await cf.get_file_changelog(projectId, fileId);
    res.json({ content: changelog });
    } catch (error) {
    console.error('Erro ao buscar o changelog:', error);
    res.status(500).json({ error: 'Erro ao buscar o changelog.' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
