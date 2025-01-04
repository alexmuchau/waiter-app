
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
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
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
  WhatsApp: 'WhatsApp',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Id_Canal_Cadastro: 'Id_Canal_Cadastro',
  Distancia: 'Distancia',
  Obs_Retirada: 'Obs_Retirada',
  Desconto_Geral: 'Desconto_Geral',
  Op_Cliente: 'Op_Cliente',
  Op_Fornecedor: 'Op_Fornecedor',
  Op_Transportador: 'Op_Transportador',
  Op_Prestador_Servico: 'Op_Prestador_Servico'
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
  Dias_Validade: 'Dias_Validade',
  Dados_Tecnicos: 'Dados_Tecnicos',
  Data_Custo_Atribuido: 'Data_Custo_Atribuido',
  IDUser_Custo: 'IDUser_Custo',
  IDUser_Preco_Venda: 'IDUser_Preco_Venda',
  IDUser_Custo_Atribuido: 'IDUser_Custo_Atribuido',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Percentual_Gas_Natural_Nacional: 'Percentual_Gas_Natural_Nacional',
  Percentual_Gas_Natural_Importado: 'Percentual_Gas_Natural_Importado',
  Codigo_ANP: 'Codigo_ANP',
  Descricao_ANP: 'Descricao_ANP',
  Percentual_GPL: 'Percentual_GPL',
  adRemICMSRet: 'adRemICMSRet',
  vICMSMonoRet: 'vICMSMonoRet',
  Margem_Ideal: 'Margem_Ideal',
  Markup_Ideal: 'Markup_Ideal',
  Custo_Ideal: 'Custo_Ideal'
};

exports.Prisma.Tb_produtos_setorScalarFieldEnum = {
  Codigo: 'Codigo',
  Setor: 'Setor',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  IDuMovMe: 'IDuMovMe',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.Tb_abertura_caixaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Caixa: 'Id_Caixa',
  Id_Usuario: 'Id_Usuario',
  Data_Abertura: 'Data_Abertura',
  Hora_Abertura: 'Hora_Abertura',
  Data_Fechamento: 'Data_Fechamento',
  Hora_Fechamento: 'Hora_Fechamento',
  Fechado: 'Fechado',
  Id_Supervisor_Abertura: 'Id_Supervisor_Abertura',
  Id_Supervisor_Fechamento: 'Id_Supervisor_Fechamento',
  DHU: 'DHU',
  Numero_Fechamento: 'Numero_Fechamento',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor',
  Valor_Inicial: 'Valor_Inicial',
  Valor_Reservado: 'Valor_Reservado'
};

exports.Prisma.Tb_abertura_caixa_contagemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Caixa: 'Id_Caixa',
  x200R: 'x200R',
  x100R: 'x100R',
  x50R: 'x50R',
  x20R: 'x20R',
  x10R: 'x10R',
  x5R: 'x5R',
  x2R: 'x2R',
  x1R: 'x1R',
  X50C: 'X50C',
  x25C: 'x25C',
  x10C: 'x10C',
  x5C: 'x5C',
  x1C: 'x1C',
  Total: 'Total',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.Tb_adquirentesScalarFieldEnum = {
  Codigo: 'Codigo',
  Nome: 'Nome',
  CNPJ: 'CNPJ',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Ativo: 'Ativo',
  Id_Pessoa: 'Id_Pessoa'
};

exports.Prisma.Tb_adquirentes_bandeirasScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  N_Parcelas: 'N_Parcelas',
  Valor_Minimo: 'Valor_Minimo',
  Taxa: 'Taxa',
  Juros_AM: 'Juros_AM',
  Dias_Credito: 'Dias_Credito',
  Retorno_TEF: 'Retorno_TEF',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Ativo: 'Ativo',
  Id_Adquirente: 'Id_Adquirente',
  CD: 'CD'
};

exports.Prisma.Tb_boleto_carteiraScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Nro_Banco: 'Nro_Banco',
  Logo_Banco: 'Logo_Banco',
  Codigo_Agencia: 'Codigo_Agencia',
  DV_Agencia: 'DV_Agencia',
  Conta_Corrente: 'Conta_Corrente',
  DV_Conta_Corrente: 'DV_Conta_Corrente',
  Nro_Carteira: 'Nro_Carteira',
  Nro_Convenio: 'Nro_Convenio',
  DV_Convenio: 'DV_Convenio',
  Variacao_Carteira: 'Variacao_Carteira',
  Aceite: 'Aceite',
  Instrucao_Codificada: 'Instrucao_Codificada',
  Dias_Protesto: 'Dias_Protesto',
  Tipo_Boleto: 'Tipo_Boleto',
  CNPJ_Cedente: 'CNPJ_Cedente',
  Nome_Cedente: 'Nome_Cedente',
  Logradouro_Cedente: 'Logradouro_Cedente',
  Nro_Cedente: 'Nro_Cedente',
  Complemento_Cedente: 'Complemento_Cedente',
  Bairro_Cedenten: 'Bairro_Cedenten',
  CEP_Cedente: 'CEP_Cedente',
  Cidade_Cedente: 'Cidade_Cedente',
  UF_Cedente: 'UF_Cedente',
  BoletoMensagem: 'BoletoMensagem',
  Sequencia_Atual_Remessa: 'Sequencia_Atual_Remessa',
  Layout: 'Layout',
  Dias_Nao_Recebe: 'Dias_Nao_Recebe',
  Cod_Especie: 'Cod_Especie',
  Especie: 'Especie',
  Local_Pagamento: 'Local_Pagamento',
  Nro_Banco_Boleto: 'Nro_Banco_Boleto',
  Posto: 'Posto',
  Dias_Movimento_Portador: 'Dias_Movimento_Portador',
  Custo_Boleto: 'Custo_Boleto',
  Imagem_Frente: 'Imagem_Frente',
  Imagem_Verso: 'Imagem_Verso',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Id_Procedimento: 'Id_Procedimento',
  Dias_Negativacao: 'Dias_Negativacao'
};

exports.Prisma.Tb_boleto_comando_retornoScalarFieldEnum = {
  Codigo: 'Codigo',
  Codigo_Interno: 'Codigo_Interno',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU'
};

exports.Prisma.Tb_caixas_retScalarFieldEnum = {
  Codigo: 'Codigo',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  Data_Abertura: 'Data_Abertura',
  Hora_Abertura: 'Hora_Abertura',
  Data_Fechamento: 'Data_Fechamento',
  Hora_fechamento: 'Hora_fechamento',
  Valor_Inicial: 'Valor_Inicial',
  Dinheiro_Calculado: 'Dinheiro_Calculado',
  Cartao_Calculado: 'Cartao_Calculado',
  Cheque_Calculado: 'Cheque_Calculado',
  OUtros_Calculado: 'OUtros_Calculado',
  PIX_Calculado: 'PIX_Calculado',
  Dinheiro_Digitado: 'Dinheiro_Digitado',
  Cartao_Digitado: 'Cartao_Digitado',
  Cheque_Digitado: 'Cheque_Digitado',
  OUtros_Digitado: 'OUtros_Digitado',
  PIX_Digitado: 'PIX_Digitado',
  Reservado: 'Reservado',
  Valor_Final_Calculado: 'Valor_Final_Calculado',
  Valor_Final_Digitado: 'Valor_Final_Digitado',
  Diferenca_Dinheiro: 'Diferenca_Dinheiro',
  Diferenca_Cartao: 'Diferenca_Cartao',
  Diferenca_Cheque: 'Diferenca_Cheque',
  Diferenca_Outros: 'Diferenca_Outros',
  Diferenca_PIX: 'Diferenca_PIX',
  Diferenca_Total: 'Diferenca_Total',
  RegExcluido: 'RegExcluido',
  IDSupervisor_Abertura: 'IDSupervisor_Abertura',
  IDSupervisor_Fechamento: 'IDSupervisor_Fechamento',
  Status: 'Status',
  Sangrias: 'Sangrias',
  ID_Supervisor_Reabertura: 'ID_Supervisor_Reabertura',
  Data_Reabertura: 'Data_Reabertura',
  Hora_Reabertura: 'Hora_Reabertura'
};

exports.Prisma.Tb_cancelamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Movimento: 'Data_Movimento',
  Hora: 'Hora',
  Tipo: 'Tipo',
  Id_Supervisor: 'Id_Supervisor',
  Id_Registro_Alterado: 'Id_Registro_Alterado',
  Id_Fechamento: 'Id_Fechamento',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_cartoesScalarFieldEnum = {
  Codigo: 'Codigo',
  Cartao: 'Cartao',
  Apelido: 'Apelido',
  Dia_Fechamento: 'Dia_Fechamento',
  Dia_Vencimento: 'Dia_Vencimento',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Limite: 'Limite',
  Id_Pessoa: 'Id_Pessoa'
};

exports.Prisma.Tb_centro_uso_consumoScalarFieldEnum = {
  Codigo: 'Codigo',
  Centro: 'Centro',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_cfop_devolucaoScalarFieldEnum = {
  Codigo: 'Codigo',
  CFOP_Entrada: 'CFOP_Entrada',
  CFOP_Devolucao: 'CFOP_Devolucao'
};

exports.Prisma.Tb_check_contasScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data'
};

exports.Prisma.Tb_comando_sql_clienteScalarFieldEnum = {
  Codigo: 'Codigo',
  Comando_SQL: 'Comando_SQL'
};

exports.Prisma.Tb_comprasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  Data_Documento: 'Data_Documento',
  Data_Lancamento: 'Data_Lancamento',
  Hora_Lancamento: 'Hora_Lancamento',
  Documento: 'Documento',
  Modelo: 'Modelo',
  Serie: 'Serie',
  Chave_Acesso: 'Chave_Acesso',
  Id_Fornecedor: 'Id_Fornecedor',
  Movimenta_Estoque: 'Movimenta_Estoque',
  Start_Estoque: 'Start_Estoque',
  vBaseICMS: 'vBaseICMS',
  vICMS: 'vICMS',
  vBaseICMSST: 'vBaseICMSST',
  vICMSST: 'vICMSST',
  vProd: 'vProd',
  vFrete: 'vFrete',
  vDesc: 'vDesc',
  vOutro: 'vOutro',
  vICMSDesonerado: 'vICMSDesonerado',
  vCOFINS: 'vCOFINS',
  vPIS: 'vPIS',
  vIPI: 'vIPI',
  vNF: 'vNF',
  vTributos: 'vTributos',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Status: 'Status',
  IDUser: 'IDUser',
  Data_Finalizacao: 'Data_Finalizacao',
  Hora_Finalizacao: 'Hora_Finalizacao',
  vFCPST: 'vFCPST',
  Revisado: 'Revisado',
  XML: 'XML',
  Revisado_Financeiro: 'Revisado_Financeiro',
  IDUser_Status_NFe: 'IDUser_Status_NFe',
  Frete_Digitado: 'Frete_Digitado',
  Doc_Sem_Chave: 'Doc_Sem_Chave',
  Financeiro_Inconsistente: 'Financeiro_Inconsistente',
  Motivo_Inconsistente: 'Motivo_Inconsistente',
  Id_Canal_Pagamento: 'Id_Canal_Pagamento',
  Id_Cartao: 'Id_Cartao',
  Desconto_Extra: 'Desconto_Extra',
  Acrescimo_Extra: 'Acrescimo_Extra'
};

exports.Prisma.Tb_compras_alteracao_imediataScalarFieldEnum = {
  Codigo: 'Codigo'
};

exports.Prisma.Tb_compras_devolucaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Compra: 'Id_Compra',
  Id_Lcto: 'Id_Lcto',
  Quantidade: 'Quantidade',
  Id_Devolucao: 'Id_Devolucao',
  Digitacao: 'Digitacao',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_compras_duplicatasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Compra: 'Id_Compra',
  Duplicata: 'Duplicata',
  Vencimento: 'Vencimento',
  Valor: 'Valor',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_compras_envio_nfeScalarFieldEnum = {
  Codigo: 'Codigo',
  Quantidade: 'Quantidade',
  Id_Produto: 'Id_Produto',
  Id_NFe: 'Id_NFe',
  Id_NFe_Item: 'Id_NFe_Item',
  Id_Compra: 'Id_Compra',
  Id_Compra_Item: 'Id_Compra_Item',
  Mentor_Estoque: 'Mentor_Estoque',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_compras_padraoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao'
};

exports.Prisma.Tb_compras_pagamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Compra: 'Id_Compra',
  Duplicata: 'Duplicata',
  Vencimento: 'Vencimento',
  Valor: 'Valor',
  Id_Parcela: 'Id_Parcela',
  Despesa_Acessoria: 'Despesa_Acessoria'
};

exports.Prisma.Tb_compras_produtosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Compra: 'Id_Compra',
  Id_Produto: 'Id_Produto',
  Fator: 'Fator',
  NCM: 'NCM',
  qComXML: 'qComXML',
  qCom: 'qCom',
  vUnCom: 'vUnCom',
  vProd: 'vProd',
  vDesc: 'vDesc',
  vOUtro: 'vOUtro',
  vFrete: 'vFrete',
  vSeg: 'vSeg',
  Total_A_Pagar: 'Total_A_Pagar',
  CFOP: 'CFOP',
  cBenef: 'cBenef',
  CSTICMS: 'CSTICMS',
  pRedBCICMS: 'pRedBCICMS',
  vBCICMS: 'vBCICMS',
  pICMS: 'pICMS',
  vICMS: 'vICMS',
  pMVAST: 'pMVAST',
  vBCICMSST: 'vBCICMSST',
  pICMSST: 'pICMSST',
  vICMSST: 'vICMSST',
  pDif: 'pDif',
  vDif: 'vDif',
  vCredICMS: 'vCredICMS',
  vICMSDesonerado: 'vICMSDesonerado',
  vFCPST: 'vFCPST',
  CSTIPI: 'CSTIPI',
  vBCIPI: 'vBCIPI',
  pIPI: 'pIPI',
  vIPI: 'vIPI',
  CSTPIS: 'CSTPIS',
  vBCPIS: 'vBCPIS',
  pPIS: 'pPIS',
  vPIS: 'vPIS',
  CSTCOFINS: 'CSTCOFINS',
  vBCCOFINS: 'vBCCOFINS',
  pCOFINS: 'pCOFINS',
  vCOFINS: 'vCOFINS',
  Custo_Unitario: 'Custo_Unitario',
  vTrib: 'vTrib',
  Status_NCM: 'Status_NCM',
  Descricao_XML: 'Descricao_XML',
  Acao_Revisao: 'Acao_Revisao',
  DHU: 'DHU',
  cProd: 'cProd',
  IDUser: 'IDUser',
  Status_Cadastro: 'Status_Cadastro',
  Descricao_Cadastro: 'Descricao_Cadastro',
  CEST: 'CEST',
  Revisado: 'Revisado',
  Preco_Venda_Atribuido: 'Preco_Venda_Atribuido',
  Consolidado: 'Consolidado',
  Revisado_Aut: 'Revisado_Aut',
  Estoque_Processado: 'Estoque_Processado',
  Cad_ViaXML: 'Cad_ViaXML',
  Produto: 'Produto',
  Markup: 'Markup',
  Preco_Venda: 'Preco_Venda',
  ID_Empresas: 'ID_Empresas',
  Origem_Desmembramento: 'Origem_Desmembramento',
  Origem_Desmembramento_ID: 'Origem_Desmembramento_ID',
  cEAN: 'cEAN',
  IDUser_OverLimite_Custo: 'IDUser_OverLimite_Custo',
  Frete_Digitado: 'Frete_Digitado',
  Acrescimo_Extra: 'Acrescimo_Extra',
  Desconto_Extra: 'Desconto_Extra'
};

exports.Prisma.Tb_compras_produtos_lotesScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Compra: 'Id_Compra',
  Id_Lcto: 'Id_Lcto',
  nLote: 'nLote',
  qLote: 'qLote',
  dFab: 'dFab',
  dVal: 'dVal',
  Processo_Estoque: 'Processo_Estoque',
  Fator: 'Fator',
  qEntra: 'qEntra',
  Id_lote: 'Id_lote'
};

exports.Prisma.Tb_conta_razaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Conta_Razao: 'Conta_Razao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_cotacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Data: 'Data',
  Hora: 'Hora',
  Data_Fechamento: 'Data_Fechamento',
  Hora_Fechamento: 'Hora_Fechamento',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Status: 'Status'
};

exports.Prisma.Tb_cotacao_fechamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Cotacao: 'Id_Cotacao',
  id_Pessoa: 'id_Pessoa',
  Id_Representante: 'Id_Representante',
  Valor_Pedido: 'Valor_Pedido',
  Arquivo_PDF: 'Arquivo_PDF',
  WhatsApp_Enviado: 'WhatsApp_Enviado',
  Email_Enviado: 'Email_Enviado'
};

exports.Prisma.Tb_cotacao_itemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Cotacao: 'Id_Cotacao',
  Id_Pedido_Lista: 'Id_Pedido_Lista',
  RegExcluido: 'RegExcluido',
  Id_Pessoa_Ganhador: 'Id_Pessoa_Ganhador',
  Id_Representante_Ganhador: 'Id_Representante_Ganhador',
  Unitario_Ganhador: 'Unitario_Ganhador',
  Status: 'Status'
};

exports.Prisma.Tb_cotacao_participantesScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Cotacao: 'Id_Cotacao',
  Id_Pessoa: 'Id_Pessoa',
  Id_Representante: 'Id_Representante',
  RegExcluido: 'RegExcluido',
  Arquivo_Excel: 'Arquivo_Excel',
  Email_Enviado: 'Email_Enviado',
  WhatsApp_Enviado: 'WhatsApp_Enviado',
  Retorno: 'Retorno'
};

exports.Prisma.Tb_cotacao_retornosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Cotacao: 'Id_Cotacao',
  Id_Produto: 'Id_Produto',
  Id_Pessoa: 'Id_Pessoa',
  Id_Representante: 'Id_Representante',
  Unitario: 'Unitario',
  Prazo_Medio: 'Prazo_Medio',
  Ignorado: 'Ignorado'
};

exports.Prisma.Tb_despesasScalarFieldEnum = {
  Codigo: 'Codigo',
  ID_Pagador: 'ID_Pagador',
  ID_Pessoa: 'ID_Pessoa',
  Documento: 'Documento',
  Data_Movimento: 'Data_Movimento',
  ID_Conta_Razao: 'ID_Conta_Razao',
  Valor: 'Valor',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Observacao: 'Observacao',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Id_Tipo_Pagamento: 'Id_Tipo_Pagamento',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_despesas_aplicacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Aplicacao: 'Aplicacao',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU'
};

exports.Prisma.Tb_despesas_aplicacao_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Aplicacao: 'Id_Aplicacao',
  Aplicacao: 'Aplicacao',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_despesas_bScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Movimento: 'Data_Movimento',
  Id_Fornecedor: 'Id_Fornecedor',
  Documento: 'Documento',
  IDEmpresa: 'IDEmpresa',
  Total: 'Total',
  Observacao: 'Observacao',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Data_Lancamento: 'Data_Lancamento',
  Conciliacao_Nao_Gera_Financeiro: 'Conciliacao_Nao_Gera_Financeiro',
  Financeiro_Inconsistente: 'Financeiro_Inconsistente',
  Motivo_Inconsistente: 'Motivo_Inconsistente',
  Id_Canal_Pagamento: 'Id_Canal_Pagamento',
  Sem_Financeiro: 'Sem_Financeiro',
  RegSysADM: 'RegSysADM',
  Id_Cartao: 'Id_Cartao'
};

exports.Prisma.Tb_despesas_b_financeiroScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Despesa: 'Id_Despesa',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Valor: 'Valor',
  Parcela: 'Parcela',
  Vencimento: 'Vencimento',
  Id_Portador: 'Id_Portador'
};

exports.Prisma.Tb_despesas_b_rateioScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Despesa: 'Id_Despesa',
  Id_Aplicacao: 'Id_Aplicacao',
  Valor: 'Valor',
  RegExcluido: 'RegExcluido',
  Observacao: 'Observacao'
};

exports.Prisma.Tb_devolucao_fiscalScalarFieldEnum = {
  Codigo: 'Codigo',
  IDEmpresa: 'IDEmpresa',
  Id_Fornecedor: 'Id_Fornecedor',
  ID_Produto: 'ID_Produto',
  Quantidade: 'Quantidade',
  ID_Lcto_Compra: 'ID_Lcto_Compra',
  ID_NFe: 'ID_NFe',
  RegExcluido: 'RegExcluido',
  Mentor_Estoque: 'Mentor_Estoque',
  Id_Item_Compra: 'Id_Item_Compra',
  Id_Devolucao: 'Id_Devolucao',
  Digitacao: 'Digitacao'
};

exports.Prisma.Tb_documentos_personalizadosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Documento: 'Id_Documento',
  Produtos: 'Produtos',
  Com_Frete: 'Com_Frete',
  Acionar_Sirene: 'Acionar_Sirene',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Funcao: 'Funcao',
  Id_Acao_Valor: 'Id_Acao_Valor',
  Impressao_Individual: 'Impressao_Individual',
  Texto_Relatorio: 'Texto_Relatorio',
  Integra_Servidor: 'Integra_Servidor',
  Id_Documento_Servidor: 'Id_Documento_Servidor',
  Texto_Relatorio_Servidor: 'Texto_Relatorio_Servidor'
};

exports.Prisma.Tb_documentos_personalizados_servidorScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Id_Venda: 'Id_Venda',
  Id_Lcto_Item: 'Id_Lcto_Item',
  Id_Produto: 'Id_Produto',
  Controle: 'Controle',
  Texto: 'Texto',
  Rnd_01: 'Rnd_01',
  Rnd_02: 'Rnd_02',
  IDUSer: 'IDUSer',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  ID_Fechamento: 'ID_Fechamento',
  IDUser_Impressao: 'IDUser_Impressao',
  DHU_Impressao: 'DHU_Impressao',
  ID_PDV_Impressao: 'ID_PDV_Impressao',
  Emitido: 'Emitido',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor'
};

exports.Prisma.Tb_dre_confScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Receita_Bruta: 'Receita_Bruta',
  Deducoes: 'Deducoes',
  Receita_Liquida: 'Receita_Liquida',
  CMV: 'CMV',
  Lucro_Bruto: 'Lucro_Bruto',
  Despesas: 'Despesas',
  Resultado_Operacional: 'Resultado_Operacional',
  CSLL_IRPJ: 'CSLL_IRPJ',
  Resultado_Liquido: 'Resultado_Liquido',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_empresasScalarFieldEnum = {
  Codigo: 'Codigo',
  emi_CNPJ: 'emi_CNPJ',
  emi_CPF: 'emi_CPF',
  emi_xNome: 'emi_xNome',
  emi_xfant: 'emi_xfant',
  emi_nro: 'emi_nro',
  emi_xLgr: 'emi_xLgr',
  emi_xCpl: 'emi_xCpl',
  emi_xBairro: 'emi_xBairro',
  emi_cMun: 'emi_cMun',
  emi_xMun: 'emi_xMun',
  emi_xUF: 'emi_xUF',
  emi_cUF: 'emi_cUF',
  emi_CEP: 'emi_CEP',
  emi_cPais: 'emi_cPais',
  emi_xPais: 'emi_xPais',
  emi_fone: 'emi_fone',
  emi_IE: 'emi_IE',
  emi_IEST: 'emi_IEST',
  emi_IM: 'emi_IM',
  emi_CNAE: 'emi_CNAE',
  emi_CRT: 'emi_CRT',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU',
  Apelido: 'Apelido',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_empresas_comunicacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Op_Venda: 'Op_Venda',
  Op_Financeiro: 'Op_Financeiro',
  Op_Estoque: 'Op_Estoque',
  IDUser: 'IDUser',
  DHU: 'DHU'
};

exports.Prisma.Tb_empresas_conf_etiqueta_pedidoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Etiqueta: 'Id_Etiqueta',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_empresas_conf_geralScalarFieldEnum = {
  Codigo: 'Codigo',
  Licenca_ANVISA: 'Licenca_ANVISA',
  Mostrar_Tributos_NFe: 'Mostrar_Tributos_NFe',
  Permite_Itens_Zerados_Venda: 'Permite_Itens_Zerados_Venda',
  Faturar_Contas_Status_Diferentes: 'Faturar_Contas_Status_Diferentes',
  Numero_Dias_Alteracao_Vencimento: 'Numero_Dias_Alteracao_Vencimento',
  Id_Operacao_Padrao: 'Id_Operacao_Padrao',
  Id_Operacao_Fiscal_NFe: 'Id_Operacao_Fiscal_NFe',
  Id_Operacao_Fiscal_NFCe: 'Id_Operacao_Fiscal_NFCe',
  Permite_Repetir_Item: 'Permite_Repetir_Item',
  Top_Reimpressao: 'Top_Reimpressao',
  Pergunta_CPF: 'Pergunta_CPF',
  Finaliza_Venda_Cartao_Fiscal: 'Finaliza_Venda_Cartao_Fiscal',
  Fatura_Sobre_Fatura: 'Fatura_Sobre_Fatura',
  Variacao_Gerente_Via_Markup: 'Variacao_Gerente_Via_Markup',
  Acao_Imprimir: 'Acao_Imprimir',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Acao_Imprimir_NFe: 'Acao_Imprimir_NFe',
  Acao_Imprimir_NFCe: 'Acao_Imprimir_NFCe',
  Modelo_Documento_Impressao: 'Modelo_Documento_Impressao',
  Desconto_Pontualidade: 'Desconto_Pontualidade',
  Opcoes_Comunicacao_TXT: 'Opcoes_Comunicacao_TXT',
  Alteracao_Unitario: 'Alteracao_Unitario',
  Limite_Alteracao_Unitario: 'Limite_Alteracao_Unitario',
  Obs_Venda_A4: 'Obs_Venda_A4',
  Promissoria_Termica: 'Promissoria_Termica'
};

