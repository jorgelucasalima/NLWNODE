import express from "express";

const app = express();

/**
 * GET = buscar
 * POST = criação
 * PUT = alterção
 * DELETE = deletar 
 * PATCH = alterar uma informação especificar TIPO SO ALTERAR A SENHA
 */

// request / req = tudo que está vindo da minha requisição
// response / res = tudo que vamos retornar para o usuário


app.get("/", (req, res) => {
    return res.send("Olá nlw 05");
});


app.post("/users", (req, res) => {
    return res.json({
        message: "usuário salvo com sucesso"
    });
});





app.listen(3333, () => console.log("App rodando na porta :3333"));