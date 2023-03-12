const Db = require("./_mock-database_");

// function getNumberOfItems() {}
function obterQuantidadeDeItems() {
    const it = Db.items.length;
    for(let it = 0; it < it.length; it++) {
        it += 1;
    }
    return it;
}

// function getNumberOfEmployees() {}
function obterQuantidadeDeFuncionarios() {
  const contador = Db.funcionarios.length;
  for (let contador = 0; contador < Db.funcionarios.length; contador++) {
    contador += 1;
    
  }
  return contador;
}
// function getNumberOfPagesFromNumberOfItems() {}
 function obterQuantidadeDePaginasApartirDoNumeroDeItems() {
     const nItems = Db.items.length;
     const paginas = req.params.item
}

// function getEmployees() {}
function obterFuncionarios() {
   const funcionarios = Db.funcionarios.filter((_, indiceDofuncionario) => {
       const numeroDefuncionariosPorPagina = 10;

       return indiceDofuncionario < numeroDefuncionariosPorPagina;
  });
     return funcionarios;
 }

// function getItems() {}
function obterItems() {
     const items = Db.items.filter((_, indiceDoitem) => {
         const numeroDeItemsPorPagina = 10;
         return indiceDoitem < numeroDeItemsPorPagina;
     });
         return items;
 }

// function getItemById(IdItem) {}
 function obterItemPorId(idItem) {
   const item = Db.items.find(item => item.id == idItem);

   return item;
 }

// function getEmployeeById(idEmployee) {}
function obterFuncionarioPorId(idFuncionario) {
     const funcionario = Db.funcionarios.find(funcionario => funcionario.id == idFuncionario)

     return funcionario;
 }

// function getEmployeesByPosition(position) {}
function obterFuncionariosPorCargo(cargo) {
     const funcionario = Db.funcionarios.find(funcionario => funcionario.cargo == cargo)

   return funcionario;
 }

// ----------- Resultados

 console.log('Obter quantidade de items:', obterQuantidadeDeItems());
 console.log('Obter quantidade de funcionários:', obterQuantidadeDeFuncionarios());
// console.log('Obter quantidade de paginas apartir do número de items:', obterQuantidadeDePaginasApartirDoNumeroDeItems());
 console.log('Obter funcionários:', obterFuncionarios());
 console.log('Obter items:', obterItems());
 console.log('Obter funcionário por id', obterFuncionarioPorId());
 console.log('Obter item por id', obterItemPorId(1));
 console.log('Obter funcionarios por cargo', obterFuncionariosPorCargo('assistente'));