exports.Prisma.Tb_empresas_conf_petScalarFieldEnum = {
  Codigo: 'Codigo',
  N_Impressoes_Ticket: 'N_Impressoes_Ticket',
  Filtro_Mod_02: 'Filtro_Mod_02',
  Pacote_Apenas_Debito: 'Pacote_Apenas_Debito',
  Totaliza_Exame: 'Totaliza_Exame',
  Totaliza_Medicamento: 'Totaliza_Medicamento',
  Totaliza_Psicotropico: 'Totaliza_Psicotropico',
  Totaliza_Insumos: 'Totaliza_Insumos',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_empresas_conf_vendasScalarFieldEnum = {
  Codigo: 'Codigo',
  Repete_Item: 'Repete_Item',
  Id_Operacao_Movimento: 'Id_Operacao_Movimento',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_empresas_custoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Empresa: 'Id_Empresa',
  Descricao_Custo: 'Descricao_Custo',
  Custo: 'Custo'
};

exports.Prisma.Tb_empresas_diretoriosScalarFieldEnum = {
  Codigo: 'Codigo',
  NFe_XML_Gerado: 'NFe_XML_Gerado',
  NFe_XML_Assinado: 'NFe_XML_Assinado',
  NFe_XML_Autorizado: 'NFe_XML_Autorizado',
  NFe_DANFe: 'NFe_DANFe',
  NFe_XML_CCe: 'NFe_XML_CCe',
  NFe_N_Copias: 'NFe_N_Copias',
  NFCe_XML_Gerado: 'NFCe_XML_Gerado',
  NFCe_XML_Assinado: 'NFCe_XML_Assinado',
  NFCe_XML_Autorizado: 'NFCe_XML_Autorizado',
  NFCe_DANFCe: 'NFCe_DANFCe',
  NFCe_XML_CCe: 'NFCe_XML_CCe',
  NFCe_Img_QRCode: 'NFCe_Img_QRCode',
  NFCe_N_Copias: 'NFCe_N_Copias',
  CTe_XML_Gerado: 'CTe_XML_Gerado',
  CTe_XML_Assinado: 'CTe_XML_Assinado',
  CTe_XML_Autorizado: 'CTe_XML_Autorizado',
  CTe_DACTe: 'CTe_DACTe',
  CTe_XML_CCe: 'CTe_XML_CCe',
  CTe_N_Copias: 'CTe_N_Copias',
  MDFe_XML_Gerado: 'MDFe_XML_Gerado',
  MDFe_XML_Assinado: 'MDFe_XML_Assinado',
  MDFe_XML_Autorizado: 'MDFe_XML_Autorizado',
  MDFe_XML_Encerramento: 'MDFe_XML_Encerramento',
  MDFe_XML_Inclusao_Condutor: 'MDFe_XML_Inclusao_Condutor',
  MDFe_DAMDFe: 'MDFe_DAMDFe',
  MDFe_N_Copias: 'MDFe_N_Copias',
  TXT_Defender: 'TXT_Defender',
  XML_Entradas: 'XML_Entradas',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Txt_NFCe: 'Txt_NFCe',
  Txt_NFCe_Retorno: 'Txt_NFCe_Retorno',
  NFCe_Lote: 'NFCe_Lote',
  Excel_Cotacao: 'Excel_Cotacao',
  XML_Download_Manual: 'XML_Download_Manual',
  Inutilizacao: 'Inutilizacao',
  Quadro_Recibo: 'Quadro_Recibo'
};

exports.Prisma.Tb_empresas_emailScalarFieldEnum = {
  Codigo: 'Codigo',
  Remetente: 'Remetente',
  SMTP_Cliente: 'SMTP_Cliente',
  SMTP_Porta: 'SMTP_Porta',
  SMTP_SSL: 'SMTP_SSL',
  SMTP_Usuario: 'SMTP_Usuario',
  SMTP_Senha: 'SMTP_Senha',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Nome_Remetente: 'Nome_Remetente'
};

exports.Prisma.Tb_empresas_etiquetasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Empresa: 'Id_Empresa',
  Id_Etiqueta: 'Id_Etiqueta'
};

exports.Prisma.Tb_empresas_imagensScalarFieldEnum = {
  Codigo: 'Codigo',
  Imagem_NFe: 'Imagem_NFe',
  Imagem_NFCe: 'Imagem_NFCe',
  Imagem_Relatorios: 'Imagem_Relatorios',
  Imagem_PicPay: 'Imagem_PicPay',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Imagem_Inicial: 'Imagem_Inicial'
};

exports.Prisma.Tb_empresas_liberadas_usuariosScalarFieldEnum = {
  Codigo: 'Codigo',
  ID_Empresa: 'ID_Empresa',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_empresas_odbcScalarFieldEnum = {
  Codigo: 'Codigo',
  Servidor: 'Servidor',
  DataBaseName: 'DataBaseName',
  Usuario: 'Usuario',
  Porta: 'Porta',
  IDUSer: 'IDUSer',
  DHU: 'DHU',
  Ultima_Comunicacao_Mentor: 'Ultima_Comunicacao_Mentor'
};

exports.Prisma.Tb_empresas_pedido_onlineScalarFieldEnum = {
  Codigo: 'Codigo',
  IP: 'IP',
  DataBase_Name: 'DataBase_Name',
  Usuario: 'Usuario',
  Porta: 'Porta',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_empresas_wsScalarFieldEnum = {
  Codigo: 'Codigo',
  Ambiente: 'Ambiente',
  Sigla_WS_NF: 'Sigla_WS_NF',
  Sigla_WS_NFCe: 'Sigla_WS_NFCe',
  Sigla_WS_CTe: 'Sigla_WS_CTe',
  CSC_Producao: 'CSC_Producao',
  CSC_Homologacao: 'CSC_Homologacao',
  Token_Producao: 'Token_Producao',
  Token_Homologacao: 'Token_Homologacao',
  RNTRC: 'RNTRC',
  Serie_NFe: 'Serie_NFe',
  Serie_NFCe: 'Serie_NFCe',
  Serie_CTe: 'Serie_CTe',
  Serie_MDFe: 'Serie_MDFe',
  Certificado: 'Certificado',
  Validade_Certificado: 'Validade_Certificado',
  Licenca_NFe_NFCe: 'Licenca_NFe_NFCe',
  Licenca_CTe: 'Licenca_CTe',
  Licenca_MDFe: 'Licenca_MDFe',
  URL_Estado_NFCe: 'URL_Estado_NFCe',
  URL_Consulta_NFCe: 'URL_Consulta_NFCe',
  URL_Cte: 'URL_Cte',
  CPF_CNPJ_Contador: 'CPF_CNPJ_Contador',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Token_IBPT: 'Token_IBPT',
  Timer_NFCe: 'Timer_NFCe',
  API_uMovMe: 'API_uMovMe',
  API_uMovMe_Data_Inicial: 'API_uMovMe_Data_Inicial'
};

exports.Prisma.Tb_financeiro_canal_pagamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Nome: 'Nome',
  Solicita_Dados_PIX: 'Solicita_Dados_PIX',
  Solicita_Portador: 'Solicita_Portador',
  Solicita_Linha_Digitavel: 'Solicita_Linha_Digitavel',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  Ativo: 'Ativo',
  Tipo_Baixa: 'Tipo_Baixa'
};

exports.Prisma.Tb_financeiro_dadosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Documento: 'Documento',
  Data_Emissao: 'Data_Emissao',
  Hora_Emissao: 'Hora_Emissao',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Valor: 'Valor',
  Observacao: 'Observacao',
  IDEmpresa: 'IDEmpresa',
  IDUSer: 'IDUSer',
  RegExcluido: 'RegExcluido',
  CRP: 'CRP',
  Arquivo_Remessa: 'Arquivo_Remessa',
  Origem_Fat: 'Origem_Fat',
  Acrescimo_Bandeira: 'Acrescimo_Bandeira',
  Desconto_Fatura: 'Desconto_Fatura',
  Acrescimo_Fatura: 'Acrescimo_Fatura'
};

exports.Prisma.Tb_financeiro_faturasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Financeiro: 'Id_Financeiro',
  Id_Parcela: 'Id_Parcela',
  Id_Novo_Financeiro: 'Id_Novo_Financeiro'
};

exports.Prisma.Tb_financeiro_parcelasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Financeiro: 'Id_Financeiro',
  Parcela: 'Parcela',
  Valor: 'Valor',
  Valor_Atual: 'Valor_Atual',
  Vencimento: 'Vencimento',
  Valor_Baixado: 'Valor_Baixado',
  Valor_Desconto: 'Valor_Desconto',
  Valor_Acrescimo: 'Valor_Acrescimo',
  Id_Portador: 'Id_Portador',
  Status: 'Status',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido',
  Revisado_CR: 'Revisado_CR',
  Baixa_Parcial: 'Baixa_Parcial',
  Data_Baixado: 'Data_Baixado',
  Dias_Atraso: 'Dias_Atraso',
  Vencimento_Original: 'Vencimento_Original',
  IDUser_Baixa: 'IDUser_Baixa',
  Origem_Fatura: 'Origem_Fatura',
  Observacao_Baixa: 'Observacao_Baixa',
  ID_Fechamento: 'ID_Fechamento',
  Nosso_Numero: 'Nosso_Numero',
  Linha_Digitavel: 'Linha_Digitavel',
  Barras: 'Barras',
  Valor_Abatimento: 'Valor_Abatimento',
  ID_Remessas: 'ID_Remessas',
  Tipo_Documento_Baixa: 'Tipo_Documento_Baixa',
  Id_Bandeira: 'Id_Bandeira',
  Taxa_Bandeira: 'Taxa_Bandeira',
  Cartao_Conciliado: 'Cartao_Conciliado',
  Id_Conciliacao_Cartao: 'Id_Conciliacao_Cartao',
  Juros: 'Juros',
  Multa: 'Multa',
  Id_Canal_Pagamento: 'Id_Canal_Pagamento',
  Id_Cartao: 'Id_Cartao',
  Cartorio: 'Cartorio',
  Id_Original_Baixa: 'Id_Original_Baixa'
};

exports.Prisma.Tb_financeiro_vinculosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Financeiro: 'Id_Financeiro',
  Id_Vinculo: 'Id_Vinculo',
  Origem: 'Origem'
};

exports.Prisma.Tb_formas_pagamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  N_Parcelas: 'N_Parcelas',
  N_Dias_Primeira: 'N_Dias_Primeira',
  N_Dias_Intervalo: 'N_Dias_Intervalo',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  TEF: 'TEF',
  Multa_P: 'Multa_P',
  Juros_AM: 'Juros_AM',
  Juros_AD: 'Juros_AD',
  Carencia: 'Carencia',
  ID_Carteira: 'ID_Carteira',
  Id_Portador: 'Id_Portador',
  Acrescimo_P: 'Acrescimo_P',
  Acresimo_R: 'Acresimo_R',
  Desconto_P: 'Desconto_P',
  Desconto_R: 'Desconto_R',
  Abatimento: 'Abatimento',
  Uti_Entradas: 'Uti_Entradas',
  Uti_Saidas: 'Uti_Saidas',
  Uti_Despesas: 'Uti_Despesas',
  Uti_Fatura: 'Uti_Fatura',
  Permite_Troco: 'Permite_Troco',
  Permite_Contra_Vale: 'Permite_Contra_Vale',
  Detalhes_PDV_Fechamento: 'Detalhes_PDV_Fechamento',
  Fiscal_indPag_Opc: 'Fiscal_indPag_Opc',
  Fiscal_tPag: 'Fiscal_tPag',
  Fiscal_tpIntegra_Opc: 'Fiscal_tpIntegra_Opc',
  Fiscal_xPag_Opc: 'Fiscal_xPag_Opc',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Integracao_SIP: 'Integracao_SIP',
  Recebe_Vale_Credito: 'Recebe_Vale_Credito',
  Uti_Quitacao: 'Uti_Quitacao',
  Considerar_Desconto_Pontualidade: 'Considerar_Desconto_Pontualidade',
  Preferencia_Fiscal: 'Preferencia_Fiscal',
  Uti_NFe: 'Uti_NFe',
  Abre_Gaveta: 'Abre_Gaveta',
  Integra_Fechamento: 'Integra_Fechamento',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Utiliza_Movel: 'Utiliza_Movel'
};

exports.Prisma.Tb_formas_pagamento_desconto_autorizadoScalarFieldEnum = {
  Codigo: 'Codigo',
  id_Forma_Pagamento: 'id_Forma_Pagamento',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_formas_pagamento_empresasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Id_Empresa: 'Id_Empresa',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_formas_pagamento_oferta_autorizadoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_formas_pagamento_usuariosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Id_Usuario: 'Id_Usuario',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_formulario_permissaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Legenda: 'Legenda',
  Formulario: 'Formulario'
};

exports.Prisma.Tb_formulario_permissao_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Formulario: 'Id_Formulario',
  Objeto: 'Objeto',
  Legenda: 'Legenda',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_grade_fiscalScalarFieldEnum = {
  Codigo: 'Codigo',
  ID_NCM: 'ID_NCM',
  ID_Operacao: 'ID_Operacao',
  CFOP: 'CFOP',
  ICMS_Orig: 'ICMS_Orig',
  ICMS_CST_SN: 'ICMS_CST_SN',
  ICMS_CST_NO: 'ICMS_CST_NO',
  ICMS_BCPercentual: 'ICMS_BCPercentual',
  ICMS_modBC: 'ICMS_modBC',
  ICMS_pRedBC: 'ICMS_pRedBC',
  ICMS_pICMS: 'ICMS_pICMS',
  ICMS_HabilitaICMSST: 'ICMS_HabilitaICMSST',
  ICMS_modBCST: 'ICMS_modBCST',
  ICMS_pMVAST: 'ICMS_pMVAST',
  ICMS_pRedBCST: 'ICMS_pRedBCST',
  ICMS_pICMSST: 'ICMS_pICMSST',
  ICMS_Habilita_ICMSDeson: 'ICMS_Habilita_ICMSDeson',
  ICMS_motDesICMS: 'ICMS_motDesICMS',
  ICMS_pBCOp: 'ICMS_pBCOp',
  ICMS_Habilita_ICMSSN: 'ICMS_Habilita_ICMSSN',
  ICMS_pCredICMSSN: 'ICMS_pCredICMSSN',
  ICMS_Habilita_ICMSFCP: 'ICMS_Habilita_ICMSFCP',
  ICMS_pDif: 'ICMS_pDif',
  ICMS_cBenef: 'ICMS_cBenef',
  ICMS_pFCP: 'ICMS_pFCP',
  ICMS_pFCPST: 'ICMS_pFCPST',
  ICMS_pFCPSTRet: 'ICMS_pFCPSTRet',
  ICMS_pFCPDif: 'ICMS_pFCPDif',
  ICMS_pST: 'ICMS_pST',
  IPIcEnq: 'IPIcEnq',
  IPI_Habilita: 'IPI_Habilita',
  IPI_Acao_Valor_ICMS: 'IPI_Acao_Valor_ICMS',
  IPI_BCPercentual: 'IPI_BCPercentual',
  IPI_CST: 'IPI_CST',
  IPI_pIPI: 'IPI_pIPI',
  PIS_Acao_Valor_ICMS: 'PIS_Acao_Valor_ICMS',
  PIS_BCPercentual: 'PIS_BCPercentual',
  PIS_CST: 'PIS_CST',
  PIS_pPIS: 'PIS_pPIS',
  COFINS_Acao_Valor_ICMS: 'COFINS_Acao_Valor_ICMS',
  COFINS_BCPercentual: 'COFINS_BCPercentual',
  COFINS_CST: 'COFINS_CST',
  COFINS_pCOFINS: 'COFINS_pCOFINS',
  ICMSCF_pFCPUFDest: 'ICMSCF_pFCPUFDest',
  ICMSCF_pICMSUFDest: 'ICMSCF_pICMSUFDest',
  ICMSCF_pICMSInter: 'ICMSCF_pICMSInter',
  Data_Alterado: 'Data_Alterado',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Observacao: 'Observacao',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Padrao_Dev_Estadual: 'Padrao_Dev_Estadual',
  Padrao_Dev_Interestadual: 'Padrao_Dev_Interestadual',
  cUF_Origem_Combustivel: 'cUF_Origem_Combustivel',
  Padrao_Sistemas_Integracao: 'Padrao_Sistemas_Integracao',
  Padrao_Sistemas_Integracao_Combustivel: 'Padrao_Sistemas_Integracao_Combustivel'
};

exports.Prisma.Tb_inutilizacao_fiscalScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Modelo: 'Modelo',
  IDEmpresa: 'IDEmpresa',
  Serie: 'Serie',
  Numero_Documento: 'Numero_Documento',
  nProtocolo: 'nProtocolo',
  dProtocolo: 'dProtocolo',
  cStat: 'cStat',
  Status: 'Status',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_inventarioScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Abertura: 'Data_Abertura',
  Hora_Abertura: 'Hora_Abertura',
  Numero_Arquivos: 'Numero_Arquivos',
  Data_Fechamento: 'Data_Fechamento',
  Hora_Fechamento: 'Hora_Fechamento',
  Numero_Itens: 'Numero_Itens',
  Status: 'Status',
  Valor_Custo: 'Valor_Custo',
  Valor_Venda: 'Valor_Venda',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Importado_Mentor: 'Importado_Mentor',
  Dados_Validados: 'Dados_Validados',
  Modelo_Inventario: 'Modelo_Inventario'
};

exports.Prisma.Tb_inventario_conclusaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Inventario: 'Id_Inventario',
  Id_Produto: 'Id_Produto',
  Auditoria: 'Auditoria',
  Contagem_Adicional: 'Contagem_Adicional',
  Saidas: 'Saidas',
  Saldo: 'Saldo',
  Processado: 'Processado',
  Data_Processamento: 'Data_Processamento',
  Hora_Processamento: 'Hora_Processamento',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Entradas: 'Entradas'
};

exports.Prisma.Tb_inventario_exclusoes_departamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Inventario: 'Id_Inventario',
  Id_Departamento: 'Id_Departamento'
};

exports.Prisma.Tb_inventario_nao_coletadoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Inventario: 'Id_Inventario',
  Id_Produto: 'Id_Produto',
  RegExcluido: 'RegExcluido',
  Estoque_Processado: 'Estoque_Processado',
  RegExcludio: 'RegExcludio'
};

exports.Prisma.Tb_inventario_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Inventario: 'Id_Inventario',
  Arquivo: 'Arquivo',
  Data: 'Data',
  Hora: 'Hora',
  Codigo_Barras: 'Codigo_Barras',
  Quantidade: 'Quantidade',
  RegExcluido: 'RegExcluido',
  Status_Produto: 'Status_Produto',
  ID_Produto: 'ID_Produto',
  Importado_Mentor: 'Importado_Mentor',
  Tipo_Lancamento: 'Tipo_Lancamento',
  Estoque_Processado: 'Estoque_Processado',
  Origem_Coleta: 'Origem_Coleta',
  ID_Origem_Coleta: 'ID_Origem_Coleta',
  Tempo: 'Tempo'
};

exports.Prisma.Tb_local_retiradaScalarFieldEnum = {
  Codigo: 'Codigo',
  Local: 'Local',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_log_alteracaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Tipo: 'Tipo',
  Tabela: 'Tabela',
  ID_Alterado: 'ID_Alterado',
  Alteracao: 'Alteracao',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_logoutScalarFieldEnum = {
  Codigo: 'Codigo',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_ncmScalarFieldEnum = {
  Codigo: 'Codigo',
  NCM: 'NCM',
  Descricao: 'Descricao',
  Tributos: 'Tributos',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Tributos_Nacional: 'Tributos_Nacional',
  Tributos_Estadual: 'Tributos_Estadual',
  Tributos_Municipal: 'Tributos_Municipal'
};

exports.Prisma.Tb_ncm_novoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  NCM: 'NCM',
  DHU: 'DHU',
  IDUser: 'IDUser',
  CST_ICMS: 'CST_ICMS'
};

exports.Prisma.Tb_nfceScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  ide_cUF: 'ide_cUF',
  ide_natOp: 'ide_natOp',
  ide_mode: 'ide_mode',
  ide_serie: 'ide_serie',
  ide_nNF: 'ide_nNF',
  ide_dhEmi: 'ide_dhEmi',
  ide_dhSaiEnt: 'ide_dhSaiEnt',
  ide_Hora: 'ide_Hora',
  ide_tpNF: 'ide_tpNF',
  ide_idDest: 'ide_idDest',
  ide_cMunFG: 'ide_cMunFG',
  ide_tpImp: 'ide_tpImp',
  ide_tpAmb: 'ide_tpAmb',
  ide_finNFe: 'ide_finNFe',
  ide_tpEmis: 'ide_tpEmis',
  ide_dhCont: 'ide_dhCont',
  ide_xJust: 'ide_xJust',
  ide_indFinal: 'ide_indFinal',
  ide_indPres: 'ide_indPres',
  ide_indIntermed: 'ide_indIntermed',
  Id_Cliente: 'Id_Cliente',
  dest_CNPJ: 'dest_CNPJ',
  dest_CPF: 'dest_CPF',
  dest_xNome: 'dest_xNome',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_cPais: 'dest_cPais',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_indIEDest: 'dest_indIEDest',
  dest_IE: 'dest_IE',
  dest_IESUF: 'dest_IESUF',
  dest_IM: 'dest_IM',
  dest_eMail: 'dest_eMail',
  totalICMS_vBC: 'totalICMS_vBC',
  totalICMS_vICMS: 'totalICMS_vICMS',
  totalICMS_vBCST: 'totalICMS_vBCST',
  totalICMS_vST: 'totalICMS_vST',
  totalICMS_vProd: 'totalICMS_vProd',
  totalICMS_vSeg: 'totalICMS_vSeg',
  totalICMS_vFrete: 'totalICMS_vFrete',
  totalICMS_vDesc: 'totalICMS_vDesc',
  totalICMS_vII: 'totalICMS_vII',
  totalICMS_vIPI: 'totalICMS_vIPI',
  totalICMS_vPIS: 'totalICMS_vPIS',
  totalICMS_vCOFINS: 'totalICMS_vCOFINS',
  totalICMS_vOutro: 'totalICMS_vOutro',
  totalICMS_vNF: 'totalICMS_vNF',
  totalICMS_vTotTrib: 'totalICMS_vTotTrib',
  totalICMS_vICMSDeson: 'totalICMS_vICMSDeson',
  totalICMS_vICMSUFDest: 'totalICMS_vICMSUFDest',
  totalICMS_vICMSUFRemet: 'totalICMS_vICMSUFRemet',
  totalICMS_vFCPUFDest: 'totalICMS_vFCPUFDest',
  totalICMS_vFCP: 'totalICMS_vFCP',
  totalICMS_vFCPST: 'totalICMS_vFCPST',
  totalICMS_vFCPSTRet: 'totalICMS_vFCPSTRet',
  totalICMS_vIPIDevol: 'totalICMS_vIPIDevol',
  modFrete: 'modFrete',
  transporta_ID: 'transporta_ID',
  transporta_CNPJ: 'transporta_CNPJ',
  transporta_CPF: 'transporta_CPF',
  transporta_xNome: 'transporta_xNome',
  transporta_IE: 'transporta_IE',
  transporta_xEnder: 'transporta_xEnder',
  transporta_xMun: 'transporta_xMun',
  transporta_UF: 'transporta_UF',
  vol_qVol: 'vol_qVol',
  vol_esp: 'vol_esp',
  vol_marca: 'vol_marca',
  vol_nvol: 'vol_nvol',
  vol_pesoL: 'vol_pesoL',
  vol_pesoB: 'vol_pesoB',
  infCpl: 'infCpl',
  ChaveNFe: 'ChaveNFe',
  Recibo: 'Recibo',
  cStat_Autorizacao: 'cStat_Autorizacao',
  DH_Autorizacao: 'DH_Autorizacao',
  xJust_Cancelamento: 'xJust_Cancelamento',
  Protocolo_Cancelamento: 'Protocolo_Cancelamento',
  cStat_Cancelamento: 'cStat_Cancelamento',
  DH_Cancelamento: 'DH_Cancelamento',
  Status: 'Status',
  URL_NFCe: 'URL_NFCe',
  XML_Gerado: 'XML_Gerado',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Id_Venda: 'Id_Venda',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  Contador_Transmissor: 'Contador_Transmissor',
  Id_lote: 'Id_lote',
  Importado_Mentor: 'Importado_Mentor',
  Motivo_cStat: 'Motivo_cStat',
  Protocolo: 'Protocolo',
  qBCMonoRet: 'qBCMonoRet'
};

