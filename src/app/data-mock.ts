export const USUARIO = {
    id: '3100448',
    nome: 'RAPHAEL SANTANA CORREIA SILVA',
    nomeGuerra: 'SANTANA',
    sexo: 'M',
    cpf: '01965470165',
    posto: '2S',
    quadro: 'QSS',
    especialidade: 'SIN',
    nomeEspecialidade: 'INFORMÁTICA',
    organizacaoMilitarId: '232034',
    organizacaoMilitarSigla: 'DIRENS',
    dataNascimento: 687322800000,
    dataPraca: 1294884000000,
    dataPromocaoAtual: 1533092400000,
    nomePais: 'BRASIL',
    nomeCidade: 'DUQUE DE CAXIAS',
    siglaEstado: 'RJ',
    identidadeMilitar: '557003',
    identidadeCivil: '270133556',
    dataEmissaoCivil: null,
    nomeOrgaoEmissorCivil: null,
    numeroPisPasep: '19051043409',
    altura: null,
    peso: null,
    raca: 'PARDA',
    situacaoFormatado: 'Militar da Ativa',
    ttcFormatado: 'não',
    tipoSangueRh: 'A+',
    documentoPassaporte: [],
    telefoneResidencialPessoa: [
        {
            id: 380403,
            saram: '6253814',
            numeroContato: '3547-4043',
            tipoContato: 'RES',
            codigoArea: '61'
        }
    ],
    telefoneCelularPessoa: [
        {
            id: 380404,
            saram: '6253814',
            numeroContato: '8262-2228',
            tipoContato: 'CEL',
            codigoArea: '61'
        }
    ],
    emailPessoa: [
        {
            id: 559113,
            saram: '6253814',
            email: 'santanarscs@depens.aer.mil.br',
            tipoEmail: 'I'
        },
        {
            id: 563865,
            saram: '6253814',
            email: 'raphaelstn@gmail.com',
            tipoEmail: 'E'
        },
        {
            id: 571688,
            saram: '6253814',
            email: 'santanarscs@fab.mil.br',
            tipoEmail: 'C'
        }
    ],
    enderecoPessoa: [
        {
            id: '01',
            saram: '6253814',
            endereco: 'QE 18 BLOCO G APT 316',
            bairro: 'GUARA I',
            numeroEndereco: null,
            complementoEndereco: null,
            cep: '71015075',
            localidade: {
                id: '06767',
                pais: {
                    id: '001',
                    nome: 'BRASIL'
                },
                cidade: 'GUARÁ',
                estado: 'DF'
            },
            localidadeId: '06767',
            situacao: 'S'
        }
    ],
    inspecaoPessoa: [],
    civilComplemento: [],
    classificacao: 'Militar da Ativa',
};
export const PERMISSOES = [
    {
        pathLink: 'admin_sistema',
        nmLinkPai: '',
        icone: '',
        nome: 'ADMIN_SISTEMA',
        nomeLink: 'admin_sistema',
        id: 1650,
        modulo: 13,
        descricao: 'Administrador do sistema - apenas para desenvolvedores que necessitam ter acesso total ao sistema - EACADEMICO',
        perfil: 2174580
    },
    // {
    //     descricao: "Docente - perfil não existente no CONPEPE atribuido localmente a usuários que possuam docências no sistema",
    //     icone: "",
    //     id: 999,
    //     modulo: 999,
    //     nmLinkPai: "",
    //     nome: "AREA_DOCENTE",
    //     nomeLink: "area_docente",
    //     pathLink: "area_docente",
    //     perfil: 999999
    // },
    // {
    //     descricao: "Discente - perfil não existente no CONPEPE atribuido localmente a usuários que possuam enturmações no sistema",
    //     icone: "",
    //     id: 888,
    //     modulo: 888,
    //     nmLinkPai: "",
    //     nome: "AREA_DISCENTE",
    //     nomeLink: "area_discente",
    //     pathLink: "area_discente",
    //     perfil: 999999
    // },
    // {
    //     descricao: "Secretaria - perfil para integrantes das secretarias",
    //     icone: "",
    //     id: 999,
    //     modulo: 999,
    //     nmLinkPai: "",
    //     nome: "SECRETARIA",
    //     nomeLink: "secretaria",
    //     pathLink: "secretaria",
    //     perfil: 999999
    // },
    // {
    //     "pathLink": "supervisao_sistema_remover",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "SUPERVISAO_SISTEMA_REMOVER",
    //     "nomeLink": "supervisao_sistema_remover",
    //     "id": 1689,
    //     "modulo": 13,
    //     "descricao": "Permissão que habilita o usuário a executar operações de destruir do sistema - EACADEMICO",
    //     "perfil": 2235570
    // },
    // {
    //     "pathLink": "supervisao_sistema_log",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "SUPERVISAO_SISTEMA_LOG",
    //     "nomeLink": "supervisao_sistema_log",
    //     "id": 1658,
    //     "modulo": 13,
    //     "descricao": "Permissão que habilita o usuário a executar operações
  //     de destruir, restaurar e leitura de logs do sistema - EACADEMICO",
    //     "perfil": 2217915
    // },
    // {
    //     "pathLink": "curso_leitura",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "CURSO_LEITURA",
    //     "nomeLink": "curso_leitura",
    //     "id": 181,
    //     "modulo": 13,
    //     "descricao": "CURSO LEITURA",
    //     "perfil": 112155
    // },
    // {
    //     "pathLink": "discente_leitura",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "DISCENTE_LEITURA",
    //     "nomeLink": "discente_leitura",
    //     "id": 1685,
    //     "modulo": 13,
    //     "descricao": "Permissão de leitura no menu de Discentes - EACADEMICO",
    //     "perfil": 2190630
    // },
    // {
    //     "pathLink": "aprovacao_final_doc_ensino",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "APROVACAO_FINAL_DOC_ENSINO",
    //     "nomeLink": "aprovacao_final_doc_ensino",
    //     "id": 1475,
    //     "modulo": 13,
    //     "descricao": "Aprovação de documentos de Ensino pelo grande comando",
    //     "perfil": 2036550
    // },
    // {
    //     "pathLink": "aprovar_doc_ensino",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "APROVAR_DOC_ENSINO",
    //     "nomeLink": "aprovar_doc_ensino",
    //     "id": 182,
    //     "modulo": 13,
    //     "descricao": "Aprovar ou rejeitar documentos de Ensino das Escolas confeccionados pelo GT",
    //     "perfil": 2038155
    // },
    // {
    //     "pathLink": "curriculo_escrita",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "CURRICULO_ESCRITA",
    //     "nomeLink": "curriculo_escrita",
    //     "id": 1485,
    //     "modulo": 13,
    //     "descricao": "Permissão de escrita no menu de currículo mínimo - EACADEMICO",
    //     "perfil": 1988400
    // },
    // {
    //     "pathLink": "curriculo_leitura",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "CURRICULO_LEITURA",
    //     "nomeLink": "curriculo_leitura",
    //     "id": 1484,
    //     "modulo": 13,
    //     "descricao": "Permissão de leitura no menu de currículo mínimo - EACADEMICO",
    //     "perfil": 1990005
    // },
    // {
    //     "pathLink": "grupo_area_ensino_escrita",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "GRUPO_AREA_ENSINO_ESCRITA",
    //     "nomeLink": "grupo_area_ensino_escrita",
    //     "id": 1660,
    //     "modulo": 13,
    //     "descricao": "Permissão de acesso ao menu de ajustes globais de ensino - EACADEMICO",
    //     "perfil": 2221125
    // }
    // EXEMPLO CURSO ESCRITA
    // {
    //     "pathLink": "curso_escrita",
    //     "nmLinkPai": "",
    //     "icone": "",
    //     "nome": "CURSO_ESCRITA",
    //     "nomeLink": "curso_escrita",
    //     "id": 181,
    //     "modulo": 13,
    //     "descricao": "CURSO ESCRITA",
    //     "perfil": 112155
    // }
];
export const ORGANIZACAO = { id: '232034', comandoId: '232001',
  omSuperiorId: '232001', nome: 'DIRETORIA DE ENSINO', sigla: 'DIRENS',
  email: null, pabx: null, homePage: null, extinta: 'N' };
