const options = {
    // Número de postagens para raspar: {int default: 20}
    number: 50,
    
    // Definir sessão: {string[] default: ['']}
    // O valor do cookie da sessão autenticada é necessário para obter o feed do usuário / tendência / música / hashtag
    // Você pode colocar aqui qualquer número de sessões, cada solicitação irá selecionar uma sessão aleatória da lista
    sessionList: ['sid_tt=21312213'],

    // Set proxy {string[] | string default: ''}
    // http proxy: 127.0.0.1:8080
    // socks proxy: socks5://127.0.0.1:8080
    // Você pode passar proxies como uma matriz e o raspador selecionará aleatoriamente um proxy da matriz para executar as solicitações
    proxy: '',

    // Set to {true} to search by user id: {boolean default: false}
    by_user_id: false,

    // Quantas postagens devem ser baixadas de forma assíncrona. Somente if {download:true}: {int default: 5}
    asyncDownload: 5,

    // Quantas postagens devem ser copiadas de forma assíncrona: {int default: 3}
    // Current option will be applied only with current types: music and hashtag
    // With other types it is always 1 because every request response to the TikTok API is providing the "maxCursor" value
    // that is required to send the next request
    asyncScraping: 3,

    // File path where all files will be saved: {string default: 'CURRENT_DIR'}
    filepath: 'CURRENT_DIR',

    // Custom file name for the output files: {string default: ''}
    fileName: `CURRENT_DIR`,

    // Output with information can be saved to a CSV or JSON files: {string default: 'na'}
    // 'csv' to save in csv
    // 'json' to save in json
    // 'all' to save in json and csv
    // 'na' to skip this step
    filetype: `na`,

    // Set custom headers: user-agent, cookie and etc
    // NOTE: When you parse video feed or single video metadata then in return you will receive {headers} object
    // that was used to extract the information and in order to access and download video through received {videoUrl} value you need to use same headers
    headers: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
        "referer": "https://www.tiktok.com/",
        "cookie": "tt_webid_v2=689854141086886123"
    },
    
    // Download video without the watermark: {boolean default: false}
    // Set to true to download without the watermark
    // This option will affect the execution speed
    noWaterMark: false,
    
    // Create link to HD video: {boolean default: false}
    // This option will only work if {noWaterMark} is set to {true}
    hdVideo: false,

    // verifyFp is used to verify the request and avoid captcha
    // When you are using proxy then there are high chances that the request will be 
    // blocked with captcha
    // You can set your own verifyFp value or default(hardcoded) will be used
    verifyFp: ''
};

exports.options = options