exports.Prisma.Tb_nfce_assinadosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFCe: 'Id_NFCe',
  XML_Assinado: 'XML_Assinado'
};

exports.Prisma.Tb_nfce_autxmlScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFCe: 'Id_NFCe',
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfce_detpagamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFCe: 'Id_NFCe',
  indPag_Opc: 'indPag_Opc',
  tPag: 'tPag',
  xPag_Opc: 'xPag_Opc',
  vPag: 'vPag',
  vTroco: 'vTroco',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  N_Parcelas: 'N_Parcelas',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.Tb_nfce_duplicatasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFCe: 'Id_NFCe',
  nDup: 'nDup',
  dVenc: 'dVenc',
  vDup: 'vDup',
  IdDet: 'IdDet',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfce_itemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFCe: 'Id_NFCe',
  Id_Produto: 'Id_Produto',
  Id_Produto_Pai: 'Id_Produto_Pai',
  Id_Grade: 'Id_Grade',
  prod_cProd: 'prod_cProd',
  prod_cEAN: 'prod_cEAN',
  prod_xProd: 'prod_xProd',
  prod_NCM: 'prod_NCM',
  prod_NVE: 'prod_NVE',
  prod_CEST: 'prod_CEST',
  prod_CNPJFab: 'prod_CNPJFab',
  prod_cBenef: 'prod_cBenef',
  prod_ExTIPI: 'prod_ExTIPI',
  prod_CFOP: 'prod_CFOP',
  prod_uCOM: 'prod_uCOM',
  prod_qCom: 'prod_qCom',
  prod_vUnCom: 'prod_vUnCom',
  prod_vProd: 'prod_vProd',
  prod_cEANTrib: 'prod_cEANTrib',
  prod_uTrib: 'prod_uTrib',
  prod_qTrib: 'prod_qTrib',
  prod_vUnTrib: 'prod_vUnTrib',
  prod_vFrete: 'prod_vFrete',
  prod_vSeguro: 'prod_vSeguro',
  prod_vDesc: 'prod_vDesc',
  prod_vOutro: 'prod_vOutro',
  prod_indTot: 'prod_indTot',
  prod_xPed: 'prod_xPed',
  prod_nItemPed: 'prod_nItemPed',
  infAdprod: 'infAdprod',
  vTotTrib: 'vTotTrib',
  Hab_IPI: 'Hab_IPI',
  ipi_cEnq: 'ipi_cEnq',
  IPI_CST: 'IPI_CST',
  ipi_vBC: 'ipi_vBC',
  IPI_pIPI: 'IPI_pIPI',
  ipi_vIPI: 'ipi_vIPI',
  PIS_CST: 'PIS_CST',
  pis_vBC: 'pis_vBC',
  PIS_pPIS: 'PIS_pPIS',
  pis_vPIS: 'pis_vPIS',
  COFINS_CST: 'COFINS_CST',
  COFINS_vBC: 'COFINS_vBC',
  COFINS_pCOFINS: 'COFINS_pCOFINS',
  cofins_vCOFINS: 'cofins_vCOFINS',
  icms_orig: 'icms_orig',
  icms_CST: 'icms_CST',
  icms_vBCSTRet_Opc: 'icms_vBCSTRet_Opc',
  icms_pST_Opc: 'icms_pST_Opc',
  icms_vICMSSbustituto_Opc: 'icms_vICMSSbustituto_Opc',
  icms_vICMSSTRet_Opc: 'icms_vICMSSTRet_Opc',
  icms_vBCFCPSTRet_Opc: 'icms_vBCFCPSTRet_Opc',
  icms_pFCPSTRet_Opc: 'icms_pFCPSTRet_Opc',
  icms_vFCPSTRet_Opc: 'icms_vFCPSTRet_Opc',
  icms_pRedBCEfet_Opc: 'icms_pRedBCEfet_Opc',
  icms_vBCEfet_Opc: 'icms_vBCEfet_Opc',
  icms_vICMSEfet_Opc: 'icms_vICMSEfet_Opc',
  icms_vBCSTDest_Opc: 'icms_vBCSTDest_Opc',
  icms_vICMSSTDest_Opc: 'icms_vICMSSTDest_Opc',
  icms_modBC: 'icms_modBC',
  icms_pRedBC: 'icms_pRedBC',
  icms_vBC: 'icms_vBC',
  icms_pICMS: 'icms_pICMS',
  icms_vICMS: 'icms_vICMS',
  icms_modBCST: 'icms_modBCST',
  icms_pMVAST: 'icms_pMVAST',
  icms_pRedBCST: 'icms_pRedBCST',
  icms_vBCST: 'icms_vBCST',
  icms_pICMSST: 'icms_pICMSST',
  icms_vICMSST: 'icms_vICMSST',
  icms_UFST: 'icms_UFST',
  icms_pBCop: 'icms_pBCop',
  icms_vBCSTRet: 'icms_vBCSTRet',
  icms_vICMSSTRet: 'icms_vICMSSTRet',
  icms_motDesICMS: 'icms_motDesICMS',
  icms_vBCSTDest: 'icms_vBCSTDest',
  icms_vICMSSTDest: 'icms_vICMSSTDest',
  icms_pCredSN: 'icms_pCredSN',
  icms_vCredICMSSN: 'icms_vCredICMSSN',
  icms_vICMSDeson: 'icms_vICMSDeson',
  icms_vICMSOp: 'icms_vICMSOp',
  icms_pDif: 'icms_pDif',
  icms_vICMSDif: 'icms_vICMSDif',
  icms_vBCFCP: 'icms_vBCFCP',
  icms_pFCP: 'icms_pFCP',
  icms_vFCP: 'icms_vFCP',
  icms_vBCFCPST: 'icms_vBCFCPST',
  icms_pFCPST: 'icms_pFCPST',
  icms_vFCPST: 'icms_vFCPST',
  icms_vBCFCPSTRet: 'icms_vBCFCPSTRet',
  icms_pFCPSTRet: 'icms_pFCPSTRet',
  icms_vFCPSTRet: 'icms_vFCPSTRet',
  icms_pST: 'icms_pST',
  icms_pFCPDif: 'icms_pFCPDif',
  icms_vFCPDif: 'icms_vFCPDif',
  icms_vFCPEfet: 'icms_vFCPEfet',
  icms_vICMSSTDeson: 'icms_vICMSSTDeson',
  icms_motDesICMSST: 'icms_motDesICMSST',
  icms_vBCICMSSTDest: 'icms_vBCICMSSTDest',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  vTotTrib_Nacional: 'vTotTrib_Nacional',
  vTotTrib_Estadual: 'vTotTrib_Estadual',
  vTotTrib_Municipal: 'vTotTrib_Municipal',
  COFINS_vBC_New: 'COFINS_vBC_New',
  COFINS_pCOFINS_New: 'COFINS_pCOFINS_New',
  PIS_vBC_New: 'PIS_vBC_New',
  PIS_pPIS_New: 'PIS_pPIS_New',
  Importado_Mentor: 'Importado_Mentor',
  adRemICMSRet: 'adRemICMSRet',
  vICMSMonoRet: 'vICMSMonoRet',
  qBCMonoRet: 'qBCMonoRet'
};

exports.Prisma.Tb_nfce_loteScalarFieldEnum = {
  Codigo: 'Codigo',
  DH_Criacao: 'DH_Criacao',
  Recibo: 'Recibo'
};

exports.Prisma.Tb_nfeScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  ide_cUF: 'ide_cUF',
  ide_natOp: 'ide_natOp',
  ide_mode: 'ide_mode',
  ide_serie: 'ide_serie',
  ide_nNF: 'ide_nNF',
  ide_dhEmi: 'ide_dhEmi',
  ide_dhSaiEnt: 'ide_dhSaiEnt',
  ide_Hora: 'ide_Hora',
  ide_tpNF: 'ide_tpNF',
  ide_idDest: 'ide_idDest',
  ide_cMunFG: 'ide_cMunFG',
  ide_tpImp: 'ide_tpImp',
  ide_tpAmb: 'ide_tpAmb',
  ide_finNFe: 'ide_finNFe',
  ide_tpEmis: 'ide_tpEmis',
  ide_dhCont: 'ide_dhCont',
  ide_xJust: 'ide_xJust',
  ide_indFinal: 'ide_indFinal',
  ide_indPres: 'ide_indPres',
  ide_indIntermed: 'ide_indIntermed',
  Id_Cliente: 'Id_Cliente',
  dest_CNPJ: 'dest_CNPJ',
  dest_CPF: 'dest_CPF',
  dest_xNome: 'dest_xNome',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_cPais: 'dest_cPais',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_indIEDest: 'dest_indIEDest',
  dest_IE: 'dest_IE',
  dest_IESUF: 'dest_IESUF',
  dest_IM: 'dest_IM',
  dest_eMail: 'dest_eMail',
  totalICMS_vBC: 'totalICMS_vBC',
  totalICMS_vICMS: 'totalICMS_vICMS',
  totalICMS_vBCST: 'totalICMS_vBCST',
  totalICMS_vST: 'totalICMS_vST',
  totalICMS_vProd: 'totalICMS_vProd',
  totalICMS_vSeg: 'totalICMS_vSeg',
  totalICMS_vFrete: 'totalICMS_vFrete',
  totalICMS_vDesc: 'totalICMS_vDesc',
  totalICMS_vII: 'totalICMS_vII',
  totalICMS_vIPI: 'totalICMS_vIPI',
  totalICMS_vPIS: 'totalICMS_vPIS',
  totalICMS_vCOFINS: 'totalICMS_vCOFINS',
  totalICMS_vOutro: 'totalICMS_vOutro',
  totalICMS_vNF: 'totalICMS_vNF',
  totalICMS_vTotTrib: 'totalICMS_vTotTrib',
  totalICMS_vICMSDeson: 'totalICMS_vICMSDeson',
  totalICMS_vICMSUFDest: 'totalICMS_vICMSUFDest',
  totalICMS_vICMSUFRemet: 'totalICMS_vICMSUFRemet',
  totalICMS_vFCPUFDest: 'totalICMS_vFCPUFDest',
  totalICMS_vFCP: 'totalICMS_vFCP',
  totalICMS_vFCPST: 'totalICMS_vFCPST',
  totalICMS_vFCPSTRet: 'totalICMS_vFCPSTRet',
  totalICMS_vIPIDevol: 'totalICMS_vIPIDevol',
  modFrete: 'modFrete',
  transporta_ID: 'transporta_ID',
  transporta_CNPJ: 'transporta_CNPJ',
  transporta_CPF: 'transporta_CPF',
  transporta_xNome: 'transporta_xNome',
  transporta_IE: 'transporta_IE',
  transporta_xEnder: 'transporta_xEnder',
  transporta_xMun: 'transporta_xMun',
  transporta_UF: 'transporta_UF',
  vol_qVol: 'vol_qVol',
  vol_esp: 'vol_esp',
  vol_marca: 'vol_marca',
  vol_nvol: 'vol_nvol',
  vol_pesoL: 'vol_pesoL',
  vol_pesoB: 'vol_pesoB',
  infCpl: 'infCpl',
  ChaveNFe: 'ChaveNFe',
  Recibo: 'Recibo',
  Protocolo: 'Protocolo',
  cStat_Autorizacao: 'cStat_Autorizacao',
  DH_Autorizacao: 'DH_Autorizacao',
  xJust_Cancelamento: 'xJust_Cancelamento',
  Protocolo_Cancelamento: 'Protocolo_Cancelamento',
  cStat_Cancelamento: 'cStat_Cancelamento',
  DH_Cancelamento: 'DH_Cancelamento',
  Status: 'Status',
  XML_Gerado: 'XML_Gerado',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  RegConfirmado: 'RegConfirmado',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Info_IRRF: 'Info_IRRF'
};

exports.Prisma.Tb_nfe_autxmlScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfe_cceScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  txtCorrecao: 'txtCorrecao',
  nroCorrecao: 'nroCorrecao',
  dataCorrecao: 'dataCorrecao',
  horaCorrecao: 'horaCorrecao',
  nProtocolo: 'nProtocolo',
  dhProtocolo: 'dhProtocolo',
  cStat: 'cStat',
  Status: 'Status',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfe_defenderScalarFieldEnum = {
  Codigo: 'Codigo',
  maxNSU: 'maxNSU',
  ultNSU: 'ultNSU',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfe_defender_dadosScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Consulta: 'Data_Consulta',
  Emissao: 'Emissao',
  Hora: 'Hora',
  Modelo: 'Modelo',
  Serie: 'Serie',
  nNF: 'nNF',
  ChaveNFe: 'ChaveNFe',
  CNPJ_Emitente: 'CNPJ_Emitente',
  Id_Fornecedor: 'Id_Fornecedor',
  Status_Fornecedor: 'Status_Fornecedor',
  Valor: 'Valor',
  Entrada_Ok: 'Entrada_Ok',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Fornecedor: 'Fornecedor',
  XML_Path: 'XML_Path',
  Status_Organizacao: 'Status_Organizacao',
  UF: 'UF',
  NF_Cancelada: 'NF_Cancelada',
  XML_Organizado: 'XML_Organizado'
};

exports.Prisma.Tb_nfe_defender_resumoScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  IDEmpresa: 'IDEmpresa',
  ChaveNFe: 'ChaveNFe',
  CNPJ_Emitente: 'CNPJ_Emitente',
  xNome_Emitente: 'xNome_Emitente',
  IE_Emitente: 'IE_Emitente',
  Valor: 'Valor',
  Data_Emissao: 'Data_Emissao',
  Protocolo: 'Protocolo',
  DHU: 'DHU'
};

exports.Prisma.Tb_nfe_detpagamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  indPag_Opc: 'indPag_Opc',
  tPag: 'tPag',
  xPag_Opc: 'xPag_Opc',
  vPag: 'vPag',
  vTroco: 'vTroco',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  N_Parcelas: 'N_Parcelas',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Liberado_para_Servidor: 'Liberado_para_Servidor'
};

exports.Prisma.Tb_nfe_duplicatasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  nDup: 'nDup',
  dVenc: 'dVenc',
  vDup: 'vDup',
  IdDet: 'IdDet',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Liberado_para_Servidor: 'Liberado_para_Servidor'
};

exports.Prisma.Tb_nfe_itemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  Id_Produto: 'Id_Produto',
  Id_Produto_Pai: 'Id_Produto_Pai',
  Id_Grade: 'Id_Grade',
  prod_cProd: 'prod_cProd',
  prod_cEAN: 'prod_cEAN',
  prod_xProd: 'prod_xProd',
  prod_NCM: 'prod_NCM',
  prod_NVE: 'prod_NVE',
  prod_CEST: 'prod_CEST',
  prod_CNPJFab: 'prod_CNPJFab',
  prod_cBenef: 'prod_cBenef',
  prod_ExTIPI: 'prod_ExTIPI',
  prod_CFOP: 'prod_CFOP',
  prod_uCOM: 'prod_uCOM',
  prod_qCom: 'prod_qCom',
  prod_vUnCom: 'prod_vUnCom',
  prod_vProd: 'prod_vProd',
  prod_cEANTrib: 'prod_cEANTrib',
  prod_uTrib: 'prod_uTrib',
  prod_qTrib: 'prod_qTrib',
  prod_vUnTrib: 'prod_vUnTrib',
  prod_vFrete: 'prod_vFrete',
  prod_vSeguro: 'prod_vSeguro',
  prod_vDesc: 'prod_vDesc',
  prod_vOutro: 'prod_vOutro',
  prod_indTot: 'prod_indTot',
  prod_xPed: 'prod_xPed',
  prod_nItemPed: 'prod_nItemPed',
  infAdprod: 'infAdprod',
  vTotTrib: 'vTotTrib',
  Hab_IPI: 'Hab_IPI',
  ipi_cEnq: 'ipi_cEnq',
  IPI_CST: 'IPI_CST',
  ipi_vBC: 'ipi_vBC',
  IPI_pIPI: 'IPI_pIPI',
  ipi_vIPI: 'ipi_vIPI',
  PIS_CST: 'PIS_CST',
  pis_vBC: 'pis_vBC',
  PIS_pPIS: 'PIS_pPIS',
  pis_vPIS: 'pis_vPIS',
  COFINS_CST: 'COFINS_CST',
  COFINS_vBC: 'COFINS_vBC',
  COFINS_pCOFINS: 'COFINS_pCOFINS',
  cofins_vCOFINS: 'cofins_vCOFINS',
  icms_orig: 'icms_orig',
  icms_CST: 'icms_CST',
  icms_vBCSTRet_Opc: 'icms_vBCSTRet_Opc',
  icms_pST_Opc: 'icms_pST_Opc',
  icms_vICMSSbustituto_Opc: 'icms_vICMSSbustituto_Opc',
  icms_vICMSSTRet_Opc: 'icms_vICMSSTRet_Opc',
  icms_vBCFCPSTRet_Opc: 'icms_vBCFCPSTRet_Opc',
  icms_pFCPSTRet_Opc: 'icms_pFCPSTRet_Opc',
  icms_vFCPSTRet_Opc: 'icms_vFCPSTRet_Opc',
  icms_pRedBCEfet_Opc: 'icms_pRedBCEfet_Opc',
  icms_vBCEfet_Opc: 'icms_vBCEfet_Opc',
  icms_vICMSEfet_Opc: 'icms_vICMSEfet_Opc',
  icms_vBCSTDest_Opc: 'icms_vBCSTDest_Opc',
  icms_vICMSSTDest_Opc: 'icms_vICMSSTDest_Opc',
  icms_modBC: 'icms_modBC',
  icms_pRedBC: 'icms_pRedBC',
  icms_vBC: 'icms_vBC',
  icms_pICMS: 'icms_pICMS',
  icms_vICMS: 'icms_vICMS',
  icms_modBCST: 'icms_modBCST',
  icms_pMVAST: 'icms_pMVAST',
  icms_pRedBCST: 'icms_pRedBCST',
  icms_vBCST: 'icms_vBCST',
  icms_pICMSST: 'icms_pICMSST',
  icms_vICMSST: 'icms_vICMSST',
  icms_UFST: 'icms_UFST',
  icms_pBCop: 'icms_pBCop',
  icms_vBCSTRet: 'icms_vBCSTRet',
  icms_vICMSSTRet: 'icms_vICMSSTRet',
  icms_motDesICMS: 'icms_motDesICMS',
  icms_vBCSTDest: 'icms_vBCSTDest',
  icms_vICMSSTDest: 'icms_vICMSSTDest',
  icms_pCredSN: 'icms_pCredSN',
  icms_vCredICMSSN: 'icms_vCredICMSSN',
  icms_vICMSDeson: 'icms_vICMSDeson',
  icms_vICMSOp: 'icms_vICMSOp',
  icms_pDif: 'icms_pDif',
  icms_vICMSDif: 'icms_vICMSDif',
  icms_vBCFCP: 'icms_vBCFCP',
  icms_pFCP: 'icms_pFCP',
  icms_vFCP: 'icms_vFCP',
  icms_vBCFCPST: 'icms_vBCFCPST',
  icms_pFCPST: 'icms_pFCPST',
  icms_vFCPST: 'icms_vFCPST',
  icms_vBCFCPSTRet: 'icms_vBCFCPSTRet',
  icms_pFCPSTRet: 'icms_pFCPSTRet',
  icms_vFCPSTRet: 'icms_vFCPSTRet',
  icms_pST: 'icms_pST',
  icms_pFCPDif: 'icms_pFCPDif',
  icms_vFCPDif: 'icms_vFCPDif',
  icms_vFCPEfet: 'icms_vFCPEfet',
  icms_vICMSSTDeson: 'icms_vICMSSTDeson',
  icms_motDesICMSST: 'icms_motDesICMSST',
  icms_vBCICMSSTDest: 'icms_vBCICMSSTDest',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  IDUser: 'IDUser',
  COFINS_vBC_New: 'COFINS_vBC_New',
  COFINS_pCOFINS_New: 'COFINS_pCOFINS_New',
  PIS_vBC_New: 'PIS_vBC_New',
  PIS_pPIS_New: 'PIS_pPIS_New',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Id_Item_Compra: 'Id_Item_Compra',
  Desconto_Venda: 'Desconto_Venda',
  Acrescimo_Venda: 'Acrescimo_Venda'
};

exports.Prisma.Tb_nfe_item_rastroScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  nLote: 'nLote',
  qLote: 'qLote',
  dFab: 'dFab',
  dVal: 'dVal'
};

exports.Prisma.Tb_nfe_mandestScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  chaveNFe: 'chaveNFe',
  tpEvento: 'tpEvento',
  xJust: 'xJust',
  cStat: 'cStat',
  nroProtocolo: 'nroProtocolo',
  dhProtocolo: 'dhProtocolo',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfe_operacao_inverso_estoqueScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  Id_Lcto_Item: 'Id_Lcto_Item',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_nfe_padraoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  Id_Empresa: 'Id_Empresa',
  modFrete: 'modFrete',
  transporta_ID: 'transporta_ID'
};

exports.Prisma.Tb_nfe_referenciaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  Tipo_Referencia: 'Tipo_Referencia',
  Chave_NFe: 'Chave_NFe',
  Chave_CTe: 'Chave_CTe',
  cUF: 'cUF',
  AAMM: 'AAMM',
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  IE: 'IE',
  Serie: 'Serie',
  nNF: 'nNF',
  RegExcluido: 'RegExcluido',
  Modelo: 'Modelo',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_nfe_solicitacao_pdvScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_PDV: 'Id_PDV',
  Id_Venda: 'Id_Venda',
  Id_Pessoa: 'Id_Pessoa',
  WhatsApp: 'WhatsApp',
  Email: 'Email',
  ID_NFe: 'ID_NFe',
  Status: 'Status',
  Tipo: 'Tipo'
};

exports.Prisma.Tb_nfe_veiculosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_NFe: 'Id_NFe',
  Tipo: 'Tipo',
  Placa: 'Placa',
  UF: 'UF',
  RNTC: 'RNTC',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_ocorrenciasScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Computador: 'Computador',
  Id_Usuario: 'Id_Usuario',
  Id_Ocorrencia: 'Id_Ocorrencia',
  Descricao: 'Descricao',
  Data_Revisao: 'Data_Revisao',
  Hora_Revisao: 'Hora_Revisao',
  Id_Usuario_Revisao: 'Id_Usuario_Revisao',
  IDEmpresa: 'IDEmpresa',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  Tempo: 'Tempo',
  Importado_Mentor: 'Importado_Mentor',
  Id_PDV: 'Id_PDV',
  Id_Venda: 'Id_Venda'
};

exports.Prisma.Tb_operacao_fiscalScalarFieldEnum = {
  Codigo: 'Codigo',
  Operacao: 'Operacao',
  Natureza: 'Natureza',
  ide_dest: 'ide_dest',
  ide_finNFe: 'ide_finNFe',
  ide_indPres: 'ide_indPres',
  ide_tpEmis: 'ide_tpEmis',
  ide_tpImp: 'ide_tpImp',
  Entrada_Saida: 'Entrada_Saida',
  Modelo: 'Modelo',
  Exporta_PDV: 'Exporta_PDV',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Id_Operacao_Inverso: 'Id_Operacao_Inverso'
};

exports.Prisma.Tb_operacao_fiscal_raiz_cnpjScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  DHU: 'DHU',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_operacao_movimentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Operacao: 'Operacao',
  Descricao_Report: 'Descricao_Report',
  Entrada_Saida_Despesa: 'Entrada_Saida_Despesa',
  Id_Operacao_NFe: 'Id_Operacao_NFe',
  Id_Operacao_NFCe: 'Id_Operacao_NFCe',
  Processo_Financeiro: 'Processo_Financeiro',
  Processo_Fiscal: 'Processo_Fiscal',
  Processo_Comissao: 'Processo_Comissao',
  Processo_Consulta_Operacao_Pessoa: 'Processo_Consulta_Operacao_Pessoa',
  Processo_Movimenta_Estoque: 'Processo_Movimenta_Estoque',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Processo_Revisao_Compra: 'Processo_Revisao_Compra',
  Confirmar_Faturamento_Saida: 'Confirmar_Faturamento_Saida',
  Processo_Incluir_Produto_Manual: 'Processo_Incluir_Produto_Manual',
  Processo_Entrada_NF_Produtor: 'Processo_Entrada_NF_Produtor',
  Saida_Preco_Custo: 'Saida_Preco_Custo',
  Exibe_Comando_Importar: 'Exibe_Comando_Importar',
  Pre_Venda_Nao_Envia_Venda: 'Pre_Venda_Nao_Envia_Venda',
  Exibe_Painel_Comprador: 'Exibe_Painel_Comprador',
  Pedido_A_faturar: 'Pedido_A_faturar',
  Tipo_Saida_VD: 'Tipo_Saida_VD',
  Tipo_Codigo_NFe: 'Tipo_Codigo_NFe',
  EntXML_Consulta_Via_Cadastro: 'EntXML_Consulta_Via_Cadastro',
  Programa_Fidelidade: 'Programa_Fidelidade',
  Nao_Informa_Pagamento: 'Nao_Informa_Pagamento',
  Indica_Representante: 'Indica_Representante',
  Exibe_Historico: 'Exibe_Historico'
};

