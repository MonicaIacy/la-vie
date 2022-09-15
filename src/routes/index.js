const AtendimentosController = require("../controllers/atendimento.controller");
const painel = require('../controllers/painel.controller');
const atendimentoValidacao = require("../validation/atendimentos/atendimentoValidacao");

routes.get('/atendimentos', AtendimentosController.listAttendances);
routes.get('/atendimentos/:id', AtendimentosController.listOfAttendance);
routes.post('/atendimentos', AtendimentosController.registerAttendance);
routes.post('/atendimentos', atendimentoValidacao, AtendimentosController.registerAttendance);

routes.get('/painel/atendimentos', painel.numberAtendimentos);
routes.get('/painel/psicologos/media', painel.atendimentoPsicologo);