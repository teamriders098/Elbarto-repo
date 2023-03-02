import { BaseCommand, Command, Message } from '../../Structures'
import { IArgs } from '../../Types'

@Command('report', {
    description: 'Send message mods, report, issue, advice.',
    category: 'general',
    usage: 'report <your_message>',
    dm: true,
    aliases: ['bug'],
    exp: 15,
    cooldown: 200,
})

export default class extends BaseCommand {
    public override execute = async (M: Message, { context }: IArgs): Promise<void> => {
        if (!context) return void (await M.reply(`Please provide report Message.`))
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        const username = user === M.sender.jid ? M.sender.username : this.client.contact.getContact(user).username
        const term = context.trim()
        await this.client.sendMessage('1234xxxxxxxxxxxxx@g.us', {
            text: `*[ Report Message ]* \n\n*Group:* ${M.groupMetadata?.subject} \n*Name:* ${username} \n*Jid:* @${
                M.sender.jid.split('@')[0]
            } \n*Message:* ${term}`,
            mentions: [M.sender.jid]
        })
        return void M.reply('*Your report message has been sent to the bot admin!*')
    }
}