exports.Prisma.Tb_operacao_movimento_cfopScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Operacao: 'Id_Operacao',
  CFOP: 'CFOP',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_parametros_execucaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Padrao_Balanca: 'Padrao_Balanca',
  Numero_Casas_ID_Produto_Etiqueta: 'Numero_Casas_ID_Produto_Etiqueta',
  Id_Operacao_PDV: 'Id_Operacao_PDV',
  DHU: 'DHU',
  PDV_Senha_Mult: 'PDV_Senha_Mult',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  Escreve_SQL_Sinc: 'Escreve_SQL_Sinc',
  Ir_Novo_Produto_Ao_Salvar: 'Ir_Novo_Produto_Ao_Salvar',
  Releitura_XML_Processar_Item: 'Releitura_XML_Processar_Item',
  Editar_Custo_Revisao: 'Editar_Custo_Revisao',
  Diferenca_Aceitavel_Caixa: 'Diferenca_Aceitavel_Caixa',
  Id_Operacao_PDV_NFe: 'Id_Operacao_PDV_NFe',
  Edita_Operacao_venda: 'Edita_Operacao_venda',
  Id_Operacao_Fiscal_Padrao: 'Id_Operacao_Fiscal_Padrao',
  Id_Operacao_Fiscal_Devolucao: 'Id_Operacao_Fiscal_Devolucao',
  Consultar_Financeiro_Historico: 'Consultar_Financeiro_Historico',
  Tipo_Saida_Lote: 'Tipo_Saida_Lote',
  Limite_Percentual_Alteracao_Custo: 'Limite_Percentual_Alteracao_Custo',
  Alteracao_Imediata_Custo_Revisao: 'Alteracao_Imediata_Custo_Revisao',
  Finalizadora_Pre_Venda: 'Finalizadora_Pre_Venda',
  Id_Finalizadora_Quitacao_Fatura: 'Id_Finalizadora_Quitacao_Fatura',
  Pessoa_Limite_Padrao: 'Pessoa_Limite_Padrao',
  Id_Operacao_Faturamento: 'Id_Operacao_Faturamento',
  Permite_Venda_Sem_Caixa: 'Permite_Venda_Sem_Caixa',
  Supervisor_Cancelar_Venda: 'Supervisor_Cancelar_Venda',
  Supervisor_Abrir_Caixa: 'Supervisor_Abrir_Caixa',
  Supervisor_Fechar_Caixa: 'Supervisor_Fechar_Caixa',
  Pedido_Compra_Aut_Sobreescrever: 'Pedido_Compra_Aut_Sobreescrever',
  Id_Op_Dev_Estadual: 'Id_Op_Dev_Estadual',
  Id_Op_Dev_Interestadual: 'Id_Op_Dev_Interestadual',
  Id_Operacao_Movimento_Ret: 'Id_Operacao_Movimento_Ret',
  XML_Organize: 'XML_Organize',
  Operacao_Caixa_Unico: 'Operacao_Caixa_Unico',
  Alternar_Empresa: 'Alternar_Empresa',
  Supervisor_Cancelar_Item: 'Supervisor_Cancelar_Item',
  Pgr_Fid: 'Pgr_Fid',
  Id_Forma_Pagamento_Compra_revisao: 'Id_Forma_Pagamento_Compra_revisao',
  Id_Aplicacao_Despesa: 'Id_Aplicacao_Despesa',
  Id_Aplicacao_Sub_Despesa: 'Id_Aplicacao_Sub_Despesa',
  Id_Forma_Pagamento_Despesa: 'Id_Forma_Pagamento_Despesa',
  Despesa_Gera_Financeiro: 'Despesa_Gera_Financeiro',
  Id_Aplicacao_Despesas_Juro_Multa: 'Id_Aplicacao_Despesas_Juro_Multa',
  Id_Aplicacao_Sub_Despesas_Juro_Multa: 'Id_Aplicacao_Sub_Despesas_Juro_Multa',
  Id_Aplicacao_Despesas_Cartorio: 'Id_Aplicacao_Despesas_Cartorio',
  Id_Aplicacao_Sub_Despesas_Cartorio: 'Id_Aplicacao_Sub_Despesas_Cartorio',
  Path_Send_WhatsApp: 'Path_Send_WhatsApp',
  Estoque_Unico: 'Estoque_Unico',
  Promissoria_Vencimento_Disponivel: 'Promissoria_Vencimento_Disponivel',
  tipo_Leitura_Qtd: 'tipo_Leitura_Qtd',
  Exibe_Diferenca_Fechamento_caixa: 'Exibe_Diferenca_Fechamento_caixa',
  Libera_Pedido_Baixado: 'Libera_Pedido_Baixado',
  Requer_Autenticacao_Alteracao_Custo: 'Requer_Autenticacao_Alteracao_Custo',
  Det_Fechamento_CX_Retaguarda: 'Det_Fechamento_CX_Retaguarda',
  Setar_Servidor: 'Setar_Servidor',
  Pesquisa_Produto_ID: 'Pesquisa_Produto_ID',
  Logo_Relatorio: 'Logo_Relatorio',
  Caminho_Retorno_Bancario_Processado: 'Caminho_Retorno_Bancario_Processado',
  Tipo_Preenchimento_CI: 'Tipo_Preenchimento_CI',
  Confirmacao_Item_Na_Venda: 'Confirmacao_Item_Na_Venda',
  Tipo_Padrao_Gestor: 'Tipo_Padrao_Gestor',
  Impressao_Recibo_Quitacao: 'Impressao_Recibo_Quitacao',
  Confirmar_Preco_Ao_Alterar_Margem: 'Confirmar_Preco_Ao_Alterar_Margem',
  Tipo_Consulta_Dados: 'Tipo_Consulta_Dados',
  Confirma_Nro_Parcelas_Venda: 'Confirma_Nro_Parcelas_Venda',
  Filtro_Tipo_Pessoa: 'Filtro_Tipo_Pessoa',
  Logo_Minha_Empresa: 'Logo_Minha_Empresa',
  Nome_Minha_Empresa: 'Nome_Minha_Empresa',
  Rodape_Minha_Empresa: 'Rodape_Minha_Empresa'
};

exports.Prisma.Tb_pdv_cadastroScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  IP_Rede: 'IP_Rede',
  Serie: 'Serie',
  ID_Sincronizacao: 'ID_Sincronizacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Rota_Aplicativo: 'Rota_Aplicativo',
  DHU: 'DHU',
  Id_Empresa: 'Id_Empresa',
  IDUser: 'IDUser',
  HD: 'HD',
  Caminho_TXT_Importar: 'Caminho_TXT_Importar',
  Importado_Mentor: 'Importado_Mentor',
  XML_Autorizado_Rede: 'XML_Autorizado_Rede',
  Carga_Geral_Obrigatoria: 'Carga_Geral_Obrigatoria'
};

exports.Prisma.Tb_pdv_cargasScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_pdv_cargas_txtScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Arquivo_Origem: 'Arquivo_Origem',
  Arquivo_Destino: 'Arquivo_Destino',
  PDV: 'PDV',
  Status: 'Status',
  Data_Exclusao: 'Data_Exclusao',
  xStatus: 'xStatus',
  Id_PDV: 'Id_PDV',
  Excluido: 'Excluido'
};

exports.Prisma.Tb_pdv_contra_valeScalarFieldEnum = {
  Codigo: 'Codigo',
  Emissao: 'Emissao',
  Hora: 'Hora',
  Valor: 'Valor',
  Id_Venda: 'Id_Venda',
  Id_Usuario: 'Id_Usuario',
  ID_Fechamento: 'ID_Fechamento',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_pedidos_compras_listaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  Status: 'Status',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Confirmado: 'Confirmado',
  ID_Pedido_Compra: 'ID_Pedido_Compra',
  id_Lcto_Pedido_Item: 'id_Lcto_Pedido_Item',
  Importado_Mentor: 'Importado_Mentor',
  ID_Fornecedor: 'ID_Fornecedor',
  Quantidade_Adquirida: 'Quantidade_Adquirida',
  Unitario: 'Unitario',
  Total: 'Total',
  Data_Lcto_Pedido: 'Data_Lcto_Pedido',
  Hora_Lcto_Pedido: 'Hora_Lcto_Pedido',
  Tempo_Lcto_Pedido: 'Tempo_Lcto_Pedido',
  IDUser_Comprador: 'IDUser_Comprador',
  IDEmpresa_Pedido: 'IDEmpresa_Pedido',
  IDUser_Cancelamento: 'IDUser_Cancelamento',
  Id_Compra: 'Id_Compra',
  Recebido_Parcial: 'Recebido_Parcial',
  ID_Empresa_Geradora: 'ID_Empresa_Geradora',
  ALterado: 'ALterado',
  ID_Pedido_Primario: 'ID_Pedido_Primario',
  complemento_pdd: 'complemento_pdd',
  Ped_Automatico: 'Ped_Automatico'
};

exports.Prisma.Tb_pedidos_pagamentos_stScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pedido: 'Id_Pedido',
  Id_Pagamento: 'Id_Pagamento',
  Valor: 'Valor',
  Id_Lcto: 'Id_Lcto'
};

exports.Prisma.Tb_pedidos_produtos_stScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pedido: 'Id_Pedido',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Id_Lcto: 'Id_Lcto'
};

exports.Prisma.Tb_pedidos_stScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Pedido: 'Data_Pedido',
  ID_Cliente: 'ID_Cliente',
  Tipo_Documento: 'Tipo_Documento',
  Total_Pedido: 'Total_Pedido',
  ID_Lcto: 'ID_Lcto',
  Processado: 'Processado',
  CPF_CNPJ_Nota: 'CPF_CNPJ_Nota'
};

exports.Prisma.Tb_pessoas_canal_cadastroScalarFieldEnum = {
  Codigo: 'Codigo',
  Canal: 'Canal',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU'
};

exports.Prisma.Tb_pessoas_formas_pagamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_pessoas_representante_comercialScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Nome: 'Nome',
  Telefone: 'Telefone',
  WhatsApp: 'WhatsApp',
  Email: 'Email',
  RegExcluido: 'RegExcluido',
  Empresas: 'Empresas'
};

exports.Prisma.Tb_pessoas_retencoesScalarFieldEnum = {
  Codigo: 'Codigo',
  pIRRF: 'pIRRF',
  Lei_IRRF: 'Lei_IRRF'
};

exports.Prisma.Tb_pessoas_veiculosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Tipo: 'Tipo',
  Placa: 'Placa',
  UF: 'UF',
  RNTC: 'RNTC',
  DHU: 'DHU',
  IDUSer: 'IDUSer',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_pessoas_vencimentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Dia_Faturamento: 'Dia_Faturamento',
  Dia_Vencimento: 'Dia_Vencimento',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_pgr_fidScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Cliente: 'Id_Cliente',
  Data_Inclusao: 'Data_Inclusao',
  Hora_Inclusao: 'Hora_Inclusao',
  Tempo: 'Tempo',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  Ultima_Verificacao: 'Ultima_Verificacao'
};

exports.Prisma.Tb_pgr_fid_resgateScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pgr_Fid: 'Id_Pgr_Fid',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Estoque: 'Estoque',
  Id_Lcto: 'Id_Lcto'
};

exports.Prisma.Tb_pgr_fid_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pgr_Fid: 'Id_Pgr_Fid',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Historico: 'Historico',
  Id_Venda: 'Id_Venda',
  Id_Lcto: 'Id_Lcto',
  Valor: 'Valor',
  Saldo: 'Saldo',
  IDUser: 'IDUser',
  DHU: 'DHU'
};

exports.Prisma.Tb_portadorScalarFieldEnum = {
  Codigo: 'Codigo',
  Portador: 'Portador',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Saldo: 'Saldo',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_portador_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Portador: 'Id_Portador',
  Data: 'Data',
  Hora: 'Hora',
  Documento: 'Documento',
  Historico: 'Historico',
  Valor: 'Valor',
  Saldo: 'Saldo',
  ID: 'ID',
  ID_Conta: 'ID_Conta',
  ID_Parcela: 'ID_Parcela',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Tempo: 'Tempo',
  ID_Transferencia: 'ID_Transferencia',
  Estorno_Realizado: 'Estorno_Realizado',
  Id_Origem_Estorno: 'Id_Origem_Estorno'
};

exports.Prisma.Tb_portador_transferenciasScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Id_Portador_Origem: 'Id_Portador_Origem',
  Id_Portador_Destino: 'Id_Portador_Destino',
  Id_Registro_Debito: 'Id_Registro_Debito',
  Id_Registro_Credito: 'Id_Registro_Credito',
  Historico: 'Historico',
  Valor: 'Valor',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_prestacao_servico_desacordoScalarFieldEnum = {
  Codigo: 'Codigo',
  CHave_CTe: 'CHave_CTe',
  Observacao: 'Observacao',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  cStat: 'cStat',
  nroProtocolo: 'nroProtocolo',
  dhProtocolo: 'dhProtocolo'
};

exports.Prisma.Tb_produtos_alocacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Alocacao: 'Alocacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_cliente_especialScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Id_Produto: 'Id_Produto',
  Preco_Final: 'Preco_Final',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_cliente_especial_faixaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pessoa: 'Id_Pessoa',
  Id_Produto: 'Id_Produto',
  Faixa: 'Faixa',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_codigo_barrasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Codigo_Barras: 'Codigo_Barras',
  Codigo_Barras_Caixa: 'Codigo_Barras_Caixa',
  Fator: 'Fator',
  Descricao: 'Descricao',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Complemento: 'Complemento',
  IDUser: 'IDUser',
  Alterado: 'Alterado'
};

exports.Prisma.Tb_produtos_dcbScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  N_CAS: 'N_CAS',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_produtos_departamentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Departamento: 'Departamento',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Margem_Ideal: 'Margem_Ideal',
  Markup_Ideal: 'Markup_Ideal'
};

exports.Prisma.Tb_produtos_desmembramentoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Quebra: 'Quebra',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_produtos_desmembramento_subScalarFieldEnum = {
  Codigo: 'Codigo',
  IDUser: 'IDUser',
  Id_Desmembramento: 'Id_Desmembramento',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Preco: 'Preco',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_produtos_estoqueScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Id_Produto: 'Id_Produto',
  Tabela: 'Tabela',
  Id_Registro: 'Id_Registro',
  Motivo: 'Motivo',
  Reservado: 'Reservado',
  Valor: 'Valor',
  Saldo: 'Saldo',
  DHU: 'DHU',
  IDUser: 'IDUser',
  ID_Empresa: 'ID_Empresa',
  SQL_Out: 'SQL_Out',
  Zerar: 'Zerar'
};

exports.Prisma.Tb_produtos_estoque_posicao_empresaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Id_Filial: 'Id_Filial',
  Saldo: 'Saldo',
  Tempo: 'Tempo'
};

exports.Prisma.Tb_produtos_estrutura_custoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto_Item_Compra: 'Id_Lcto_Item_Compra',
  Unitario: 'Unitario',
  Frete: 'Frete',
  Seguro: 'Seguro',
  ICMSST: 'ICMSST',
  IPI: 'IPI',
  Custo_Lista: 'Custo_Lista',
  Custo_Total: 'Custo_Total',
  Preco_Venda: 'Preco_Venda',
  Margem: 'Margem',
  Markup: 'Markup'
};

exports.Prisma.Tb_produtos_faixa_descontoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Faixa: 'Faixa',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_familiaScalarFieldEnum = {
  Codigo: 'Codigo',
  Familia: 'Familia',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_fornecedorScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Id_Pessoa: 'Id_Pessoa',
  Fator: 'Fator',
  cProd_Fornecedor: 'cProd_Fornecedor',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_produtos_grupoScalarFieldEnum = {
  Codigo: 'Codigo',
  Grupo: 'Grupo',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_imagemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Descricao: 'Descricao',
  Path: 'Path',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_lotesScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  nLote: 'nLote',
  dFab: 'dFab',
  dVal: 'dVal',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Renasem: 'Renasem'
};

exports.Prisma.Tb_produtos_lotes_estoqueScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lote: 'Id_Lote',
  Data: 'Data',
  Hora: 'Hora',
  Tabela: 'Tabela',
  Id_Registro: 'Id_Registro',
  Motivo: 'Motivo',
  IDEmpresa: 'IDEmpresa',
  Valor: 'Valor',
  Saldo: 'Saldo',
  Tempo: 'Tempo',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_manutencao_estoque_min_maxScalarFieldEnum = {
  Codigo: 'Codigo',
  Codigo_Barras: 'Codigo_Barras',
  Vendas: 'Vendas',
  Estoque_Atual: 'Estoque_Atual',
  Estoque_Minimo: 'Estoque_Minimo',
  Estoque_Maximo: 'Estoque_Maximo',
  ID_Filial: 'ID_Filial',
  ID_Produto: 'ID_Produto',
  Produto: 'Produto',
  Dias: 'Dias',
  Media: 'Media',
  Dias_Minimo: 'Dias_Minimo',
  Dias_Maximo: 'Dias_Maximo'
};

exports.Prisma.Tb_produtos_manutencao_estoque_min_max_vendasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade'
};

exports.Prisma.Tb_produtos_marcaScalarFieldEnum = {
  Codigo: 'Codigo',
  Marca: 'Marca',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_padraoScalarFieldEnum = {
  Codigo: 'Codigo',
  Pesquisa_Rapida_PDV: 'Pesquisa_Rapida_PDV',
  Id_Departamento: 'Id_Departamento',
  Id_Setor: 'Id_Setor',
  Id_Marca: 'Id_Marca',
  Id_Grupo: 'Id_Grupo',
  Id_SubGrupo: 'Id_SubGrupo',
  Id_Unidade: 'Id_Unidade',
  Id_Alocacao: 'Id_Alocacao',
  Peso: 'Peso',
  Capacidade: 'Capacidade',
  Estoque_Minimo: 'Estoque_Minimo',
  Estoque_Maximo: 'Estoque_Maximo',
  Id_Familia: 'Id_Familia',
  Id_SubFamilia: 'Id_SubFamilia'
};

exports.Prisma.Tb_produtos_pedido_onlineScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto'
};

exports.Prisma.Tb_produtos_precos_filialScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Id_Filial: 'Id_Filial',
  Preco_Venda: 'Preco_Venda',
  Data_Preco: 'Data_Preco',
  Preco_Oferta: 'Preco_Oferta',
  Data_Oferta: 'Data_Oferta',
  Data_Alterado: 'Data_Alterado',
  Ultima_Venda: 'Ultima_Venda',
  Ultima_Compra: 'Ultima_Compra',
  DHU: 'DHU',
  Data_Inicio_Oferta: 'Data_Inicio_Oferta',
  IDUser: 'IDUser',
  Estoque_Minimo: 'Estoque_Minimo',
  Estoque_Maximo: 'Estoque_Maximo',
  Custo: 'Custo',
  Data_Custo: 'Data_Custo',
  Custo_Medio: 'Custo_Medio',
  Alterado: 'Alterado',
  IDUser_Oferta: 'IDUser_Oferta',
  Limitado: 'Limitado',
  IDUser_Custo: 'IDUser_Custo',
  IDUser_Preco_venda: 'IDUser_Preco_venda'
};

exports.Prisma.Tb_produtos_receitasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.Tb_produtos_receitas_subScalarFieldEnum = {
  Codigo: 'Codigo',
  IDUser: 'IDUser',
  Id_Produto: 'Id_Produto',
  ID_Receita: 'ID_Receita',
  Quantidade: 'Quantidade',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_produtos_subfamiliaScalarFieldEnum = {
  Codigo: 'Codigo',
  id_Familia: 'id_Familia',
  SubFamilia: 'SubFamilia',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_subgrupoScalarFieldEnum = {
  Codigo: 'Codigo',
  SubGrupo: 'SubGrupo',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_tabela_precoScalarFieldEnum = {
  Codigo: 'Codigo',
  Tabela_Preco: 'Tabela_Preco',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_tabela_preco_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Tabela_Preco: 'Id_Tabela_Preco',
  Id_Produto: 'Id_Produto',
  Preco_Final: 'Preco_Final',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_tabela_preco_sub_faixaScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Tabela_Preco: 'Id_Tabela_Preco',
  Id_Produto: 'Id_Produto',
  Faixa: 'Faixa',
  Percentual_Desconto: 'Percentual_Desconto',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_produtos_unidadesScalarFieldEnum = {
  Codigo: 'Codigo',
  Unidade: 'Unidade',
  Abreviacao: 'Abreviacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_promocao_ticketScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Inicio: 'Data_Inicio',
  Data_Fim: 'Data_Fim',
  Regulamento: 'Regulamento',
  Promocao: 'Promocao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Valor_Minimo: 'Valor_Minimo',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_representante_comercialScalarFieldEnum = {
  Codigo: 'Codigo',
  Nome: 'Nome',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU'
};

exports.Prisma.Tb_sangriaScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Id_Fechamento: 'Id_Fechamento',
  Id_Supervisor: 'Id_Supervisor',
  Valor_Sangria: 'Valor_Sangria',
  IDUser: 'IDUser',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.Tb_segurancaScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  DB: 'DB',
  Destino: 'Destino',
  Excluir_Em: 'Excluir_Em',
  Status: 'Status',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_seguranca_confScalarFieldEnum = {
  Codigo: 'Codigo',
  Dias_Exclusao: 'Dias_Exclusao',
  DB: 'DB',
  Pasta_Destino: 'Pasta_Destino',
  Horario: 'Horario',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.Tb_sip_quitacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Hora: 'Hora',
  Id_Fechamento: 'Id_Fechamento',
  Id_Cliente: 'Id_Cliente',
  Nome_Cliente: 'Nome_Cliente',
  Cliente: 'Cliente',
  Valor: 'Valor',
  Id_Finalizadora: 'Id_Finalizadora',
  Troco: 'Troco'
};

exports.Prisma.Tb_sql_base_executadoScalarFieldEnum = {
  Codigo: 'Codigo',
  xSQL: 'xSQL',
  Status: 'Status',
  Ordem: 'Ordem'
};

exports.Prisma.Tb_sql_objetosScalarFieldEnum = {
  Codigo: 'Codigo',
  Formulario: 'Formulario',
  Objeto: 'Objeto',
  Colunas: 'Colunas',
  Larguras: 'Larguras',
  Tabela: 'Tabela',
  Exibe_ID: 'Exibe_ID',
  Nome: 'Nome',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_sql_objetos_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_SQL: 'Id_SQL',
  Nome_Coluna: 'Nome_Coluna',
  Largura: 'Largura',
  Visivel: 'Visivel',
  Pesquisa: 'Pesquisa',
  Ordem: 'Ordem',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_sql_sincronizacaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Comando_SQL: 'Comando_SQL',
  Mov_Saida: 'Mov_Saida',
  HORA: 'HORA',
  DATA: 'DATA',
  Liberado: 'Liberado',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_sql_sincronizacao_posicaoScalarFieldEnum = {
  Codigo: 'Codigo',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_sql_sincronizacao_receberScalarFieldEnum = {
  Codigo: 'Codigo',
  Comando_SQL: 'Comando_SQL',
  Mov_Saida: 'Mov_Saida',
  Liberado: 'Liberado',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_tempScalarFieldEnum = {
  Codigo: 'Codigo'
};

exports.Prisma.Tb_tipos_pagamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Tipo_Pagamento: 'Tipo_Pagamento',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_tipos_pagamentos_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  id_Tipo_Pagamento: 'id_Tipo_Pagamento',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_transferencias_filiaisScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Empresa_Origem: 'Id_Empresa_Origem',
  Id_Empresa_Destino: 'Id_Empresa_Destino',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Status: 'Status',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  ID_Solicitacao: 'ID_Solicitacao',
  Data_Solicitacao: 'Data_Solicitacao',
  Data_Status: 'Data_Status'
};

exports.Prisma.Tb_umovme_activityhistoryScalarFieldEnum = {
  Codigo: 'Codigo',
  Data: 'Data',
  Hora: 'Hora',
  Pagina: 'Pagina',
  Consulta_Dados: 'Consulta_Dados',
  Atividade: 'Atividade',
  Arquivo: 'Arquivo',
  Usuario: 'Usuario',
  Data_Inicial: 'Data_Inicial',
  API: 'API'
};

exports.Prisma.Tb_umovme_apiScalarFieldEnum = {
  Codigo: 'Codigo',
  Token: 'Token',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido',
  Data_Inicial: 'Data_Inicial'
};

exports.Prisma.Tb_umovme_indicadoresScalarFieldEnum = {
  Codigo: 'Codigo',
  Informacao: 'Informacao',
  Valor: 'Valor',
  Data_Hora: 'Data_Hora'
};

exports.Prisma.Tb_umovme_invconfScalarFieldEnum = {
  Codigo: 'Codigo',
  Codigo_Barras: 'Codigo_Barras',
  Quantidade: 'Quantidade',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Usuario: 'Usuario',
  ID_Inventario: 'ID_Inventario'
};

exports.Prisma.Tb_umovme_parametros_execucaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Com_Dash: 'Com_Dash',
  Com_Entidades: 'Com_Entidades',
  Com_Finalizadoras: 'Com_Finalizadoras',
  Com_Produtos: 'Com_Produtos',
  DHU: 'DHU',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  Com_Precos: 'Com_Precos'
};

exports.Prisma.Tb_umovme_pre_vendaScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Importacao: 'Data_Importacao',
  Hora: 'Hora',
  Tempo: 'Tempo',
  ID_tarefa: 'ID_tarefa',
  Id_Cliente: 'Id_Cliente',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Id_Comanda: 'Id_Comanda',
  Observacao: 'Observacao',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Id_Lcto: 'Id_Lcto',
  Id_Vendedor: 'Id_Vendedor'
};

exports.Prisma.Tb_umovme_pre_venda_itemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Pre_Venda: 'Id_Pre_Venda',
  Id_Tarefa: 'Id_Tarefa',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Total_Desconto: 'Total_Desconto',
  Id_Lcto: 'Id_Lcto'
};

exports.Prisma.Tb_umovme_precosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Produto: 'Id_Produto',
  Id_Tabela: 'Id_Tabela',
  Unitario: 'Unitario',
  Quantidade_Desconto: 'Quantidade_Desconto',
  Desconto: 'Desconto',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Concatenado: 'Concatenado',
  RegExcluido: 'RegExcluido',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.Tb_umovme_usuariosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Usuario: 'Id_Usuario',
  Id_Atividade: 'Id_Atividade',
  Atividade_Criada: 'Atividade_Criada',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_usuariosScalarFieldEnum = {
  Codigo: 'Codigo',
  Login: 'Login',
  Senha: 'Senha',
  Id_Pessoa: 'Id_Pessoa',
  Id_Vendedor: 'Id_Vendedor',
  Percentual_Desconto_Venda: 'Percentual_Desconto_Venda',
  Visualiza_Log: 'Visualiza_Log',
  Id_Permissao: 'Id_Permissao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Atua_Central: 'Atua_Central',
  IDUser: 'IDUser',
  Percentual_Desconto_Item: 'Percentual_Desconto_Item',
  CPF: 'CPF',
  Gerente: 'Gerente',
  Supervisor: 'Supervisor',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor',
  SQLAut: 'SQLAut',
  Variacao_Gerente_Via_Markup: 'Variacao_Gerente_Via_Markup',
  Master: 'Master',
  Desconto_Quitacao: 'Desconto_Quitacao',
  IDuMovMe: 'IDuMovMe',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.Tb_usuarios_comunicacao_obrigatoriaScalarFieldEnum = {
  Codigo: 'Codigo',
  IDEmpresa: 'IDEmpresa',
  Data: 'Data',
  Hora: 'Hora',
  Processado: 'Processado'
};

exports.Prisma.Tb_usuarios_empresasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Usuario: 'Id_Usuario',
  Id_Empresa: 'Id_Empresa',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_usuarios_permissoesScalarFieldEnum = {
  Codigo: 'Codigo',
  Descricao: 'Descricao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Tela_Principal: 'Tela_Principal'
};

exports.Prisma.Tb_usuarios_permissoes_comandosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Permissao: 'Id_Permissao',
  Id_Comando: 'Id_Comando',
  Visivel: 'Visivel',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Ativo: 'Ativo',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_usuarios_permissoes_comandos_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Permissao: 'Id_Permissao',
  Id_Comando: 'Id_Comando',
  Id_Comando_Sub: 'Id_Comando_Sub',
  Visivel: 'Visivel',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Ativo: 'Ativo',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_usuarios_permissoes_relatoriosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Permissao: 'Id_Permissao',
  Id_Relatorio: 'Id_Relatorio'
};

exports.Prisma.Tb_usuarios_permissoes_telasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Permissao: 'Id_Permissao',
  Formulario: 'Formulario',
  liberado: 'liberado',
  Id_Tela: 'Id_Tela'
};

exports.Prisma.Tb_usuarios_permissoes_telas_objetosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Tela: 'Id_Tela',
  Id_Permissao: 'Id_Permissao',
  Objeto: 'Objeto',
  Legenda: 'Legenda',
  Ativo: 'Ativo',
  Id_Objeto: 'Id_Objeto'
};

exports.Prisma.Tb_usuarios_senhaScalarFieldEnum = {
  Codigo: 'Codigo',
  IDUser: 'IDUser',
  Senha: 'Senha',
  Importado_Mentor: 'Importado_Mentor',
  Processado: 'Processado'
};

exports.Prisma.Tb_vale_creditoScalarFieldEnum = {
  Codigo: 'Codigo',
  Codigo_Vale: 'Codigo_Vale',
  Total: 'Total',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  DHU: 'DHU',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Observacao: 'Observacao'
};

exports.Prisma.Tb_vale_credito_origemScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Vale: 'Id_Vale',
  Id_Lcto: 'Id_Lcto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Mentor_Estoque: 'Mentor_Estoque',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vale_credito_presenteScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Vale: 'Id_Vale',
  Id_Forma_Pagamento: 'Id_Forma_Pagamento',
  Valor: 'Valor',
  Processado: 'Processado',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vale_credito_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Vale: 'Id_Vale',
  Data: 'Data',
  Hora: 'Hora',
  Tempo: 'Tempo',
  Historico: 'Historico',
  Valor: 'Valor',
  Saldo: 'Saldo',
  Id_Venda: 'Id_Venda',
  Id_Quitacao: 'Id_Quitacao'
};

