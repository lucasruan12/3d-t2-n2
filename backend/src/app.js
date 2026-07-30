const express = require('express')
const path = require('path')
const cors = require('cors');
const sql = require('sqlite3').verbose()
const { 
  porta,
  DB_NOME,
  TABELA_FONTES_NOME,
  TABELA_NOTICIAS_NOME
} = require('./env.js')

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'src')));

const db = new sql.Database(
  `./${DB_NOME}`,
  (erro) => {
    if (erro) {
      console.error(`Erro ao abrir o banco de dados "${DB_NOME}":`, erro.message);
    } else {
      console.log(`Conectado ao banco de dados SQLite3 "${DB_NOME}"`);
    }
  }
)

db.run(
  `CREATE TABLE IF NOT EXISTS ${TABELA_FONTES_NOME} (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomedafonte TEXT UNIQUE,
    endereco TEXT UNIQUE
  )`,
  (erro) => {
    if (erro) {
      console.error(`Erro ao criar a tabela "${TABELA_FONTES_NOME}"`, erro.message);
    } else {
      console.log(`Tabela "${TABELA_FONTES_NOME}" pronta!`);
    }
  }
)

db.run(
  `CREATE TABLE IF NOT EXISTS ${TABELA_NOTICIAS_NOME} (
    id INTEGER PRIMARY KEY AUTOINCREMENT
    titulodanoticia TEXT UNIQUE,
    descricao TEXT UNIQUE
  )`,
  (erro) => {
    if (erro) {
      console.error(`Erro ao criar a tabela "${TABELA_NOTICIAS_NOME}"`, erro.message);
    } else {
      console.log(`Tabela "${TABELA_NOTICIAS_NOME}" pronta!`);
    }
  }
)
db.all(
  `SELECT * FROM ${TABELA_NOTICIAS_NOME}`, 
   [],
    (titulodanoticia, descricao) => {
      if (erro) {
        res.status(400).json({ error: erro.message })
        return
      }

      res.status(200).json({
      message: "Requisição feita com sucesso",
      data: $({TABELA_NOTICIAS_NOME})})
    }
)

app.get('/', (req, res) => {
  res.status(200).json({
    message: "Acesso permitido",
    data: [],
    ok: true,
  })
})


app.get('/api/noticias/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria
})

app.get('/api/fontes/cadastrar', (req, res) => {
  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
  }

  const { titulo, descri} = req.query
})

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`)
})
db.all(
    // Comando INSERT no SQL, onde as interrogações vão ser substituídas pelos valores
    `INSERT INTO ${TABELA_NOTICIAS_NOME}(titulo, descri) VALUES (?, ?)`,
    [ titulo, descri],
    // Tratamento básico de erros como nos casos acima
    (erro, ${TABELA_NOTICIAS_NOME}) => {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      res.json({
        message: `Beyblade ${nome} adicionada com sucesso com lamina ${lamina} catraca ${catraca} ponta ${ponta}`,
        data: { id: this.lastID },
        id: this.lastID,
        total: itensDaTabela,
      });
    }
  )

 db.all(
    // 1º argumento: comando SQL
    `SELECT * FROM beyblades`, 
    // 2º argumento: parâmetros (exemplo: posição = "zagueiro")
    [],
    // 3º argumento: Função executada após termos o resultado do comando SQL
    (erro, itensDaTabela) => {
      // Se der ruim, enviamos a mensagem  de erro
      if (erro) {
        res.status(400).json({ error: erro.message })
        return
      }

      // Se der bom, enviamos o resultado
      res.status(200).json({
        message: "Requisição feita com sucesso",
        data: itensDaTabela
      })
    }
  )
})
app.get('/api/beyblade/cadastrar', (req, res) => {
  // Se não houver requisição, enviamos um erro
  if (!req.query) {
    res.status(400).json({ error: erro.message });
    return
  }

  // Extraímos os argumentos enviados pela requisição
  const {
    nome, lamina, catraca, ponta, participante
  } = req.query

  db.all(
    // Comando INSERT no SQL, onde as interrogações vão ser substituídas pelos valores
    `INSERT INTO beyblades (nome, lamina, catraca, ponta, participante) VALUES (?, ?, ?, ?, ?)`,
    [ nome, lamina, catraca, ponta, participante],
    // Tratamento básico de erros como nos casos acima
    (erro, itensDaTabela) => {
      if (erro) {
        res.status(400).json({ error: erro.message });
        return;
      }
      res.json({
        message: `Beyblade ${nome} adicionada com sucesso com lamina ${lamina} catraca ${catraca} ponta ${ponta}`,
        data: { id: this.lastID },
        id: this.lastID,
        total: itensDaTabela,
      });
    }
  )
})
