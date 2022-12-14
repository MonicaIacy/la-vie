const { Psicologos } = require("../models")
const bcrypt = require("bcryptjs")
const secret = require("../configs/secret")
const jwt = require("jsonwebtoken")

const AuthController = {
  async login(req, res){
    const { email, senha } = req.body

    const psicologo = await Psicologos.findOne({
      where: {
        email,
      },
    })

    if(!psicologo){
      return res.status(401).json("Email ou senha inválido, verifique e tente novamente!")
    }

    if(!bcrypt.compareSync(senha, psicologo.senha)){
      return res.status(401).json("Email ou senha inválido, verifique e tente novamente!")
    }

    const token = jwt.sign(
      {
      psicologo_id: psicologo.id, email: psicologo.email, nome: psicologo.nome
      },
      secret.key
    )

    return res.status(200).json(token)
  }


}

module.exports = AuthController