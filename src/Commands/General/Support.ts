import { BaseCommand, Command, Message } from '../../Structures'
import { AnyMessageContent } from '@adiwajshing/baileys'

@Command('support', {
    description: 'the bot sends the support links to your pm.',
    category: 'general',
    usage: 'support',
    cooldown: 15,
    exp: 10,
    dm: true
})
export default class command extends BaseCommand {
    override execute = async (M: Message): Promise<void> => {
        let url!: string
        let text = '*❤ Kakashi Botz. Inc❤*\n\n🏮 Casino group  = https://chat.whatsapp.com/Bp1uZ4Uym9X41tKeZthjI6\n\n❤ Support group\n\https://chat.whatsapp.com/KVMLZQ5Dm3H5V1sh0gBApR'
        const { supportGroups } = this.client.config
        for (let i = 0; i < supportGroups.length; i++) {
            const { subject } = await this.client.groupMetadata(supportGroups[i])
            const code = await this.client.groupInviteCode(supportGroups[i])
            text += `*#${i + 1}*\n*${subject}:* *https://chat.whatsapp.com/Bp1uZ4Uym9X41tKeZthjI6*\n`
            if (!url) url = `https://chat.whatsapp.com/${code}`
        }
        await this.client.sendMessage(M.sender.jid, {
            text
        } as unknown as AnyMessageContent)
        return void M.reply('🎈Sent the support group links in your DM.')
    }
}
