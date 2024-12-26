
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Tb_pessoasScalarFieldEnum = {
  Codigo: 'Codigo',
  Tipo_Pessoa: 'Tipo_Pessoa',
  CPF: 'CPF',
  CNPJ: 'CNPJ',
  RG: 'RG',
  IE: 'IE',
  CadPro: 'CadPro',
  Tipo_Contribuinte: 'Tipo_Contribuinte',
  Pessoa: 'Pessoa',
  Fantasia: 'Fantasia',
  CEP: 'CEP',
  Endereco: 'Endereco',
  Numero: 'Numero',
  Bairro: 'Bairro',
  UF: 'UF',
  cUF: 'cUF',
  xMun: 'xMun',
  cMun: 'cMun',
  xPais: 'xPais',
  cPais: 'cPais',
  Complemento: 'Complemento',
  Data_Nascimento: 'Data_Nascimento',
  Fone1: 'Fone1',
  Fone2: 'Fone2',
  Fone3: 'Fone3',
  Fone4: 'Fone4',
  Fone5: 'Fone5',
  Id_Tabela_Preco: 'Id_Tabela_Preco',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Email: 'Email',
  Id_Operacao_Movimento: 'Id_Operacao_Movimento',
  Apelido: 'Apelido',
  Limite: 'Limite',
  Liberado_Contas_Em_Atraso: 'Liberado_Contas_Em_Atraso',
  WhatsApp: 'WhatsApp'
};

exports.Prisma.Tb_produtosScalarFieldEnum = {
  Codigo: 'Codigo',
  Produto: 'Produto',
  Produto_Curto: 'Produto_Curto',
  Produto_PDV: 'Produto_PDV',
  Complemento: 'Complemento',
  Pesquisa_Rapida_PDV: 'Pesquisa_Rapida_PDV',
  Id_Departamento: 'Id_Departamento',
  Id_Setor: 'Id_Setor',
  Id_Marca: 'Id_Marca',
  Id_Grupo: 'Id_Grupo',
  Id_SubGrupo: 'Id_SubGrupo',
  Id_Unidade: 'Id_Unidade',
  Id_Familia: 'Id_Familia',
  Codigo_Interno: 'Codigo_Interno',
  Peso: 'Peso',
  Capacidade: 'Capacidade',
  ID_Alocacao: 'ID_Alocacao',
  Comissao: 'Comissao',
  Balanca: 'Balanca',
  Tipo_Balanca: 'Tipo_Balanca',
  Descricao_Balanca: 'Descricao_Balanca',
  NCM: 'NCM',
  Genero: 'Genero',
  cEAN_Trib: 'cEAN_Trib',
  CEST: 'CEST',
  Estoque: 'Estoque',
  Estoque_Reservado: 'Estoque_Reservado',
  Estoque_Disponivel: 'Estoque_Disponivel',
  Tipo: 'Tipo',
  Deposito: 'Deposito',
  Fraciona: 'Fraciona',
  Controle_Lote: 'Controle_Lote',
  Requer_Observacao: 'Requer_Observacao',
  Nao_Controla_Estoque: 'Nao_Controla_Estoque',
  Nunca_Agrupa_Venda: 'Nunca_Agrupa_Venda',
  Preco_Atribuido: 'Preco_Atribuido',
  Preco_Venda: 'Preco_Venda',
  Preco_Compra: 'Preco_Compra',
  Preco_Medio: 'Preco_Medio',
  Data_Preco_Venda: 'Data_Preco_Venda',
  Data_Custo: 'Data_Custo',
  Margem: 'Margem',
  Markup: 'Markup',
  Classificacao: 'Classificacao',
  Id_Produto_Vinculado: 'Id_Produto_Vinculado',
  Ultima_Venda: 'Ultima_Venda',
  Ultima_Compra: 'Ultima_Compra',
  Data_Alterado: 'Data_Alterado',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Id_Importacao_Sistema: 'Id_Importacao_Sistema',
  Id_SubFamilia: 'Id_SubFamilia',
  Estoque_Maximo: 'Estoque_Maximo',
  Estoque_Minimo: 'Estoque_Minimo',
  IDUser: 'IDUser',
  Cad_ViaXML: 'Cad_ViaXML',
  Funcao: 'Funcao',
  Alterado: 'Alterado',
  N_Licenca_ANVISA: 'N_Licenca_ANVISA',
  Id_DCB: 'Id_DCB',
  Fidelidade_Credito: 'Fidelidade_Credito',
  Fidelidade_Resgate: 'Fidelidade_Resgate',
  Dias_Validade: 'Dias_Validade'
};

exports.Prisma.Tb_produtos_setorScalarFieldEnum = {
  Codigo: 'Codigo',
  Setor: 'Setor',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_comandaScalarFieldEnum = {
  Codigo: 'Codigo',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_mesaScalarFieldEnum = {
  Codigo: 'Codigo',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_mesa_comandaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Mesa: 'Id_Mesa',
  Id_Comanda: 'Id_Comanda'
};

exports.Prisma.Tb_pedidoScalarFieldEnum = {
  Codigo: 'Codigo',
  ID_Activity: 'ID_Activity',
  Id_Mesa: 'Id_Mesa',
  Id_Comanda: 'Id_Comanda',
  Importado_ERP: 'Importado_ERP'
};

exports.Prisma.Tb_pedido_itemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pedido: 'Id_Pedido',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Importado_ERP: 'Importado_ERP'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  tb_pessoas: 'tb_pessoas',
  tb_produtos: 'tb_produtos',
  tb_produtos_setor: 'tb_produtos_setor',
  tb_comanda: 'tb_comanda',
  tb_mesa: 'tb_mesa',
  tb_mesa_comanda: 'tb_mesa_comanda',
  tb_pedido: 'tb_pedido',
  tb_pedido_item: 'tb_pedido_item'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
