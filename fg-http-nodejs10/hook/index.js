async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log('\n  _    _                          _  _____ _                 _   ______ _____ \n | |  | |                        (_)/ ____| |               | | |  ____/ ____|\n | |__| |_   _  __ ___      _____ _| |    | | ___  _   _  __| | | |__ | |  __ \n |  __  | | | |/ _` \\ \\ /\\ / / _ \\ | |    | |/ _ \\| | | |/ _` | |  __|| | |_ |\n | |  | | |_| | (_| |\\ V  V /  __/ | |____| | (_) | |_| | (_| | | |   | |__| |\n |_|  |_|\\__,_|\\__,_| \\_/\\_/ \\___|_|\\_____|_|\\___/ \\__,_|\\__,_| |_|    \\_____|\n                                                                              \n                                                                              \n')
    console.log(`\n    Welcome to the Huawei FunctionGraph start application
     This application requires to open these services: 
        FunctionGraph : https://console.huaweicloud.com/
     This application can help you quickly deploy the huaweicloud functionGraph project.
     The application uses FG component：
        * Help Docs  : https://github.com/xinwuyun/fg
        * Yaml Config: https://github.com/xinwuyun/fg/blob/main/docs/Others/yaml.md
     The application homepage: https://github.com/xinwuyun/start-fg\n`)
}

module.exports = {
    postInit,
    preInit
}
postInit()