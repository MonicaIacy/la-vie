const { validate, join } = require ('express-validation');

module.exports = validate ({
    body: join.object({
        paciente_id: join.number().required(),
        data_atendimento: join.date().required(),
        observacao: join.string().required(),
    }),
});