exports.Prisma.Tb_vendasScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Movimento: 'Data_Movimento',
  Hora_Inicio: 'Hora_Inicio',
  Hora_Finalizacao: 'Hora_Finalizacao',
  Id_Cliente: 'Id_Cliente',
  CPF_Consumidor: 'CPF_Consumidor',
  Id_Operacao: 'Id_Operacao',
  Desconto_Venda: 'Desconto_Venda',
  Total_Produtos: 'Total_Produtos',
  Total_Desconto: 'Total_Desconto',
  Total_Acrescimo: 'Total_Acrescimo',
  Total_Frete: 'Total_Frete',
  Total_A_Receber: 'Total_A_Receber',
  Total_Itens: 'Total_Itens',
  Total_Peso: 'Total_Peso',
  Troco: 'Troco',
  Id_NFe: 'Id_NFe',
  Id_NFCe: 'Id_NFCe',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Id_Fechamento: 'Id_Fechamento',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  MODO: 'MODO',
  Id_Centro_Uso_Consumo: 'Id_Centro_Uso_Consumo',
  Id_Gerente: 'Id_Gerente',
  IDUser: 'IDUser',
  Id_Filial_Transferencia: 'Id_Filial_Transferencia',
  Id_Pessoa_Troca: 'Id_Pessoa_Troca',
  Importado_Mentor: 'Importado_Mentor',
  Importado_NFe: 'Importado_NFe',
  Tempo: 'Tempo',
  Observacao: 'Observacao',
  Peso_Bruto: 'Peso_Bruto',
  Peso_Liquido: 'Peso_Liquido',
  Id_Transportadora: 'Id_Transportadora',
  Id_Doca: 'Id_Doca',
  Movimenta_Estoque: 'Movimenta_Estoque',
  IdUser_Cancelamento: 'IdUser_Cancelamento',
  IdUser_Liberacao: 'IdUser_Liberacao',
  IdUser_Desconto: 'IdUser_Desconto',
  Numero_Contrato: 'Numero_Contrato',
  Numero_Requisicao: 'Numero_Requisicao',
  Data_Fiscal: 'Data_Fiscal',
  Venda_Online: 'Venda_Online',
  RegSysADM: 'RegSysADM',
  Id_Representante: 'Id_Representante',
  Id_Pedido_Online: 'Id_Pedido_Online',
  Data_Faturamento: 'Data_Faturamento'
};

exports.Prisma.Tb_vendas_agrupamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Venda: 'Id_Venda',
  Id_Nova_Venda: 'Id_Nova_Venda'
};

exports.Prisma.Tb_vendas_devolucaoScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Venda: 'Id_Venda',
  Id_Agrupamento: 'Id_Agrupamento',
  Id_Lcto_Item: 'Id_Lcto_Item',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Id_Nova_Venda: 'Id_Nova_Venda',
  Liberado_para_servidor: 'Liberado_para_servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor',
  Custo: 'Custo'
};

exports.Prisma.Tb_vendas_pagamentosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Venda: 'Id_Venda',
  Id_Pagamento: 'Id_Pagamento',
  Valor: 'Valor',
  N_Parcelas: 'N_Parcelas',
  Troco: 'Troco',
  Id_Financeiro: 'Id_Financeiro',
  tPag: 'tPag',
  indPag_Opc: 'indPag_Opc',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  TEF_Ok: 'TEF_Ok',
  TEF_Adquirente: 'TEF_Adquirente',
  TEF_CNPJ: 'TEF_CNPJ',
  TEF_Bandeira: 'TEF_Bandeira',
  TEF_CD: 'TEF_CD',
  Importado_Mentor: 'Importado_Mentor',
  Valor_FPag_Desconto: 'Valor_FPag_Desconto',
  Valor_FPag_Acrescimo: 'Valor_FPag_Acrescimo',
  Id_Bandeira: 'Id_Bandeira'
};

exports.Prisma.Tb_vendas_pagamentos_preScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Venda: 'Id_Venda',
  Id_Pagamento: 'Id_Pagamento',
  Valor: 'Valor',
  N_Parcelas: 'N_Parcelas',
  Troco: 'Troco',
  Id_Financeiro: 'Id_Financeiro',
  tPag: 'tPag',
  indPag_Opc: 'indPag_Opc',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  IDUser: 'IDUser',
  TEF_Ok: 'TEF_Ok',
  TEF_Adquirente: 'TEF_Adquirente',
  TEF_CNPJ: 'TEF_CNPJ',
  TEF_Bandeira: 'TEF_Bandeira',
  TEF_CD: 'TEF_CD',
  Importado_Mentor: 'Importado_Mentor',
  ID_Lcto_Venda: 'ID_Lcto_Venda',
  Valor_FPag_Desconto: 'Valor_FPag_Desconto',
  Valor_FPag_Acrescimo: 'Valor_FPag_Acrescimo'
};

exports.Prisma.Tb_vendas_preScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Movimento: 'Data_Movimento',
  Hora_Inicio: 'Hora_Inicio',
  Hora_Finalizacao: 'Hora_Finalizacao',
  Id_Cliente: 'Id_Cliente',
  CPF_Consumidor: 'CPF_Consumidor',
  Id_Operacao: 'Id_Operacao',
  Desconto_Venda: 'Desconto_Venda',
  Total_Produtos: 'Total_Produtos',
  Total_Desconto: 'Total_Desconto',
  Total_Acrescimo: 'Total_Acrescimo',
  Total_Frete: 'Total_Frete',
  Total_A_Receber: 'Total_A_Receber',
  Total_Itens: 'Total_Itens',
  Total_Peso: 'Total_Peso',
  Troco: 'Troco',
  Id_NFe: 'Id_NFe',
  Id_NFCe: 'Id_NFCe',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  Id_Fechamento: 'Id_Fechamento',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  MODO: 'MODO',
  Id_Centro_Uso_Consumo: 'Id_Centro_Uso_Consumo',
  Id_Gerente: 'Id_Gerente',
  IDUser: 'IDUser',
  Id_Filial_Transferencia: 'Id_Filial_Transferencia',
  Id_Pessoa_Troca: 'Id_Pessoa_Troca',
  Importado_Mentor: 'Importado_Mentor',
  Importado_NFe: 'Importado_NFe',
  Tempo: 'Tempo',
  Observacao: 'Observacao',
  Peso_Bruto: 'Peso_Bruto',
  Peso_Liquido: 'Peso_Liquido',
  Id_Transportadora: 'Id_Transportadora',
  Id_Doca: 'Id_Doca',
  Id_Venda: 'Id_Venda',
  ID_Lcto_Venda: 'ID_Lcto_Venda',
  IdUser_Cancelamento: 'IdUser_Cancelamento',
  Numero_Contrato: 'Numero_Contrato',
  Numero_Requisicao: 'Numero_Requisicao',
  Data_Fiscal: 'Data_Fiscal'
};

exports.Prisma.Tb_vendas_pre_comandasScalarFieldEnum = {
  Codigo: 'Codigo',
  Numero_Comanda: 'Numero_Comanda',
  Codigo_Barras: 'Codigo_Barras',
  Id_Pre_venda: 'Id_Pre_venda',
  IDUser: 'IDUser',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vendas_produtosScalarFieldEnum = {
  Codigo: 'Codigo',
  Item: 'Item',
  Id_Venda: 'Id_Venda',
  Id_Produto: 'Id_Produto',
  Codigo_Barras: 'Codigo_Barras',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Acrescimo: 'Acrescimo',
  Desconto: 'Desconto',
  Frete: 'Frete',
  Total_A_Receber: 'Total_A_Receber',
  Peso: 'Peso',
  Unitario_Referencia: 'Unitario_Referencia',
  Id_Vendedor: 'Id_Vendedor',
  Comissao: 'Comissao',
  Comissao_Referencia: 'Comissao_Referencia',
  Id_Baixa_Estoque: 'Id_Baixa_Estoque',
  Id_Estorno_Estoque: 'Id_Estorno_Estoque',
  Reservado: 'Reservado',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Desconto_Venda: 'Desconto_Venda',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Custo: 'Custo',
  Proc_Estoque: 'Proc_Estoque',
  IDUser: 'IDUser',
  Importado_Mentor: 'Importado_Mentor',
  Mentor_Estoque: 'Mentor_Estoque',
  Codigo_BarrasB: 'Codigo_BarrasB',
  Importado_NFe: 'Importado_NFe',
  Importado_NFe_Pre_Selecao: 'Importado_NFe_Pre_Selecao',
  ID_NFe: 'ID_NFe',
  Preco_Digitado: 'Preco_Digitado',
  Observacao: 'Observacao',
  Valor_FPag_Desconto: 'Valor_FPag_Desconto',
  Valor_FPag_Acrescimo: 'Valor_FPag_Acrescimo',
  Descricao_Digitada: 'Descricao_Digitada',
  Fator_Saida: 'Fator_Saida',
  Pgr_Fid: 'Pgr_Fid',
  Pgr_Fid_Credito: 'Pgr_Fid_Credito',
  Mentor_Estoque_ID_Agrupamento: 'Mentor_Estoque_ID_Agrupamento',
  Preco_Oferta: 'Preco_Oferta',
  Preco_Normal: 'Preco_Normal'
};

exports.Prisma.Tb_vendas_produtos_auxiliarScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Info_01: 'Info_01',
  Info_02: 'Info_02',
  Quantidade: 'Quantidade',
  IDUser: 'IDUser',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Quantidade_Embalagens: 'Quantidade_Embalagens',
  Quantidade_Impressao: 'Quantidade_Impressao'
};

exports.Prisma.Tb_vendas_produtos_insumosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Mentor_Estoque: 'Mentor_Estoque',
  Id_Lcto_venda: 'Id_Lcto_venda',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vendas_produtos_insumos_preScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Mentor_Estoque: 'Mentor_Estoque',
  Id_Lcto_venda: 'Id_Lcto_venda',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vendas_produtos_lotesScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Id_Lote: 'Id_Lote',
  Quantidade: 'Quantidade',
  Estoque_Processado: 'Estoque_Processado',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vendas_produtos_lotes_preScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Id_Lote: 'Id_Lote',
  Quantidade: 'Quantidade',
  Estoque_Processado: 'Estoque_Processado',
  Id_Lcto_Venda: 'Id_Lcto_Venda',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_vendas_produtos_preScalarFieldEnum = {
  Codigo: 'Codigo',
  Item: 'Item',
  Id_Venda: 'Id_Venda',
  Id_Produto: 'Id_Produto',
  Codigo_Barras: 'Codigo_Barras',
  Quantidade: 'Quantidade',
  Unitario: 'Unitario',
  Total: 'Total',
  Acrescimo: 'Acrescimo',
  Desconto: 'Desconto',
  Frete: 'Frete',
  Total_A_Receber: 'Total_A_Receber',
  Peso: 'Peso',
  Unitario_Referencia: 'Unitario_Referencia',
  Id_Vendedor: 'Id_Vendedor',
  Comissao: 'Comissao',
  Comissao_Referencia: 'Comissao_Referencia',
  Id_Baixa_Estoque: 'Id_Baixa_Estoque',
  Id_Estorno_Estoque: 'Id_Estorno_Estoque',
  Reservado: 'Reservado',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Desconto_Venda: 'Desconto_Venda',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Custo: 'Custo',
  Proc_Estoque: 'Proc_Estoque',
  IDUser: 'IDUser',
  Importado_Mentor: 'Importado_Mentor',
  Mentor_Estoque: 'Mentor_Estoque',
  Codigo_BarrasB: 'Codigo_BarrasB',
  Importado_NFe: 'Importado_NFe',
  Importado_NFe_Pre_Selecao: 'Importado_NFe_Pre_Selecao',
  ID_NFe: 'ID_NFe',
  Preco_Digitado: 'Preco_Digitado',
  Observacao: 'Observacao',
  ID_Lcto_Venda: 'ID_Lcto_Venda',
  Valor_FPag_DEsconto: 'Valor_FPag_DEsconto',
  Valor_FPag_Acrescimo: 'Valor_FPag_Acrescimo',
  Descricao_Digitada: 'Descricao_Digitada',
  Preco_Oferta: 'Preco_Oferta',
  Fator_Saida: 'Fator_Saida',
  Pgr_Fid: 'Pgr_Fid',
  Pgr_Fid_Credito: 'Pgr_Fid_Credito',
  Mentor_Estoque_ID_Agrupamento: 'Mentor_Estoque_ID_Agrupamento',
  Preco_Normal: 'Preco_Normal'
};

exports.Prisma.Tb_vendas_produtos_receitasScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Lcto: 'Id_Lcto',
  Id_Venda: 'Id_Venda',
  Id_Produto: 'Id_Produto',
  Quantidade: 'Quantidade',
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.Tb_vendas_tef_comprovanteScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Venda: 'Id_Venda',
  Comprovante: 'Comprovante'
};

exports.Prisma.Tb_vendedorScalarFieldEnum = {
  Codigo: 'Codigo',
  Vendedor: 'Vendedor',
  Id_Pessoa: 'Id_Pessoa',
  Tipo_Comissao: 'Tipo_Comissao',
  Comissao_Faturamento: 'Comissao_Faturamento',
  Comissao_Conforme_Parcelas: 'Comissao_Conforme_Parcelas',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  Saldo: 'Saldo',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_vendedor_subScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Vendedor: 'Id_Vendedor',
  Data: 'Data',
  Hora: 'Hora',
  Vencimento: 'Vencimento',
  Documento: 'Documento',
  Historico: 'Historico',
  Valor: 'Valor',
  Saldo: 'Saldo',
  Id_Venda: 'Id_Venda',
  ID_Conta: 'ID_Conta',
  ID_Parcela: 'ID_Parcela',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Tempo: 'Tempo',
  Liberado: 'Liberado'
};

exports.Prisma.Tb_vendedor_sub_pendenciaScalarFieldEnum = {
  Codigo: 'Codigo',
  id_Vendedor: 'id_Vendedor',
  Data: 'Data',
  Hora: 'Hora',
  Vencimento: 'Vencimento',
  Documento: 'Documento',
  Historico: 'Historico',
  Valor: 'Valor',
  Saldo: 'Saldo',
  Id_Venda: 'Id_Venda',
  Id_Conta: 'Id_Conta',
  Id_Parcela: 'Id_Parcela',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  DHU: 'DHU',
  IDUser: 'IDUser',
  Id_Liberacao: 'Id_Liberacao',
  Tempo: 'Tempo'
};

exports.Prisma.Tb_versao_windadosScalarFieldEnum = {
  Codigo: 'Codigo',
  DHU: 'DHU',
  IDUser: 'IDUser'
};

exports.Prisma.Tb_whatsapp_mensagemScalarFieldEnum = {
  Codigo: 'Codigo',
  Data_Solicitacao: 'Data_Solicitacao',
  Hora_Solicitacao: 'Hora_Solicitacao',
  Telefone: 'Telefone',
  Mensagem: 'Mensagem',
  Enviado: 'Enviado',
  IDEmpresa: 'IDEmpresa',
  RegExcluido: 'RegExcluido',
  IDUser: 'IDUser',
  Arquivo: 'Arquivo'
};

