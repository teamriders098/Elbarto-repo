import { join } from 'path'
import { BaseCommand, Command, Message } from '../../Structures'

@Command('repo', {
    description: "Displays bot's information",
    usage: 'repo',
    category: 'general',
    cooldown: 5,
    exp: 20
})
export default class extends BaseCommand {
    public override execute = async ({ reply }: Message): Promise<void> => {
        const { name } = require(join(__dirname, '..', '..', '..', 'package.json')) as {
            name: string
        }
        const image = this.client.assets.get('https://telegra.ph/file/31323c5a1527be6b553c8.jpg') as Buffer
        const text = `*━━━❰ DREADED BOT  ❱━━━*\n\n⚜𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: An anime themed WhatsApp bot based on multi device(MD).        

🚥𝗦𝘁𝗮𝘁𝘂𝘀: Bot in development stage.

🧩𝗛𝗶𝗻𝘁: The bot is not an open source project, therefore you can deploy a version of it;
(nowhere coz its not online)

⭐𝗜𝗻𝗳𝗼: This bot is using a base of WhatsApp-bot, we therefore don't have any copyright or either affiliated with WhatsApp-bot anyhowly. Thanks to lots of people we are successful now.
Follow Elbarto on github!:)
(https://github.com/elbarto2m)

📃𝗟𝗶𝗰𝗲𝗻𝘀𝗲: You may obtain a copy of the License at;
http://www.gnu.org/licenses/

(𝗚𝗡𝗨 𝗔𝗙𝗙𝗘𝗥𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗣𝗨𝗕𝗟𝗜𝗖 𝗟𝗜𝗖𝗘𝗡𝗦𝗘).
»𝖵𝖾𝗋𝗌𝗂𝗈𝗇 3.0 \n`
        return void (await reply(image, 'image', undefined, undefined, text, undefined, {
            title: this.client.utils.capitalize(name),
            thumbnail: image,
            mediaType: 1
        }))
    }
}