export const SUBORDINADAS = [
    {
        id: '242501',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'ACADEMIA DA FORÇA AÉREA',
        sigla: 'AFA',
        email: 'sigpes@afa.intraer',
        pabx: '3565-7000',
        homePage: 'www.afa.intraer',
        extinta: 'N'
    },
    {
        id: '242502',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'ESCOLA DE ESPECIALISTAS DA AERONÁUTICA',
        sigla: 'EEAR',
        email: 'sigpes@afa.intraer',
        pabx: '3565-7000',
        homePage: 'www.afa.intraer',
        extinta: 'N'
    },
    {
        id: '132025',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'BATALHÃO DE INFANTARIA DA AERONÁUTICA ESPECIAL DOS AFONSOS',
        sigla: 'BINFAE AF',
        email: null,
        pabx: '2457-2425',
        homePage: null,
        extinta: 'N'
    },
    {
        id: '242503',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'ESCOLA DE APERFEIÇOAMENTO DE OFICIAIS DA AERONÁUTICA',
        sigla: 'EAOAR',
        email: 'eaoar@unifa.maer.mil.br',
        pabx: '2457-2500',
        homePage: 'www.eaoar.maer.mil.br',
        extinta: 'N'
    },
    {
        id: '232002',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'ESCOLA DE COMANDO E ESTADO-MAIOR DA AERONÁUTICA',
        sigla: 'ECEMAR',
        email: 'ecemar_da3@unifa.intraer',
        pabx: '2457-2500',
        homePage: 'www.servidor1.unifa.maer.mil.br/',
        extinta: 'N'
    },
    {
        id: '232013',
        comandoId: '232001',
        omSuperiorId: '232034',
        nome: 'UNIVERSIDADE DA FORÇA AÉREA',
        sigla: 'UNIFA',
        email: 'unifa@unifa.maer.mil.br',
        pabx: '2157-2500',
        homePage: 'www2.unifa.maer.mil.br',
        extinta: 'N'
    },
  {
    id: '231401',
    comandoId: '232051',
    nome: 'ESCOLA PREPARATÓRIA DE CADETES-DO-AR',
    sigla: 'EPCAR',
    email: 'epcar@epcar.maer.mil.br',
    pabx: '2157-2500',
    homePage: 'www2.epcar.maer.mil.br',
    extinta: 'N'
  }
];