exports.Prisma.Tb_whatsapp_parametrosScalarFieldEnum = {
  Codigo: 'Codigo',
  Id_Parametro: 'Id_Parametro',
  Texto: 'Texto',
  Ativo: 'Ativo',
  DHU: 'DHU',
  IDEmpresa: 'IDEmpresa',
  IDUser: 'IDUser',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.Tb_comandasScalarFieldEnum = {
  Codigo: 'Codigo',
  Comanda: 'Comanda',
  Comanda_Numero: 'Comanda_Numero',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa',
  ID_Mesa: 'ID_Mesa'
};

exports.Prisma.Tb_mesasScalarFieldEnum = {
  Codigo: 'Codigo',
  Mesa: 'Mesa',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  IDEmpresa: 'IDEmpresa'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.tb_pessoasOrderByRelevanceFieldEnum = {
  Tipo_Pessoa: 'Tipo_Pessoa',
  CPF: 'CPF',
  CNPJ: 'CNPJ',
  RG: 'RG',
  IE: 'IE',
  CadPro: 'CadPro',
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
  Fone1: 'Fone1',
  Fone2: 'Fone2',
  Fone3: 'Fone3',
  Fone4: 'Fone4',
  Fone5: 'Fone5',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU',
  Email: 'Email',
  Apelido: 'Apelido',
  Liberado_Contas_Em_Atraso: 'Liberado_Contas_Em_Atraso',
  WhatsApp: 'WhatsApp',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Obs_Retirada: 'Obs_Retirada',
  Op_Cliente: 'Op_Cliente',
  Op_Fornecedor: 'Op_Fornecedor',
  Op_Transportador: 'Op_Transportador',
  Op_Prestador_Servico: 'Op_Prestador_Servico'
};

exports.Prisma.tb_produtosOrderByRelevanceFieldEnum = {
  Produto: 'Produto',
  Produto_Curto: 'Produto_Curto',
  Produto_PDV: 'Produto_PDV',
  Complemento: 'Complemento',
  Pesquisa_Rapida_PDV: 'Pesquisa_Rapida_PDV',
  Codigo_Interno: 'Codigo_Interno',
  Balanca: 'Balanca',
  Tipo_Balanca: 'Tipo_Balanca',
  Descricao_Balanca: 'Descricao_Balanca',
  Genero: 'Genero',
  cEAN_Trib: 'cEAN_Trib',
  CEST: 'CEST',
  Deposito: 'Deposito',
  Fraciona: 'Fraciona',
  Controle_Lote: 'Controle_Lote',
  Requer_Observacao: 'Requer_Observacao',
  Nao_Controla_Estoque: 'Nao_Controla_Estoque',
  Nunca_Agrupa_Venda: 'Nunca_Agrupa_Venda',
  Classificacao: 'Classificacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Cad_ViaXML: 'Cad_ViaXML',
  Funcao: 'Funcao',
  Alterado: 'Alterado',
  N_Licenca_ANVISA: 'N_Licenca_ANVISA',
  Dados_Tecnicos: 'Dados_Tecnicos',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Codigo_ANP: 'Codigo_ANP',
  Descricao_ANP: 'Descricao_ANP'
};

exports.Prisma.tb_produtos_setorOrderByRelevanceFieldEnum = {
  Setor: 'Setor',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.tb_abertura_caixaOrderByRelevanceFieldEnum = {
  Hora_Abertura: 'Hora_Abertura',
  Hora_Fechamento: 'Hora_Fechamento',
  Fechado: 'Fechado',
  DHU: 'DHU',
  Numero_Fechamento: 'Numero_Fechamento',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_abertura_caixa_contagemOrderByRelevanceFieldEnum = {
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_adquirentesOrderByRelevanceFieldEnum = {
  Nome: 'Nome',
  CNPJ: 'CNPJ',
  DHU: 'DHU',
  Ativo: 'Ativo'
};

exports.Prisma.tb_adquirentes_bandeirasOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Retorno_TEF: 'Retorno_TEF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Ativo: 'Ativo',
  CD: 'CD'
};

exports.Prisma.tb_boleto_carteiraOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Nro_Banco: 'Nro_Banco',
  Logo_Banco: 'Logo_Banco',
  Codigo_Agencia: 'Codigo_Agencia',
  DV_Agencia: 'DV_Agencia',
  Conta_Corrente: 'Conta_Corrente',
  DV_Conta_Corrente: 'DV_Conta_Corrente',
  Nro_Carteira: 'Nro_Carteira',
  Nro_Convenio: 'Nro_Convenio',
  DV_Convenio: 'DV_Convenio',
  Variacao_Carteira: 'Variacao_Carteira',
  Aceite: 'Aceite',
  Instrucao_Codificada: 'Instrucao_Codificada',
  CNPJ_Cedente: 'CNPJ_Cedente',
  Nome_Cedente: 'Nome_Cedente',
  Logradouro_Cedente: 'Logradouro_Cedente',
  Nro_Cedente: 'Nro_Cedente',
  Complemento_Cedente: 'Complemento_Cedente',
  Bairro_Cedenten: 'Bairro_Cedenten',
  CEP_Cedente: 'CEP_Cedente',
  Cidade_Cedente: 'Cidade_Cedente',
  UF_Cedente: 'UF_Cedente',
  BoletoMensagem: 'BoletoMensagem',
  Cod_Especie: 'Cod_Especie',
  Especie: 'Especie',
  Local_Pagamento: 'Local_Pagamento',
  Nro_Banco_Boleto: 'Nro_Banco_Boleto',
  Posto: 'Posto',
  Imagem_Frente: 'Imagem_Frente',
  Imagem_Verso: 'Imagem_Verso',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_boleto_comando_retornoOrderByRelevanceFieldEnum = {
  Codigo_Interno: 'Codigo_Interno',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_caixas_retOrderByRelevanceFieldEnum = {
  Hora_Abertura: 'Hora_Abertura',
  Hora_fechamento: 'Hora_fechamento',
  RegExcluido: 'RegExcluido',
  Hora_Reabertura: 'Hora_Reabertura'
};

exports.Prisma.tb_cancelamentosOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Tipo: 'Tipo'
};

exports.Prisma.tb_cartoesOrderByRelevanceFieldEnum = {
  Cartao: 'Cartao',
  Apelido: 'Apelido',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_centro_uso_consumoOrderByRelevanceFieldEnum = {
  Centro: 'Centro',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_cfop_devolucaoOrderByRelevanceFieldEnum = {
  CFOP_Entrada: 'CFOP_Entrada',
  CFOP_Devolucao: 'CFOP_Devolucao'
};

exports.Prisma.tb_comando_sql_clienteOrderByRelevanceFieldEnum = {
  Comando_SQL: 'Comando_SQL'
};

exports.Prisma.tb_comprasOrderByRelevanceFieldEnum = {
  Hora_Lancamento: 'Hora_Lancamento',
  Documento: 'Documento',
  Modelo: 'Modelo',
  Serie: 'Serie',
  Chave_Acesso: 'Chave_Acesso',
  Movimenta_Estoque: 'Movimenta_Estoque',
  Start_Estoque: 'Start_Estoque',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Status: 'Status',
  Hora_Finalizacao: 'Hora_Finalizacao',
  Revisado: 'Revisado',
  XML: 'XML',
  Revisado_Financeiro: 'Revisado_Financeiro',
  Doc_Sem_Chave: 'Doc_Sem_Chave',
  Financeiro_Inconsistente: 'Financeiro_Inconsistente',
  Motivo_Inconsistente: 'Motivo_Inconsistente'
};

exports.Prisma.tb_compras_devolucaoOrderByRelevanceFieldEnum = {
  Digitacao: 'Digitacao',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_compras_duplicatasOrderByRelevanceFieldEnum = {
  Duplicata: 'Duplicata'
};

exports.Prisma.tb_compras_envio_nfeOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_compras_pagamentosOrderByRelevanceFieldEnum = {
  Duplicata: 'Duplicata'
};

exports.Prisma.tb_compras_produtosOrderByRelevanceFieldEnum = {
  NCM: 'NCM',
  CFOP: 'CFOP',
  cBenef: 'cBenef',
  CSTICMS: 'CSTICMS',
  CSTIPI: 'CSTIPI',
  CSTPIS: 'CSTPIS',
  CSTCOFINS: 'CSTCOFINS',
  Status_NCM: 'Status_NCM',
  Descricao_XML: 'Descricao_XML',
  Acao_Revisao: 'Acao_Revisao',
  DHU: 'DHU',
  cProd: 'cProd',
  Status_Cadastro: 'Status_Cadastro',
  Descricao_Cadastro: 'Descricao_Cadastro',
  CEST: 'CEST',
  Revisado: 'Revisado',
  Consolidado: 'Consolidado',
  Revisado_Aut: 'Revisado_Aut',
  Estoque_Processado: 'Estoque_Processado',
  Cad_ViaXML: 'Cad_ViaXML',
  Produto: 'Produto',
  ID_Empresas: 'ID_Empresas',
  Origem_Desmembramento_ID: 'Origem_Desmembramento_ID',
  cEAN: 'cEAN'
};

exports.Prisma.tb_compras_produtos_lotesOrderByRelevanceFieldEnum = {
  nLote: 'nLote',
  Processo_Estoque: 'Processo_Estoque'
};

exports.Prisma.tb_conta_razaoOrderByRelevanceFieldEnum = {
  Conta_Razao: 'Conta_Razao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_cotacaoOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Hora: 'Hora',
  Hora_Fechamento: 'Hora_Fechamento',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Status: 'Status'
};

exports.Prisma.tb_cotacao_fechamentoOrderByRelevanceFieldEnum = {
  Arquivo_PDF: 'Arquivo_PDF',
  WhatsApp_Enviado: 'WhatsApp_Enviado',
  Email_Enviado: 'Email_Enviado'
};

exports.Prisma.tb_cotacao_itemOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  Status: 'Status'
};

exports.Prisma.tb_cotacao_participantesOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  Arquivo_Excel: 'Arquivo_Excel',
  Email_Enviado: 'Email_Enviado',
  WhatsApp_Enviado: 'WhatsApp_Enviado',
  Retorno: 'Retorno'
};

exports.Prisma.tb_cotacao_retornosOrderByRelevanceFieldEnum = {
  Ignorado: 'Ignorado'
};

exports.Prisma.tb_despesasOrderByRelevanceFieldEnum = {
  Documento: 'Documento',
  Observacao: 'Observacao',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_despesas_aplicacaoOrderByRelevanceFieldEnum = {
  Aplicacao: 'Aplicacao',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_despesas_aplicacao_subOrderByRelevanceFieldEnum = {
  Aplicacao: 'Aplicacao',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.tb_despesas_bOrderByRelevanceFieldEnum = {
  Documento: 'Documento',
  Observacao: 'Observacao',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Conciliacao_Nao_Gera_Financeiro: 'Conciliacao_Nao_Gera_Financeiro',
  Financeiro_Inconsistente: 'Financeiro_Inconsistente',
  Motivo_Inconsistente: 'Motivo_Inconsistente',
  Sem_Financeiro: 'Sem_Financeiro',
  RegSysADM: 'RegSysADM'
};

exports.Prisma.tb_despesas_b_financeiroOrderByRelevanceFieldEnum = {
  Parcela: 'Parcela'
};

exports.Prisma.tb_despesas_b_rateioOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  Observacao: 'Observacao'
};

exports.Prisma.tb_devolucao_fiscalOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  Mentor_Estoque: 'Mentor_Estoque',
  Digitacao: 'Digitacao'
};

exports.Prisma.tb_documentos_personalizadosOrderByRelevanceFieldEnum = {
  Produtos: 'Produtos',
  Com_Frete: 'Com_Frete',
  Acionar_Sirene: 'Acionar_Sirene',
  RegExcluido: 'RegExcluido',
  Funcao: 'Funcao',
  Impressao_Individual: 'Impressao_Individual',
  Texto_Relatorio: 'Texto_Relatorio',
  Integra_Servidor: 'Integra_Servidor',
  Texto_Relatorio_Servidor: 'Texto_Relatorio_Servidor'
};

exports.Prisma.tb_documentos_personalizados_servidorOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Texto: 'Texto',
  Rnd_01: 'Rnd_01',
  Rnd_02: 'Rnd_02',
  DHU: 'DHU',
  DHU_Impressao: 'DHU_Impressao',
  Emitido: 'Emitido',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor'
};

exports.Prisma.tb_dre_confOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Receita_Bruta: 'Receita_Bruta',
  Deducoes: 'Deducoes',
  Receita_Liquida: 'Receita_Liquida',
  CMV: 'CMV',
  Lucro_Bruto: 'Lucro_Bruto',
  Despesas: 'Despesas',
  Resultado_Operacional: 'Resultado_Operacional',
  CSLL_IRPJ: 'CSLL_IRPJ',
  Resultado_Liquido: 'Resultado_Liquido',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_empresasOrderByRelevanceFieldEnum = {
  emi_CNPJ: 'emi_CNPJ',
  emi_CPF: 'emi_CPF',
  emi_xNome: 'emi_xNome',
  emi_xfant: 'emi_xfant',
  emi_nro: 'emi_nro',
  emi_xLgr: 'emi_xLgr',
  emi_xCpl: 'emi_xCpl',
  emi_xBairro: 'emi_xBairro',
  emi_cMun: 'emi_cMun',
  emi_xMun: 'emi_xMun',
  emi_xUF: 'emi_xUF',
  emi_cUF: 'emi_cUF',
  emi_CEP: 'emi_CEP',
  emi_cPais: 'emi_cPais',
  emi_xPais: 'emi_xPais',
  emi_fone: 'emi_fone',
  emi_IE: 'emi_IE',
  emi_IEST: 'emi_IEST',
  emi_IM: 'emi_IM',
  emi_CNAE: 'emi_CNAE',
  emi_CRT: 'emi_CRT',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU',
  Apelido: 'Apelido'
};

exports.Prisma.tb_empresas_comunicacaoOrderByRelevanceFieldEnum = {
  Op_Venda: 'Op_Venda',
  Op_Financeiro: 'Op_Financeiro',
  Op_Estoque: 'Op_Estoque',
  DHU: 'DHU'
};

exports.Prisma.tb_empresas_conf_etiqueta_pedidoOrderByRelevanceFieldEnum = {
  DHU: 'DHU'
};

exports.Prisma.tb_empresas_conf_geralOrderByRelevanceFieldEnum = {
  Licenca_ANVISA: 'Licenca_ANVISA',
  Mostrar_Tributos_NFe: 'Mostrar_Tributos_NFe',
  Permite_Itens_Zerados_Venda: 'Permite_Itens_Zerados_Venda',
  Faturar_Contas_Status_Diferentes: 'Faturar_Contas_Status_Diferentes',
  Pergunta_CPF: 'Pergunta_CPF',
  Finaliza_Venda_Cartao_Fiscal: 'Finaliza_Venda_Cartao_Fiscal',
  Fatura_Sobre_Fatura: 'Fatura_Sobre_Fatura',
  Acao_Imprimir: 'Acao_Imprimir',
  DHU: 'DHU',
  Acao_Imprimir_NFe: 'Acao_Imprimir_NFe',
  Acao_Imprimir_NFCe: 'Acao_Imprimir_NFCe',
  Modelo_Documento_Impressao: 'Modelo_Documento_Impressao',
  Alteracao_Unitario: 'Alteracao_Unitario',
  Obs_Venda_A4: 'Obs_Venda_A4',
  Promissoria_Termica: 'Promissoria_Termica'
};

exports.Prisma.tb_empresas_conf_petOrderByRelevanceFieldEnum = {
  Filtro_Mod_02: 'Filtro_Mod_02',
  Pacote_Apenas_Debito: 'Pacote_Apenas_Debito',
  Totaliza_Exame: 'Totaliza_Exame',
  Totaliza_Medicamento: 'Totaliza_Medicamento',
  Totaliza_Psicotropico: 'Totaliza_Psicotropico',
  Totaliza_Insumos: 'Totaliza_Insumos',
  DHU: 'DHU'
};

exports.Prisma.tb_empresas_conf_vendasOrderByRelevanceFieldEnum = {
  Repete_Item: 'Repete_Item',
  DHU: 'DHU'
};

exports.Prisma.tb_empresas_custoOrderByRelevanceFieldEnum = {
  Descricao_Custo: 'Descricao_Custo'
};

exports.Prisma.tb_empresas_diretoriosOrderByRelevanceFieldEnum = {
  NFe_XML_Gerado: 'NFe_XML_Gerado',
  NFe_XML_Assinado: 'NFe_XML_Assinado',
  NFe_XML_Autorizado: 'NFe_XML_Autorizado',
  NFe_DANFe: 'NFe_DANFe',
  NFe_XML_CCe: 'NFe_XML_CCe',
  NFCe_XML_Gerado: 'NFCe_XML_Gerado',
  NFCe_XML_Assinado: 'NFCe_XML_Assinado',
  NFCe_XML_Autorizado: 'NFCe_XML_Autorizado',
  NFCe_DANFCe: 'NFCe_DANFCe',
  NFCe_XML_CCe: 'NFCe_XML_CCe',
  NFCe_Img_QRCode: 'NFCe_Img_QRCode',
  CTe_XML_Gerado: 'CTe_XML_Gerado',
  CTe_XML_Assinado: 'CTe_XML_Assinado',
  CTe_XML_Autorizado: 'CTe_XML_Autorizado',
  CTe_DACTe: 'CTe_DACTe',
  CTe_XML_CCe: 'CTe_XML_CCe',
  MDFe_XML_Gerado: 'MDFe_XML_Gerado',
  MDFe_XML_Assinado: 'MDFe_XML_Assinado',
  MDFe_XML_Autorizado: 'MDFe_XML_Autorizado',
  MDFe_XML_Encerramento: 'MDFe_XML_Encerramento',
  MDFe_XML_Inclusao_Condutor: 'MDFe_XML_Inclusao_Condutor',
  MDFe_DAMDFe: 'MDFe_DAMDFe',
  TXT_Defender: 'TXT_Defender',
  XML_Entradas: 'XML_Entradas',
  DHU: 'DHU',
  Txt_NFCe: 'Txt_NFCe',
  Txt_NFCe_Retorno: 'Txt_NFCe_Retorno',
  NFCe_Lote: 'NFCe_Lote',
  Excel_Cotacao: 'Excel_Cotacao',
  XML_Download_Manual: 'XML_Download_Manual',
  Inutilizacao: 'Inutilizacao',
  Quadro_Recibo: 'Quadro_Recibo'
};

exports.Prisma.tb_empresas_emailOrderByRelevanceFieldEnum = {
  Remetente: 'Remetente',
  SMTP_Cliente: 'SMTP_Cliente',
  SMTP_Porta: 'SMTP_Porta',
  SMTP_SSL: 'SMTP_SSL',
  SMTP_Usuario: 'SMTP_Usuario',
  SMTP_Senha: 'SMTP_Senha',
  DHU: 'DHU',
  Nome_Remetente: 'Nome_Remetente'
};

exports.Prisma.tb_empresas_imagensOrderByRelevanceFieldEnum = {
  Imagem_NFe: 'Imagem_NFe',
  Imagem_NFCe: 'Imagem_NFCe',
  Imagem_Relatorios: 'Imagem_Relatorios',
  Imagem_PicPay: 'Imagem_PicPay',
  DHU: 'DHU',
  Imagem_Inicial: 'Imagem_Inicial'
};

exports.Prisma.tb_empresas_liberadas_usuariosOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_empresas_odbcOrderByRelevanceFieldEnum = {
  Servidor: 'Servidor',
  DataBaseName: 'DataBaseName',
  Usuario: 'Usuario',
  Porta: 'Porta',
  DHU: 'DHU',
  Ultima_Comunicacao_Mentor: 'Ultima_Comunicacao_Mentor'
};

exports.Prisma.tb_empresas_pedido_onlineOrderByRelevanceFieldEnum = {
  IP: 'IP',
  DataBase_Name: 'DataBase_Name',
  Usuario: 'Usuario',
  Porta: 'Porta',
  DHU: 'DHU'
};

exports.Prisma.tb_empresas_wsOrderByRelevanceFieldEnum = {
  Sigla_WS_NF: 'Sigla_WS_NF',
  Sigla_WS_NFCe: 'Sigla_WS_NFCe',
  Sigla_WS_CTe: 'Sigla_WS_CTe',
  CSC_Producao: 'CSC_Producao',
  CSC_Homologacao: 'CSC_Homologacao',
  Token_Producao: 'Token_Producao',
  Token_Homologacao: 'Token_Homologacao',
  RNTRC: 'RNTRC',
  Certificado: 'Certificado',
  Licenca_NFe_NFCe: 'Licenca_NFe_NFCe',
  Licenca_CTe: 'Licenca_CTe',
  Licenca_MDFe: 'Licenca_MDFe',
  URL_Estado_NFCe: 'URL_Estado_NFCe',
  URL_Consulta_NFCe: 'URL_Consulta_NFCe',
  URL_Cte: 'URL_Cte',
  CPF_CNPJ_Contador: 'CPF_CNPJ_Contador',
  DHU: 'DHU',
  Token_IBPT: 'Token_IBPT',
  API_uMovMe: 'API_uMovMe'
};

exports.Prisma.tb_financeiro_canal_pagamentoOrderByRelevanceFieldEnum = {
  Nome: 'Nome',
  Solicita_Dados_PIX: 'Solicita_Dados_PIX',
  Solicita_Portador: 'Solicita_Portador',
  Solicita_Linha_Digitavel: 'Solicita_Linha_Digitavel',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Ativo: 'Ativo'
};

exports.Prisma.tb_financeiro_dadosOrderByRelevanceFieldEnum = {
  Documento: 'Documento',
  Hora_Emissao: 'Hora_Emissao',
  Observacao: 'Observacao',
  RegExcluido: 'RegExcluido',
  CRP: 'CRP',
  Arquivo_Remessa: 'Arquivo_Remessa',
  Origem_Fat: 'Origem_Fat'
};

exports.Prisma.tb_financeiro_parcelasOrderByRelevanceFieldEnum = {
  Parcela: 'Parcela',
  Status: 'Status',
  RegExcluido: 'RegExcluido',
  Revisado_CR: 'Revisado_CR',
  Baixa_Parcial: 'Baixa_Parcial',
  Origem_Fatura: 'Origem_Fatura',
  Observacao_Baixa: 'Observacao_Baixa',
  Nosso_Numero: 'Nosso_Numero',
  Linha_Digitavel: 'Linha_Digitavel',
  Barras: 'Barras',
  Tipo_Documento_Baixa: 'Tipo_Documento_Baixa',
  Cartao_Conciliado: 'Cartao_Conciliado'
};

exports.Prisma.tb_financeiro_vinculosOrderByRelevanceFieldEnum = {
  Origem: 'Origem'
};

exports.Prisma.tb_formas_pagamentoOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  TEF: 'TEF',
  Uti_Entradas: 'Uti_Entradas',
  Uti_Saidas: 'Uti_Saidas',
  Uti_Despesas: 'Uti_Despesas',
  Uti_Fatura: 'Uti_Fatura',
  Permite_Troco: 'Permite_Troco',
  Permite_Contra_Vale: 'Permite_Contra_Vale',
  Detalhes_PDV_Fechamento: 'Detalhes_PDV_Fechamento',
  Fiscal_indPag_Opc: 'Fiscal_indPag_Opc',
  Fiscal_tPag: 'Fiscal_tPag',
  Fiscal_tpIntegra_Opc: 'Fiscal_tpIntegra_Opc',
  Fiscal_xPag_Opc: 'Fiscal_xPag_Opc',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Integracao_SIP: 'Integracao_SIP',
  Recebe_Vale_Credito: 'Recebe_Vale_Credito',
  Uti_Quitacao: 'Uti_Quitacao',
  Considerar_Desconto_Pontualidade: 'Considerar_Desconto_Pontualidade',
  Preferencia_Fiscal: 'Preferencia_Fiscal',
  Uti_NFe: 'Uti_NFe',
  Abre_Gaveta: 'Abre_Gaveta',
  Integra_Fechamento: 'Integra_Fechamento',
  uMovMe_Enviar: 'uMovMe_Enviar',
  Utiliza_Movel: 'Utiliza_Movel'
};

exports.Prisma.tb_formas_pagamento_desconto_autorizadoOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_formas_pagamento_empresasOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_formas_pagamento_oferta_autorizadoOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_formas_pagamento_usuariosOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_formulario_permissaoOrderByRelevanceFieldEnum = {
  Legenda: 'Legenda',
  Formulario: 'Formulario'
};

exports.Prisma.tb_formulario_permissao_subOrderByRelevanceFieldEnum = {
  Objeto: 'Objeto',
  Legenda: 'Legenda',
  Ativo: 'Ativo'
};

exports.Prisma.tb_grade_fiscalOrderByRelevanceFieldEnum = {
  CFOP: 'CFOP',
  ICMS_CST_SN: 'ICMS_CST_SN',
  ICMS_CST_NO: 'ICMS_CST_NO',
  ICMS_HabilitaICMSST: 'ICMS_HabilitaICMSST',
  ICMS_Habilita_ICMSDeson: 'ICMS_Habilita_ICMSDeson',
  ICMS_Habilita_ICMSSN: 'ICMS_Habilita_ICMSSN',
  ICMS_Habilita_ICMSFCP: 'ICMS_Habilita_ICMSFCP',
  ICMS_cBenef: 'ICMS_cBenef',
  IPIcEnq: 'IPIcEnq',
  IPI_Habilita: 'IPI_Habilita',
  IPI_Acao_Valor_ICMS: 'IPI_Acao_Valor_ICMS',
  IPI_CST: 'IPI_CST',
  PIS_Acao_Valor_ICMS: 'PIS_Acao_Valor_ICMS',
  PIS_CST: 'PIS_CST',
  COFINS_Acao_Valor_ICMS: 'COFINS_Acao_Valor_ICMS',
  COFINS_CST: 'COFINS_CST',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  Observacao: 'Observacao',
  DHU: 'DHU',
  Padrao_Dev_Estadual: 'Padrao_Dev_Estadual',
  Padrao_Dev_Interestadual: 'Padrao_Dev_Interestadual',
  Padrao_Sistemas_Integracao: 'Padrao_Sistemas_Integracao',
  Padrao_Sistemas_Integracao_Combustivel: 'Padrao_Sistemas_Integracao_Combustivel'
};

exports.Prisma.tb_inutilizacao_fiscalOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Modelo: 'Modelo',
  Serie: 'Serie',
  Numero_Documento: 'Numero_Documento',
  nProtocolo: 'nProtocolo',
  dProtocolo: 'dProtocolo',
  Status: 'Status',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_inventarioOrderByRelevanceFieldEnum = {
  Hora_Abertura: 'Hora_Abertura',
  Hora_Fechamento: 'Hora_Fechamento',
  Status: 'Status',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Importado_Mentor: 'Importado_Mentor',
  Dados_Validados: 'Dados_Validados'
};

exports.Prisma.tb_inventario_conclusaoOrderByRelevanceFieldEnum = {
  Processado: 'Processado',
  Hora_Processamento: 'Hora_Processamento',
  Hora: 'Hora'
};

exports.Prisma.tb_inventario_nao_coletadoOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido',
  Estoque_Processado: 'Estoque_Processado',
  RegExcludio: 'RegExcludio'
};

exports.Prisma.tb_inventario_subOrderByRelevanceFieldEnum = {
  Arquivo: 'Arquivo',
  Hora: 'Hora',
  Codigo_Barras: 'Codigo_Barras',
  RegExcluido: 'RegExcluido',
  Status_Produto: 'Status_Produto',
  Importado_Mentor: 'Importado_Mentor',
  Estoque_Processado: 'Estoque_Processado',
  Origem_Coleta: 'Origem_Coleta'
};

exports.Prisma.tb_local_retiradaOrderByRelevanceFieldEnum = {
  Local: 'Local',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_log_alteracaoOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Tipo: 'Tipo',
  Tabela: 'Tabela',
  Alteracao: 'Alteracao'
};

exports.Prisma.tb_logoutOrderByRelevanceFieldEnum = {
  DHU: 'DHU'
};

exports.Prisma.tb_ncmOrderByRelevanceFieldEnum = {
  NCM: 'NCM',
  Descricao: 'Descricao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_ncm_novoOrderByRelevanceFieldEnum = {
  NCM: 'NCM',
  DHU: 'DHU',
  CST_ICMS: 'CST_ICMS'
};

exports.Prisma.tb_nfceOrderByRelevanceFieldEnum = {
  ide_cUF: 'ide_cUF',
  ide_natOp: 'ide_natOp',
  ide_Hora: 'ide_Hora',
  ide_tpNF: 'ide_tpNF',
  ide_idDest: 'ide_idDest',
  ide_cMunFG: 'ide_cMunFG',
  ide_dhCont: 'ide_dhCont',
  ide_xJust: 'ide_xJust',
  dest_CNPJ: 'dest_CNPJ',
  dest_CPF: 'dest_CPF',
  dest_xNome: 'dest_xNome',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_cPais: 'dest_cPais',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_indIEDest: 'dest_indIEDest',
  dest_IE: 'dest_IE',
  dest_IESUF: 'dest_IESUF',
  dest_IM: 'dest_IM',
  dest_eMail: 'dest_eMail',
  modFrete: 'modFrete',
  transporta_CNPJ: 'transporta_CNPJ',
  transporta_CPF: 'transporta_CPF',
  transporta_xNome: 'transporta_xNome',
  transporta_IE: 'transporta_IE',
  transporta_xEnder: 'transporta_xEnder',
  transporta_xMun: 'transporta_xMun',
  transporta_UF: 'transporta_UF',
  vol_esp: 'vol_esp',
  vol_marca: 'vol_marca',
  vol_nvol: 'vol_nvol',
  infCpl: 'infCpl',
  ChaveNFe: 'ChaveNFe',
  Recibo: 'Recibo',
  DH_Autorizacao: 'DH_Autorizacao',
  xJust_Cancelamento: 'xJust_Cancelamento',
  Protocolo_Cancelamento: 'Protocolo_Cancelamento',
  DH_Cancelamento: 'DH_Cancelamento',
  Status: 'Status',
  URL_NFCe: 'URL_NFCe',
  XML_Gerado: 'XML_Gerado',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor',
  Motivo_cStat: 'Motivo_cStat',
  Protocolo: 'Protocolo'
};

exports.Prisma.tb_nfce_assinadosOrderByRelevanceFieldEnum = {
  XML_Assinado: 'XML_Assinado'
};

exports.Prisma.tb_nfce_autxmlOrderByRelevanceFieldEnum = {
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_nfce_detpagamentosOrderByRelevanceFieldEnum = {
  indPag_Opc: 'indPag_Opc',
  tPag: 'tPag',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_nfce_duplicatasOrderByRelevanceFieldEnum = {
  nDup: 'nDup',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor'
};

exports.Prisma.tb_nfce_itemOrderByRelevanceFieldEnum = {
  prod_cProd: 'prod_cProd',
  prod_cEAN: 'prod_cEAN',
  prod_xProd: 'prod_xProd',
  prod_NCM: 'prod_NCM',
  prod_NVE: 'prod_NVE',
  prod_CEST: 'prod_CEST',
  prod_CNPJFab: 'prod_CNPJFab',
  prod_cBenef: 'prod_cBenef',
  prod_ExTIPI: 'prod_ExTIPI',
  prod_CFOP: 'prod_CFOP',
  prod_uCOM: 'prod_uCOM',
  prod_cEANTrib: 'prod_cEANTrib',
  prod_uTrib: 'prod_uTrib',
  prod_xPed: 'prod_xPed',
  prod_nItemPed: 'prod_nItemPed',
  infAdprod: 'infAdprod',
  Hab_IPI: 'Hab_IPI',
  ipi_cEnq: 'ipi_cEnq',
  IPI_CST: 'IPI_CST',
  PIS_CST: 'PIS_CST',
  COFINS_CST: 'COFINS_CST',
  icms_orig: 'icms_orig',
  icms_CST: 'icms_CST',
  icms_UFST: 'icms_UFST',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_nfce_loteOrderByRelevanceFieldEnum = {
  DH_Criacao: 'DH_Criacao',
  Recibo: 'Recibo'
};

exports.Prisma.tb_nfeOrderByRelevanceFieldEnum = {
  ide_cUF: 'ide_cUF',
  ide_natOp: 'ide_natOp',
  ide_Hora: 'ide_Hora',
  ide_tpNF: 'ide_tpNF',
  ide_idDest: 'ide_idDest',
  ide_cMunFG: 'ide_cMunFG',
  ide_dhCont: 'ide_dhCont',
  ide_xJust: 'ide_xJust',
  dest_CNPJ: 'dest_CNPJ',
  dest_CPF: 'dest_CPF',
  dest_xNome: 'dest_xNome',
  dest_xLgr: 'dest_xLgr',
  dest_nro: 'dest_nro',
  dest_xCpl: 'dest_xCpl',
  dest_xBairro: 'dest_xBairro',
  dest_cMun: 'dest_cMun',
  dest_xMun: 'dest_xMun',
  dest_UF: 'dest_UF',
  dest_CEP: 'dest_CEP',
  dest_cPais: 'dest_cPais',
  dest_xPais: 'dest_xPais',
  dest_fone: 'dest_fone',
  dest_indIEDest: 'dest_indIEDest',
  dest_IE: 'dest_IE',
  dest_IESUF: 'dest_IESUF',
  dest_IM: 'dest_IM',
  dest_eMail: 'dest_eMail',
  modFrete: 'modFrete',
  transporta_CNPJ: 'transporta_CNPJ',
  transporta_CPF: 'transporta_CPF',
  transporta_xNome: 'transporta_xNome',
  transporta_IE: 'transporta_IE',
  transporta_xEnder: 'transporta_xEnder',
  transporta_xMun: 'transporta_xMun',
  transporta_UF: 'transporta_UF',
  vol_esp: 'vol_esp',
  vol_marca: 'vol_marca',
  vol_nvol: 'vol_nvol',
  infCpl: 'infCpl',
  ChaveNFe: 'ChaveNFe',
  Recibo: 'Recibo',
  Protocolo: 'Protocolo',
  DH_Autorizacao: 'DH_Autorizacao',
  xJust_Cancelamento: 'xJust_Cancelamento',
  Protocolo_Cancelamento: 'Protocolo_Cancelamento',
  DH_Cancelamento: 'DH_Cancelamento',
  Status: 'Status',
  XML_Gerado: 'XML_Gerado',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  RegConfirmado: 'RegConfirmado',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Info_IRRF: 'Info_IRRF'
};

exports.Prisma.tb_nfe_autxmlOrderByRelevanceFieldEnum = {
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_cceOrderByRelevanceFieldEnum = {
  txtCorrecao: 'txtCorrecao',
  horaCorrecao: 'horaCorrecao',
  nProtocolo: 'nProtocolo',
  dhProtocolo: 'dhProtocolo',
  Status: 'Status',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_defenderOrderByRelevanceFieldEnum = {
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_defender_dadosOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Modelo: 'Modelo',
  Serie: 'Serie',
  ChaveNFe: 'ChaveNFe',
  CNPJ_Emitente: 'CNPJ_Emitente',
  Status_Fornecedor: 'Status_Fornecedor',
  Valor: 'Valor',
  Entrada_Ok: 'Entrada_Ok',
  DHU: 'DHU',
  Fornecedor: 'Fornecedor',
  XML_Path: 'XML_Path',
  Status_Organizacao: 'Status_Organizacao',
  UF: 'UF',
  NF_Cancelada: 'NF_Cancelada',
  XML_Organizado: 'XML_Organizado'
};

exports.Prisma.tb_nfe_defender_resumoOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  ChaveNFe: 'ChaveNFe',
  CNPJ_Emitente: 'CNPJ_Emitente',
  xNome_Emitente: 'xNome_Emitente',
  IE_Emitente: 'IE_Emitente',
  Protocolo: 'Protocolo',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_detpagamentosOrderByRelevanceFieldEnum = {
  indPag_Opc: 'indPag_Opc',
  tPag: 'tPag',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor'
};

exports.Prisma.tb_nfe_duplicatasOrderByRelevanceFieldEnum = {
  nDup: 'nDup',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor'
};

exports.Prisma.tb_nfe_itemOrderByRelevanceFieldEnum = {
  prod_cProd: 'prod_cProd',
  prod_cEAN: 'prod_cEAN',
  prod_xProd: 'prod_xProd',
  prod_NCM: 'prod_NCM',
  prod_NVE: 'prod_NVE',
  prod_CEST: 'prod_CEST',
  prod_CNPJFab: 'prod_CNPJFab',
  prod_cBenef: 'prod_cBenef',
  prod_ExTIPI: 'prod_ExTIPI',
  prod_CFOP: 'prod_CFOP',
  prod_uCOM: 'prod_uCOM',
  prod_cEANTrib: 'prod_cEANTrib',
  prod_uTrib: 'prod_uTrib',
  prod_xPed: 'prod_xPed',
  prod_nItemPed: 'prod_nItemPed',
  infAdprod: 'infAdprod',
  Hab_IPI: 'Hab_IPI',
  ipi_cEnq: 'ipi_cEnq',
  IPI_CST: 'IPI_CST',
  PIS_CST: 'PIS_CST',
  COFINS_CST: 'COFINS_CST',
  icms_orig: 'icms_orig',
  icms_CST: 'icms_CST',
  icms_UFST: 'icms_UFST',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor'
};

exports.Prisma.tb_nfe_item_rastroOrderByRelevanceFieldEnum = {
  nLote: 'nLote'
};

exports.Prisma.tb_nfe_mandestOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  chaveNFe: 'chaveNFe',
  tpEvento: 'tpEvento',
  xJust: 'xJust',
  cStat: 'cStat',
  nroProtocolo: 'nroProtocolo',
  dhProtocolo: 'dhProtocolo',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_operacao_inverso_estoqueOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_padraoOrderByRelevanceFieldEnum = {
  modFrete: 'modFrete'
};

exports.Prisma.tb_nfe_referenciaOrderByRelevanceFieldEnum = {
  Chave_NFe: 'Chave_NFe',
  Chave_CTe: 'Chave_CTe',
  AAMM: 'AAMM',
  CNPJ: 'CNPJ',
  CPF: 'CPF',
  IE: 'IE',
  Serie: 'Serie',
  nNF: 'nNF',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_nfe_solicitacao_pdvOrderByRelevanceFieldEnum = {
  WhatsApp: 'WhatsApp',
  Email: 'Email',
  Status: 'Status'
};

exports.Prisma.tb_nfe_veiculosOrderByRelevanceFieldEnum = {
  Placa: 'Placa',
  UF: 'UF',
  RNTC: 'RNTC',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_ocorrenciasOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Computador: 'Computador',
  Descricao: 'Descricao',
  Hora_Revisao: 'Hora_Revisao',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_operacao_fiscalOrderByRelevanceFieldEnum = {
  Operacao: 'Operacao',
  Natureza: 'Natureza',
  ide_dest: 'ide_dest',
  ide_finNFe: 'ide_finNFe',
  ide_indPres: 'ide_indPres',
  ide_tpEmis: 'ide_tpEmis',
  ide_tpImp: 'ide_tpImp',
  Entrada_Saida: 'Entrada_Saida',
  Modelo: 'Modelo',
  Exporta_PDV: 'Exporta_PDV',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_operacao_fiscal_raiz_cnpjOrderByRelevanceFieldEnum = {
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_operacao_movimentoOrderByRelevanceFieldEnum = {
  Operacao: 'Operacao',
  Descricao_Report: 'Descricao_Report',
  Entrada_Saida_Despesa: 'Entrada_Saida_Despesa',
  Processo_Financeiro: 'Processo_Financeiro',
  Processo_Fiscal: 'Processo_Fiscal',
  Processo_Comissao: 'Processo_Comissao',
  Processo_Consulta_Operacao_Pessoa: 'Processo_Consulta_Operacao_Pessoa',
  Processo_Movimenta_Estoque: 'Processo_Movimenta_Estoque',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Processo_Revisao_Compra: 'Processo_Revisao_Compra',
  Confirmar_Faturamento_Saida: 'Confirmar_Faturamento_Saida',
  Processo_Incluir_Produto_Manual: 'Processo_Incluir_Produto_Manual',
  Processo_Entrada_NF_Produtor: 'Processo_Entrada_NF_Produtor',
  Saida_Preco_Custo: 'Saida_Preco_Custo',
  Exibe_Comando_Importar: 'Exibe_Comando_Importar',
  Pre_Venda_Nao_Envia_Venda: 'Pre_Venda_Nao_Envia_Venda',
  Exibe_Painel_Comprador: 'Exibe_Painel_Comprador',
  Pedido_A_faturar: 'Pedido_A_faturar',
  EntXML_Consulta_Via_Cadastro: 'EntXML_Consulta_Via_Cadastro',
  Programa_Fidelidade: 'Programa_Fidelidade',
  Nao_Informa_Pagamento: 'Nao_Informa_Pagamento',
  Indica_Representante: 'Indica_Representante',
  Exibe_Historico: 'Exibe_Historico'
};

exports.Prisma.tb_operacao_movimento_cfopOrderByRelevanceFieldEnum = {
  CFOP: 'CFOP',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_parametros_execucaoOrderByRelevanceFieldEnum = {
  Padrao_Balanca: 'Padrao_Balanca',
  DHU: 'DHU',
  PDV_Senha_Mult: 'PDV_Senha_Mult',
  Escreve_SQL_Sinc: 'Escreve_SQL_Sinc',
  Ir_Novo_Produto_Ao_Salvar: 'Ir_Novo_Produto_Ao_Salvar',
  Releitura_XML_Processar_Item: 'Releitura_XML_Processar_Item',
  Editar_Custo_Revisao: 'Editar_Custo_Revisao',
  Edita_Operacao_venda: 'Edita_Operacao_venda',
  Consultar_Financeiro_Historico: 'Consultar_Financeiro_Historico',
  Tipo_Saida_Lote: 'Tipo_Saida_Lote',
  Alteracao_Imediata_Custo_Revisao: 'Alteracao_Imediata_Custo_Revisao',
  Finalizadora_Pre_Venda: 'Finalizadora_Pre_Venda',
  Pessoa_Limite_Padrao: 'Pessoa_Limite_Padrao',
  Permite_Venda_Sem_Caixa: 'Permite_Venda_Sem_Caixa',
  Supervisor_Cancelar_Venda: 'Supervisor_Cancelar_Venda',
  Supervisor_Abrir_Caixa: 'Supervisor_Abrir_Caixa',
  Supervisor_Fechar_Caixa: 'Supervisor_Fechar_Caixa',
  Pedido_Compra_Aut_Sobreescrever: 'Pedido_Compra_Aut_Sobreescrever',
  XML_Organize: 'XML_Organize',
  Operacao_Caixa_Unico: 'Operacao_Caixa_Unico',
  Alternar_Empresa: 'Alternar_Empresa',
  Supervisor_Cancelar_Item: 'Supervisor_Cancelar_Item',
  Pgr_Fid: 'Pgr_Fid',
  Despesa_Gera_Financeiro: 'Despesa_Gera_Financeiro',
  Path_Send_WhatsApp: 'Path_Send_WhatsApp',
  Estoque_Unico: 'Estoque_Unico',
  Promissoria_Vencimento_Disponivel: 'Promissoria_Vencimento_Disponivel',
  Exibe_Diferenca_Fechamento_caixa: 'Exibe_Diferenca_Fechamento_caixa',
  Libera_Pedido_Baixado: 'Libera_Pedido_Baixado',
  Requer_Autenticacao_Alteracao_Custo: 'Requer_Autenticacao_Alteracao_Custo',
  Det_Fechamento_CX_Retaguarda: 'Det_Fechamento_CX_Retaguarda',
  Setar_Servidor: 'Setar_Servidor',
  Pesquisa_Produto_ID: 'Pesquisa_Produto_ID',
  Logo_Relatorio: 'Logo_Relatorio',
  Caminho_Retorno_Bancario_Processado: 'Caminho_Retorno_Bancario_Processado',
  Confirmacao_Item_Na_Venda: 'Confirmacao_Item_Na_Venda',
  Tipo_Padrao_Gestor: 'Tipo_Padrao_Gestor',
  Confirmar_Preco_Ao_Alterar_Margem: 'Confirmar_Preco_Ao_Alterar_Margem',
  Confirma_Nro_Parcelas_Venda: 'Confirma_Nro_Parcelas_Venda',
  Filtro_Tipo_Pessoa: 'Filtro_Tipo_Pessoa',
  Logo_Minha_Empresa: 'Logo_Minha_Empresa',
  Nome_Minha_Empresa: 'Nome_Minha_Empresa',
  Rodape_Minha_Empresa: 'Rodape_Minha_Empresa'
};

exports.Prisma.tb_pdv_cadastroOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  IP_Rede: 'IP_Rede',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  Rota_Aplicativo: 'Rota_Aplicativo',
  DHU: 'DHU',
  HD: 'HD',
  Caminho_TXT_Importar: 'Caminho_TXT_Importar',
  Importado_Mentor: 'Importado_Mentor',
  XML_Autorizado_Rede: 'XML_Autorizado_Rede',
  Carga_Geral_Obrigatoria: 'Carga_Geral_Obrigatoria'
};

exports.Prisma.tb_pdv_cargasOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  DHU: 'DHU'
};

exports.Prisma.tb_pdv_cargas_txtOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Arquivo_Origem: 'Arquivo_Origem',
  Arquivo_Destino: 'Arquivo_Destino',
  PDV: 'PDV',
  Status: 'Status',
  xStatus: 'xStatus',
  Excluido: 'Excluido'
};

exports.Prisma.tb_pdv_contra_valeOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  DHU: 'DHU'
};

exports.Prisma.tb_pedidos_compras_listaOrderByRelevanceFieldEnum = {
  Status: 'Status',
  Hora: 'Hora',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Confirmado: 'Confirmado',
  Importado_Mentor: 'Importado_Mentor',
  Hora_Lcto_Pedido: 'Hora_Lcto_Pedido',
  Recebido_Parcial: 'Recebido_Parcial',
  ALterado: 'ALterado',
  complemento_pdd: 'complemento_pdd',
  Ped_Automatico: 'Ped_Automatico'
};

exports.Prisma.tb_pedidos_stOrderByRelevanceFieldEnum = {
  Tipo_Documento: 'Tipo_Documento',
  CPF_CNPJ_Nota: 'CPF_CNPJ_Nota'
};

exports.Prisma.tb_pessoas_canal_cadastroOrderByRelevanceFieldEnum = {
  Canal: 'Canal',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_pessoas_formas_pagamentoOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_pessoas_representante_comercialOrderByRelevanceFieldEnum = {
  Nome: 'Nome',
  Telefone: 'Telefone',
  WhatsApp: 'WhatsApp',
  Email: 'Email',
  RegExcluido: 'RegExcluido',
  Empresas: 'Empresas'
};

exports.Prisma.tb_pessoas_retencoesOrderByRelevanceFieldEnum = {
  Lei_IRRF: 'Lei_IRRF'
};

exports.Prisma.tb_pessoas_veiculosOrderByRelevanceFieldEnum = {
  Placa: 'Placa',
  UF: 'UF',
  RNTC: 'RNTC',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_pessoas_vencimentosOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_pgr_fidOrderByRelevanceFieldEnum = {
  Hora_Inclusao: 'Hora_Inclusao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Ultima_Verificacao: 'Ultima_Verificacao'
};

exports.Prisma.tb_pgr_fid_resgateOrderByRelevanceFieldEnum = {
  Estoque: 'Estoque'
};

exports.Prisma.tb_pgr_fid_subOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Historico: 'Historico',
  DHU: 'DHU'
};

exports.Prisma.tb_portadorOrderByRelevanceFieldEnum = {
  Portador: 'Portador',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_portador_subOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Documento: 'Documento',
  Historico: 'Historico',
  ID: 'ID',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Estorno_Realizado: 'Estorno_Realizado'
};

exports.Prisma.tb_portador_transferenciasOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Historico: 'Historico',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_prestacao_servico_desacordoOrderByRelevanceFieldEnum = {
  CHave_CTe: 'CHave_CTe',
  Observacao: 'Observacao',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  nroProtocolo: 'nroProtocolo',
  dhProtocolo: 'dhProtocolo'
};

exports.Prisma.tb_produtos_alocacaoOrderByRelevanceFieldEnum = {
  Alocacao: 'Alocacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_cliente_especialOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_cliente_especial_faixaOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_codigo_barrasOrderByRelevanceFieldEnum = {
  Codigo_Barras: 'Codigo_Barras',
  Codigo_Barras_Caixa: 'Codigo_Barras_Caixa',
  Descricao: 'Descricao',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Complemento: 'Complemento',
  Alterado: 'Alterado'
};

exports.Prisma.tb_produtos_dcbOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  N_CAS: 'N_CAS',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.tb_produtos_departamentoOrderByRelevanceFieldEnum = {
  Departamento: 'Departamento',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_desmembramentoOrderByRelevanceFieldEnum = {
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.tb_produtos_desmembramento_subOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_produtos_estoqueOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Tabela: 'Tabela',
  Motivo: 'Motivo',
  Reservado: 'Reservado',
  DHU: 'DHU',
  SQL_Out: 'SQL_Out',
  Zerar: 'Zerar'
};

exports.Prisma.tb_produtos_estoque_posicao_empresaOrderByRelevanceFieldEnum = {
  Tempo: 'Tempo'
};

exports.Prisma.tb_produtos_faixa_descontoOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_familiaOrderByRelevanceFieldEnum = {
  Familia: 'Familia',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_fornecedorOrderByRelevanceFieldEnum = {
  cProd_Fornecedor: 'cProd_Fornecedor',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_grupoOrderByRelevanceFieldEnum = {
  Grupo: 'Grupo',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_imagemOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Path: 'Path',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_produtos_lotesOrderByRelevanceFieldEnum = {
  nLote: 'nLote',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Renasem: 'Renasem'
};

exports.Prisma.tb_produtos_lotes_estoqueOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Tabela: 'Tabela',
  Motivo: 'Motivo'
};

exports.Prisma.tb_produtos_manutencao_estoque_min_maxOrderByRelevanceFieldEnum = {
  Codigo_Barras: 'Codigo_Barras',
  Produto: 'Produto'
};

exports.Prisma.tb_produtos_marcaOrderByRelevanceFieldEnum = {
  Marca: 'Marca',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_padraoOrderByRelevanceFieldEnum = {
  Pesquisa_Rapida_PDV: 'Pesquisa_Rapida_PDV'
};

exports.Prisma.tb_produtos_precos_filialOrderByRelevanceFieldEnum = {
  DHU: 'DHU',
  Alterado: 'Alterado'
};

exports.Prisma.tb_produtos_receitasOrderByRelevanceFieldEnum = {
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.tb_produtos_receitas_subOrderByRelevanceFieldEnum = {
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_produtos_subfamiliaOrderByRelevanceFieldEnum = {
  SubFamilia: 'SubFamilia',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_subgrupoOrderByRelevanceFieldEnum = {
  SubGrupo: 'SubGrupo',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_tabela_precoOrderByRelevanceFieldEnum = {
  Tabela_Preco: 'Tabela_Preco',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_tabela_preco_subOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_tabela_preco_sub_faixaOrderByRelevanceFieldEnum = {
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_produtos_unidadesOrderByRelevanceFieldEnum = {
  Unidade: 'Unidade',
  Abreviacao: 'Abreviacao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_promocao_ticketOrderByRelevanceFieldEnum = {
  Regulamento: 'Regulamento',
  Promocao: 'Promocao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_representante_comercialOrderByRelevanceFieldEnum = {
  Nome: 'Nome',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_sangriaOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_segurancaOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  DB: 'DB',
  Destino: 'Destino',
  Status: 'Status',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_seguranca_confOrderByRelevanceFieldEnum = {
  DB: 'DB',
  Pasta_Destino: 'Pasta_Destino',
  Horario: 'Horario',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo'
};

exports.Prisma.tb_sip_quitacaoOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Nome_Cliente: 'Nome_Cliente',
  Cliente: 'Cliente'
};

exports.Prisma.tb_sql_base_executadoOrderByRelevanceFieldEnum = {
  xSQL: 'xSQL',
  Status: 'Status'
};

exports.Prisma.tb_sql_objetosOrderByRelevanceFieldEnum = {
  Formulario: 'Formulario',
  Objeto: 'Objeto',
  Larguras: 'Larguras',
  Tabela: 'Tabela',
  Exibe_ID: 'Exibe_ID',
  Nome: 'Nome',
  DHU: 'DHU'
};

exports.Prisma.tb_sql_objetos_subOrderByRelevanceFieldEnum = {
  Nome_Coluna: 'Nome_Coluna',
  Visivel: 'Visivel',
  Pesquisa: 'Pesquisa',
  DHU: 'DHU'
};

exports.Prisma.tb_sql_sincronizacaoOrderByRelevanceFieldEnum = {
  Comando_SQL: 'Comando_SQL',
  Mov_Saida: 'Mov_Saida',
  HORA: 'HORA',
  Liberado: 'Liberado'
};

exports.Prisma.tb_sql_sincronizacao_receberOrderByRelevanceFieldEnum = {
  Comando_SQL: 'Comando_SQL',
  Mov_Saida: 'Mov_Saida',
  Liberado: 'Liberado'
};

exports.Prisma.tb_tipos_pagamentosOrderByRelevanceFieldEnum = {
  Tipo_Pagamento: 'Tipo_Pagamento',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_transferencias_filiaisOrderByRelevanceFieldEnum = {
  Status: 'Status',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_umovme_activityhistoryOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Consulta_Dados: 'Consulta_Dados',
  Atividade: 'Atividade',
  Arquivo: 'Arquivo',
  Usuario: 'Usuario',
  API: 'API'
};

exports.Prisma.tb_umovme_apiOrderByRelevanceFieldEnum = {
  Token: 'Token',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_umovme_indicadoresOrderByRelevanceFieldEnum = {
  Informacao: 'Informacao',
  Data_Hora: 'Data_Hora'
};

exports.Prisma.tb_umovme_invconfOrderByRelevanceFieldEnum = {
  Codigo_Barras: 'Codigo_Barras',
  Hora: 'Hora',
  Usuario: 'Usuario'
};

exports.Prisma.tb_umovme_parametros_execucaoOrderByRelevanceFieldEnum = {
  Com_Dash: 'Com_Dash',
  Com_Entidades: 'Com_Entidades',
  Com_Finalizadoras: 'Com_Finalizadoras',
  Com_Produtos: 'Com_Produtos',
  DHU: 'DHU',
  Com_Precos: 'Com_Precos'
};

exports.Prisma.tb_umovme_pre_vendaOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Observacao: 'Observacao',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_umovme_precosOrderByRelevanceFieldEnum = {
  DHU: 'DHU',
  RegExcluido: 'RegExcluido',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.tb_umovme_usuariosOrderByRelevanceFieldEnum = {
  Atividade_Criada: 'Atividade_Criada',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_usuariosOrderByRelevanceFieldEnum = {
  Login: 'Login',
  Senha: 'Senha',
  Visualiza_Log: 'Visualiza_Log',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Atua_Central: 'Atua_Central',
  CPF: 'CPF',
  Gerente: 'Gerente',
  Supervisor: 'Supervisor',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor',
  SQLAut: 'SQLAut',
  Master: 'Master',
  uMovMe_Enviar: 'uMovMe_Enviar'
};

exports.Prisma.tb_usuarios_comunicacao_obrigatoriaOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Processado: 'Processado'
};

exports.Prisma.tb_usuarios_permissoesOrderByRelevanceFieldEnum = {
  Descricao: 'Descricao',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_usuarios_permissoes_comandosOrderByRelevanceFieldEnum = {
  Visivel: 'Visivel',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_usuarios_permissoes_comandos_subOrderByRelevanceFieldEnum = {
  Visivel: 'Visivel',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU'
};

exports.Prisma.tb_usuarios_permissoes_telasOrderByRelevanceFieldEnum = {
  Formulario: 'Formulario',
  liberado: 'liberado'
};

exports.Prisma.tb_usuarios_permissoes_telas_objetosOrderByRelevanceFieldEnum = {
  Objeto: 'Objeto',
  Legenda: 'Legenda',
  Ativo: 'Ativo'
};

exports.Prisma.tb_usuarios_senhaOrderByRelevanceFieldEnum = {
  Senha: 'Senha',
  Importado_Mentor: 'Importado_Mentor',
  Processado: 'Processado'
};

exports.Prisma.tb_vale_creditoOrderByRelevanceFieldEnum = {
  Codigo_Vale: 'Codigo_Vale',
  RegExcluido: 'RegExcluido',
  Ativo: 'Ativo',
  DHU: 'DHU',
  Hora: 'Hora',
  Observacao: 'Observacao'
};

exports.Prisma.tb_vale_credito_origemOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vale_credito_presenteOrderByRelevanceFieldEnum = {
  Processado: 'Processado',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vale_credito_subOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Historico: 'Historico'
};

exports.Prisma.tb_vendasOrderByRelevanceFieldEnum = {
  Hora_Inicio: 'Hora_Inicio',
  Hora_Finalizacao: 'Hora_Finalizacao',
  CPF_Consumidor: 'CPF_Consumidor',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  MODO: 'MODO',
  Importado_Mentor: 'Importado_Mentor',
  Importado_NFe: 'Importado_NFe',
  Observacao: 'Observacao',
  Movimenta_Estoque: 'Movimenta_Estoque',
  Numero_Contrato: 'Numero_Contrato',
  Numero_Requisicao: 'Numero_Requisicao',
  Venda_Online: 'Venda_Online',
  RegSysADM: 'RegSysADM'
};

exports.Prisma.tb_vendas_devolucaoOrderByRelevanceFieldEnum = {
  Liberado_para_servidor: 'Liberado_para_servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_vendas_pagamentosOrderByRelevanceFieldEnum = {
  tPag: 'tPag',
  indPag_Opc: 'indPag_Opc',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  TEF_Ok: 'TEF_Ok',
  TEF_Adquirente: 'TEF_Adquirente',
  TEF_CNPJ: 'TEF_CNPJ',
  TEF_Bandeira: 'TEF_Bandeira',
  TEF_CD: 'TEF_CD',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_vendas_pagamentos_preOrderByRelevanceFieldEnum = {
  tPag: 'tPag',
  indPag_Opc: 'indPag_Opc',
  xPag_Opc: 'xPag_Opc',
  tpIntegra_Opc: 'tpIntegra_Opc',
  CNPJ_Opc: 'CNPJ_Opc',
  tBand_Opc: 'tBand_Opc',
  cAut_Opc: 'cAut_Opc',
  Finalizacao_Caixa: 'Finalizacao_Caixa',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  TEF_Ok: 'TEF_Ok',
  TEF_Adquirente: 'TEF_Adquirente',
  TEF_CNPJ: 'TEF_CNPJ',
  TEF_Bandeira: 'TEF_Bandeira',
  TEF_CD: 'TEF_CD',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_vendas_preOrderByRelevanceFieldEnum = {
  Hora_Inicio: 'Hora_Inicio',
  Hora_Finalizacao: 'Hora_Finalizacao',
  CPF_Consumidor: 'CPF_Consumidor',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  MODO: 'MODO',
  Importado_Mentor: 'Importado_Mentor',
  Importado_NFe: 'Importado_NFe',
  Observacao: 'Observacao',
  Numero_Contrato: 'Numero_Contrato',
  Numero_Requisicao: 'Numero_Requisicao'
};

exports.Prisma.tb_vendas_pre_comandasOrderByRelevanceFieldEnum = {
  Numero_Comanda: 'Numero_Comanda',
  Codigo_Barras: 'Codigo_Barras',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtosOrderByRelevanceFieldEnum = {
  Codigo_Barras: 'Codigo_Barras',
  Reservado: 'Reservado',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Proc_Estoque: 'Proc_Estoque',
  Importado_Mentor: 'Importado_Mentor',
  Mentor_Estoque: 'Mentor_Estoque',
  Codigo_BarrasB: 'Codigo_BarrasB',
  Importado_NFe: 'Importado_NFe',
  Importado_NFe_Pre_Selecao: 'Importado_NFe_Pre_Selecao',
  ID_NFe: 'ID_NFe',
  Observacao: 'Observacao',
  Descricao_Digitada: 'Descricao_Digitada',
  Pgr_Fid: 'Pgr_Fid'
};

exports.Prisma.tb_vendas_produtos_auxiliarOrderByRelevanceFieldEnum = {
  Info_01: 'Info_01',
  Info_02: 'Info_02',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtos_insumosOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtos_insumos_preOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtos_lotesOrderByRelevanceFieldEnum = {
  Estoque_Processado: 'Estoque_Processado',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtos_lotes_preOrderByRelevanceFieldEnum = {
  Estoque_Processado: 'Estoque_Processado',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_vendas_produtos_preOrderByRelevanceFieldEnum = {
  Codigo_Barras: 'Codigo_Barras',
  Reservado: 'Reservado',
  RegExcluido: 'RegExcluido',
  Via_Oferta: 'Via_Oferta',
  DHU: 'DHU',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Proc_Estoque: 'Proc_Estoque',
  Importado_Mentor: 'Importado_Mentor',
  Mentor_Estoque: 'Mentor_Estoque',
  Codigo_BarrasB: 'Codigo_BarrasB',
  Importado_NFe: 'Importado_NFe',
  Importado_NFe_Pre_Selecao: 'Importado_NFe_Pre_Selecao',
  ID_NFe: 'ID_NFe',
  Observacao: 'Observacao',
  Descricao_Digitada: 'Descricao_Digitada',
  Pgr_Fid: 'Pgr_Fid'
};

exports.Prisma.tb_vendas_produtos_receitasOrderByRelevanceFieldEnum = {
  Mentor_Estoque: 'Mentor_Estoque',
  RegExcluido: 'RegExcluido',
  Liberado_para_Servidor: 'Liberado_para_Servidor',
  Importado_Servidor: 'Importado_Servidor',
  Importado_Mentor: 'Importado_Mentor'
};

exports.Prisma.tb_vendas_tef_comprovanteOrderByRelevanceFieldEnum = {
  Comprovante: 'Comprovante'
};

exports.Prisma.tb_vendedorOrderByRelevanceFieldEnum = {
  Vendedor: 'Vendedor',
  Tipo_Comissao: 'Tipo_Comissao',
  Comissao_Conforme_Parcelas: 'Comissao_Conforme_Parcelas',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_vendedor_subOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Documento: 'Documento',
  Historico: 'Historico',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU',
  Tempo: 'Tempo',
  Liberado: 'Liberado'
};

exports.Prisma.tb_vendedor_sub_pendenciaOrderByRelevanceFieldEnum = {
  Hora: 'Hora',
  Documento: 'Documento',
  Historico: 'Historico',
  RegExcluido: 'RegExcluido',
  DHU: 'DHU'
};

exports.Prisma.tb_versao_windadosOrderByRelevanceFieldEnum = {
  Codigo: 'Codigo',
  DHU: 'DHU'
};

exports.Prisma.tb_whatsapp_mensagemOrderByRelevanceFieldEnum = {
  Hora_Solicitacao: 'Hora_Solicitacao',
  Telefone: 'Telefone',
  Mensagem: 'Mensagem',
  Enviado: 'Enviado',
  RegExcluido: 'RegExcluido',
  Arquivo: 'Arquivo'
};

exports.Prisma.tb_whatsapp_parametrosOrderByRelevanceFieldEnum = {
  Texto: 'Texto',
  Ativo: 'Ativo',
  DHU: 'DHU',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_comandasOrderByRelevanceFieldEnum = {
  Comanda: 'Comanda',
  Comanda_Numero: 'Comanda_Numero',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido'
};

exports.Prisma.tb_mesasOrderByRelevanceFieldEnum = {
  Mesa: 'Mesa',
  Ativo: 'Ativo',
  RegExcluido: 'RegExcluido'
};


exports.Prisma.ModelName = {
  tb_pessoas: 'tb_pessoas',
  tb_produtos: 'tb_produtos',
  tb_produtos_setor: 'tb_produtos_setor',
  tb_abertura_caixa: 'tb_abertura_caixa',
  tb_abertura_caixa_contagem: 'tb_abertura_caixa_contagem',
  tb_adquirentes: 'tb_adquirentes',
  tb_adquirentes_bandeiras: 'tb_adquirentes_bandeiras',
  tb_boleto_carteira: 'tb_boleto_carteira',
  tb_boleto_comando_retorno: 'tb_boleto_comando_retorno',
  tb_caixas_ret: 'tb_caixas_ret',
  tb_cancelamentos: 'tb_cancelamentos',
  tb_cartoes: 'tb_cartoes',
  tb_centro_uso_consumo: 'tb_centro_uso_consumo',
  tb_cfop_devolucao: 'tb_cfop_devolucao',
  tb_check_contas: 'tb_check_contas',
  tb_comando_sql_cliente: 'tb_comando_sql_cliente',
  tb_compras: 'tb_compras',
  tb_compras_alteracao_imediata: 'tb_compras_alteracao_imediata',
  tb_compras_devolucao: 'tb_compras_devolucao',
  tb_compras_duplicatas: 'tb_compras_duplicatas',
  tb_compras_envio_nfe: 'tb_compras_envio_nfe',
  tb_compras_padrao: 'tb_compras_padrao',
  tb_compras_pagamentos: 'tb_compras_pagamentos',
  tb_compras_produtos: 'tb_compras_produtos',
  tb_compras_produtos_lotes: 'tb_compras_produtos_lotes',
  tb_conta_razao: 'tb_conta_razao',
  tb_cotacao: 'tb_cotacao',
  tb_cotacao_fechamento: 'tb_cotacao_fechamento',
  tb_cotacao_item: 'tb_cotacao_item',
  tb_cotacao_participantes: 'tb_cotacao_participantes',
  tb_cotacao_retornos: 'tb_cotacao_retornos',
  tb_despesas: 'tb_despesas',
  tb_despesas_aplicacao: 'tb_despesas_aplicacao',
  tb_despesas_aplicacao_sub: 'tb_despesas_aplicacao_sub',
  tb_despesas_b: 'tb_despesas_b',
  tb_despesas_b_financeiro: 'tb_despesas_b_financeiro',
  tb_despesas_b_rateio: 'tb_despesas_b_rateio',
  tb_devolucao_fiscal: 'tb_devolucao_fiscal',
  tb_documentos_personalizados: 'tb_documentos_personalizados',
  tb_documentos_personalizados_servidor: 'tb_documentos_personalizados_servidor',
  tb_dre_conf: 'tb_dre_conf',
  tb_empresas: 'tb_empresas',
  tb_empresas_comunicacao: 'tb_empresas_comunicacao',
  tb_empresas_conf_etiqueta_pedido: 'tb_empresas_conf_etiqueta_pedido',
  tb_empresas_conf_geral: 'tb_empresas_conf_geral',
  tb_empresas_conf_pet: 'tb_empresas_conf_pet',
  tb_empresas_conf_vendas: 'tb_empresas_conf_vendas',
  tb_empresas_custo: 'tb_empresas_custo',
  tb_empresas_diretorios: 'tb_empresas_diretorios',
  tb_empresas_email: 'tb_empresas_email',
  tb_empresas_etiquetas: 'tb_empresas_etiquetas',
  tb_empresas_imagens: 'tb_empresas_imagens',
  tb_empresas_liberadas_usuarios: 'tb_empresas_liberadas_usuarios',
  tb_empresas_odbc: 'tb_empresas_odbc',
  tb_empresas_pedido_online: 'tb_empresas_pedido_online',
  tb_empresas_ws: 'tb_empresas_ws',
  tb_financeiro_canal_pagamento: 'tb_financeiro_canal_pagamento',
  tb_financeiro_dados: 'tb_financeiro_dados',
  tb_financeiro_faturas: 'tb_financeiro_faturas',
  tb_financeiro_parcelas: 'tb_financeiro_parcelas',
  tb_financeiro_vinculos: 'tb_financeiro_vinculos',
  tb_formas_pagamento: 'tb_formas_pagamento',
  tb_formas_pagamento_desconto_autorizado: 'tb_formas_pagamento_desconto_autorizado',
  tb_formas_pagamento_empresas: 'tb_formas_pagamento_empresas',
  tb_formas_pagamento_oferta_autorizado: 'tb_formas_pagamento_oferta_autorizado',
  tb_formas_pagamento_usuarios: 'tb_formas_pagamento_usuarios',
  tb_formulario_permissao: 'tb_formulario_permissao',
  tb_formulario_permissao_sub: 'tb_formulario_permissao_sub',
  tb_grade_fiscal: 'tb_grade_fiscal',
  tb_inutilizacao_fiscal: 'tb_inutilizacao_fiscal',
  tb_inventario: 'tb_inventario',
  tb_inventario_conclusao: 'tb_inventario_conclusao',
  tb_inventario_exclusoes_departamento: 'tb_inventario_exclusoes_departamento',
  tb_inventario_nao_coletado: 'tb_inventario_nao_coletado',
  tb_inventario_sub: 'tb_inventario_sub',
  tb_local_retirada: 'tb_local_retirada',
  tb_log_alteracao: 'tb_log_alteracao',
  tb_logout: 'tb_logout',
  tb_ncm: 'tb_ncm',
  tb_ncm_novo: 'tb_ncm_novo',
  tb_nfce: 'tb_nfce',
  tb_nfce_assinados: 'tb_nfce_assinados',
  tb_nfce_autxml: 'tb_nfce_autxml',
  tb_nfce_detpagamentos: 'tb_nfce_detpagamentos',
  tb_nfce_duplicatas: 'tb_nfce_duplicatas',
  tb_nfce_item: 'tb_nfce_item',
  tb_nfce_lote: 'tb_nfce_lote',
  tb_nfe: 'tb_nfe',
  tb_nfe_autxml: 'tb_nfe_autxml',
  tb_nfe_cce: 'tb_nfe_cce',
  tb_nfe_defender: 'tb_nfe_defender',
  tb_nfe_defender_dados: 'tb_nfe_defender_dados',
  tb_nfe_defender_resumo: 'tb_nfe_defender_resumo',
  tb_nfe_detpagamentos: 'tb_nfe_detpagamentos',
  tb_nfe_duplicatas: 'tb_nfe_duplicatas',
  tb_nfe_item: 'tb_nfe_item',
  tb_nfe_item_rastro: 'tb_nfe_item_rastro',
  tb_nfe_mandest: 'tb_nfe_mandest',
  tb_nfe_operacao_inverso_estoque: 'tb_nfe_operacao_inverso_estoque',
  tb_nfe_padrao: 'tb_nfe_padrao',
  tb_nfe_referencia: 'tb_nfe_referencia',
  tb_nfe_solicitacao_pdv: 'tb_nfe_solicitacao_pdv',
  tb_nfe_veiculos: 'tb_nfe_veiculos',
  tb_ocorrencias: 'tb_ocorrencias',
  tb_operacao_fiscal: 'tb_operacao_fiscal',
  tb_operacao_fiscal_raiz_cnpj: 'tb_operacao_fiscal_raiz_cnpj',
  tb_operacao_movimento: 'tb_operacao_movimento',
  tb_operacao_movimento_cfop: 'tb_operacao_movimento_cfop',
  tb_parametros_execucao: 'tb_parametros_execucao',
  tb_pdv_cadastro: 'tb_pdv_cadastro',
  tb_pdv_cargas: 'tb_pdv_cargas',
  tb_pdv_cargas_txt: 'tb_pdv_cargas_txt',
  tb_pdv_contra_vale: 'tb_pdv_contra_vale',
  tb_pedidos_compras_lista: 'tb_pedidos_compras_lista',
  tb_pedidos_pagamentos_st: 'tb_pedidos_pagamentos_st',
  tb_pedidos_produtos_st: 'tb_pedidos_produtos_st',
  tb_pedidos_st: 'tb_pedidos_st',
  tb_pessoas_canal_cadastro: 'tb_pessoas_canal_cadastro',
  tb_pessoas_formas_pagamento: 'tb_pessoas_formas_pagamento',
  tb_pessoas_representante_comercial: 'tb_pessoas_representante_comercial',
  tb_pessoas_retencoes: 'tb_pessoas_retencoes',
  tb_pessoas_veiculos: 'tb_pessoas_veiculos',
  tb_pessoas_vencimentos: 'tb_pessoas_vencimentos',
  tb_pgr_fid: 'tb_pgr_fid',
  tb_pgr_fid_resgate: 'tb_pgr_fid_resgate',
  tb_pgr_fid_sub: 'tb_pgr_fid_sub',
  tb_portador: 'tb_portador',
  tb_portador_sub: 'tb_portador_sub',
  tb_portador_transferencias: 'tb_portador_transferencias',
  tb_prestacao_servico_desacordo: 'tb_prestacao_servico_desacordo',
  tb_produtos_alocacao: 'tb_produtos_alocacao',
  tb_produtos_cliente_especial: 'tb_produtos_cliente_especial',
  tb_produtos_cliente_especial_faixa: 'tb_produtos_cliente_especial_faixa',
  tb_produtos_codigo_barras: 'tb_produtos_codigo_barras',
  tb_produtos_dcb: 'tb_produtos_dcb',
  tb_produtos_departamento: 'tb_produtos_departamento',
  tb_produtos_desmembramento: 'tb_produtos_desmembramento',
  tb_produtos_desmembramento_sub: 'tb_produtos_desmembramento_sub',
  tb_produtos_estoque: 'tb_produtos_estoque',
  tb_produtos_estoque_posicao_empresa: 'tb_produtos_estoque_posicao_empresa',
  tb_produtos_estrutura_custo: 'tb_produtos_estrutura_custo',
  tb_produtos_faixa_desconto: 'tb_produtos_faixa_desconto',
  tb_produtos_familia: 'tb_produtos_familia',
  tb_produtos_fornecedor: 'tb_produtos_fornecedor',
  tb_produtos_grupo: 'tb_produtos_grupo',
  tb_produtos_imagem: 'tb_produtos_imagem',
  tb_produtos_lotes: 'tb_produtos_lotes',
  tb_produtos_lotes_estoque: 'tb_produtos_lotes_estoque',
  tb_produtos_manutencao_estoque_min_max: 'tb_produtos_manutencao_estoque_min_max',
  tb_produtos_manutencao_estoque_min_max_vendas: 'tb_produtos_manutencao_estoque_min_max_vendas',
  tb_produtos_marca: 'tb_produtos_marca',
  tb_produtos_padrao: 'tb_produtos_padrao',
  tb_produtos_pedido_online: 'tb_produtos_pedido_online',
  tb_produtos_precos_filial: 'tb_produtos_precos_filial',
  tb_produtos_receitas: 'tb_produtos_receitas',
  tb_produtos_receitas_sub: 'tb_produtos_receitas_sub',
  tb_produtos_subfamilia: 'tb_produtos_subfamilia',
  tb_produtos_subgrupo: 'tb_produtos_subgrupo',
  tb_produtos_tabela_preco: 'tb_produtos_tabela_preco',
  tb_produtos_tabela_preco_sub: 'tb_produtos_tabela_preco_sub',
  tb_produtos_tabela_preco_sub_faixa: 'tb_produtos_tabela_preco_sub_faixa',
  tb_produtos_unidades: 'tb_produtos_unidades',
  tb_promocao_ticket: 'tb_promocao_ticket',
  tb_representante_comercial: 'tb_representante_comercial',
  tb_sangria: 'tb_sangria',
  tb_seguranca: 'tb_seguranca',
  tb_seguranca_conf: 'tb_seguranca_conf',
  tb_sip_quitacao: 'tb_sip_quitacao',
  tb_sql_base_executado: 'tb_sql_base_executado',
  tb_sql_objetos: 'tb_sql_objetos',
  tb_sql_objetos_sub: 'tb_sql_objetos_sub',
  tb_sql_sincronizacao: 'tb_sql_sincronizacao',
  tb_sql_sincronizacao_posicao: 'tb_sql_sincronizacao_posicao',
  tb_sql_sincronizacao_receber: 'tb_sql_sincronizacao_receber',
  tb_temp: 'tb_temp',
  tb_tipos_pagamentos: 'tb_tipos_pagamentos',
  tb_tipos_pagamentos_sub: 'tb_tipos_pagamentos_sub',
  tb_transferencias_filiais: 'tb_transferencias_filiais',
  tb_umovme_activityhistory: 'tb_umovme_activityhistory',
  tb_umovme_api: 'tb_umovme_api',
  tb_umovme_indicadores: 'tb_umovme_indicadores',
  tb_umovme_invconf: 'tb_umovme_invconf',
  tb_umovme_parametros_execucao: 'tb_umovme_parametros_execucao',
  tb_umovme_pre_venda: 'tb_umovme_pre_venda',
  tb_umovme_pre_venda_item: 'tb_umovme_pre_venda_item',
  tb_umovme_precos: 'tb_umovme_precos',
  tb_umovme_usuarios: 'tb_umovme_usuarios',
  tb_usuarios: 'tb_usuarios',
  tb_usuarios_comunicacao_obrigatoria: 'tb_usuarios_comunicacao_obrigatoria',
  tb_usuarios_empresas: 'tb_usuarios_empresas',
  tb_usuarios_permissoes: 'tb_usuarios_permissoes',
  tb_usuarios_permissoes_comandos: 'tb_usuarios_permissoes_comandos',
  tb_usuarios_permissoes_comandos_sub: 'tb_usuarios_permissoes_comandos_sub',
  tb_usuarios_permissoes_relatorios: 'tb_usuarios_permissoes_relatorios',
  tb_usuarios_permissoes_telas: 'tb_usuarios_permissoes_telas',
  tb_usuarios_permissoes_telas_objetos: 'tb_usuarios_permissoes_telas_objetos',
  tb_usuarios_senha: 'tb_usuarios_senha',
  tb_vale_credito: 'tb_vale_credito',
  tb_vale_credito_origem: 'tb_vale_credito_origem',
  tb_vale_credito_presente: 'tb_vale_credito_presente',
  tb_vale_credito_sub: 'tb_vale_credito_sub',
  tb_vendas: 'tb_vendas',
  tb_vendas_agrupamentos: 'tb_vendas_agrupamentos',
  tb_vendas_devolucao: 'tb_vendas_devolucao',
  tb_vendas_pagamentos: 'tb_vendas_pagamentos',
  tb_vendas_pagamentos_pre: 'tb_vendas_pagamentos_pre',
  tb_vendas_pre: 'tb_vendas_pre',
  tb_vendas_pre_comandas: 'tb_vendas_pre_comandas',
  tb_vendas_produtos: 'tb_vendas_produtos',
  tb_vendas_produtos_auxiliar: 'tb_vendas_produtos_auxiliar',
  tb_vendas_produtos_insumos: 'tb_vendas_produtos_insumos',
  tb_vendas_produtos_insumos_pre: 'tb_vendas_produtos_insumos_pre',
  tb_vendas_produtos_lotes: 'tb_vendas_produtos_lotes',
  tb_vendas_produtos_lotes_pre: 'tb_vendas_produtos_lotes_pre',
  tb_vendas_produtos_pre: 'tb_vendas_produtos_pre',
  tb_vendas_produtos_receitas: 'tb_vendas_produtos_receitas',
  tb_vendas_tef_comprovante: 'tb_vendas_tef_comprovante',
  tb_vendedor: 'tb_vendedor',
  tb_vendedor_sub: 'tb_vendedor_sub',
  tb_vendedor_sub_pendencia: 'tb_vendedor_sub_pendencia',
  tb_versao_windados: 'tb_versao_windados',
  tb_whatsapp_mensagem: 'tb_whatsapp_mensagem',
  tb_whatsapp_parametros: 'tb_whatsapp_parametros',
  tb_comandas: 'tb_comandas',
  tb_mesas: 'tb_mesas'
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
