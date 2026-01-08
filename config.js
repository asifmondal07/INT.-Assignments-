import  "dotenv/config.js"

export default{
    port: process.env.port || 2000,
    openAiKey:process.env.openAiKey
}