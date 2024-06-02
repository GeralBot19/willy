let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `⚔️🥷🏻➢ 𝐃𝐞𝐬𝐩𝐢𝐞𝐫𝐭𝐞𝐧 𝐡𝐚𝐲 𝐯𝐬 :  ${pesan}`
let teks = `⚔️🥷🏻𝐋𝐨𝐬 𝐢𝐧𝐯𝐨𝐜𝐨ＬＮＡ あ  ＰＥＲＵ  ✓ ⚔️🥷🏻 \n\n ${oi}\n\n ⚔️🥷🏻➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `⚔️🥷🏻≽ @${mem.id.split('@')[0]}\n`}
teks += `ＬＮＡ あ  ＰＥＲＵ  ✓ `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
