

let handler = async (m, { conn, text, participants }) => {

const {delay} = require("@danielteodoro/baileys-md")

async function f(){

let getChats = await conn.groupFetchAllParticipating()

let chats = Object.entries(getGroups).slice(0).map(entry => entry[1])

let anu = groups.map(v => v.id)

m.reply(`විකාශනය යැවීම ${anu.length} සමූහ සදහා${anu.length * 1.5} තප්පර`)

for (let i of anu) {

await delay(100)

conn.copyNForward(i, m.quoted.fakeObj, true)

}

m.reply(`බ්‍රෝඩ්කාස්ට් යැවීම සාර්ථකයි බොසා 😎${anu.length} Group Chat`)

}

return f()

}

handler.help = ['bc']

handler.tags = ['owner']

handler.command = /^(bc)$/i

handler.owner = true

module.exports = handler
