const funcionariosModel = require("../models/model");
const { items } = require("../models/_mock-database_");

function requererFuncionarios(req, res) {
    const funcionarios = funcionariosModel.obterfuncionarios();
    res.send(funcionarios);
}

function requererFuncionarioPorId(req, res) {
    const {id} = req.params;
    const funcionario = funcionarioModel.obterFuncionarioPorId (id);
    res.send(funcionario);
}

function requererFuncionarioPorCargo(req, res) {
    const {cargo} = req.params;
    const funcionario = funcionarioModel.obterFuncionarioPorCargo (cargo);
    res.send(funcionario);
}


function requererItems(req, res) {
    const items = itemsModel.obterItems();

    res.send(items);
}

function requererItemPorId(req, res) {
    const {id} = req.params;
    const item = itemModel.obterItemPorId (id);
    res.send(item);
}


module.exports = {
  requererFuncionarios,
  requererFuncionarioPorId,
  requererFuncionarioPorCargo,
  requererItems,
  requererItemPorId,
};
