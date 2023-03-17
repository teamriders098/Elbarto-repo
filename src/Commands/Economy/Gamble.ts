import { BaseCommand, Command, Message } from '../../Structures'
import { IArgs } from '../../Types'

@Command('gamble', {
    description: '',
    usage: 'Gamble <amount> left/right',
    category: 'economy',
    cooldown: 5,
    exp: 20,
    casino: true
})
export default class command extends BaseCommand {
    override execute = async (M: Message, { args }: IArgs): Promise<void> => {
        const directions = ['left', 'right'] as TGamblingDirections[]
        if (M.numbers.length < 1 || args.length < 1)
            return void M.reply(`Invalid usage! Example: *${this.client.config.prefix}gamble right 500*`)
        const amount = M.numbers[0]
        const { wallet } = await this.client.DB.getUser(M.sender.jid)
        if (amount > wallet) return void M.reply(`Check your wallet`)
        const direction = args[1]
        const buttons = [
            {
                buttonId: 'id1',
                buttonText: { displayText: `${this.client.config.prefix}wallet` },
                type: 1
            }
        ]
        const result = directions[Math.floor(Math.random() * directions.length)]
        await this.client.DB.setGold(M.sender.jid, result === direction ? amount : -amount)
        const buttonMessage = {
            text: result === direction ? `Congratulations,You just won ${amount}🎉` : `Sorry, Unfortunately you lost ${amount}😢`,
            footer: 'NOVA',
            buttons: buttons,
            headerType: 1
        }
        return void (await this.client.sendMessage(M.from, buttonMessage, {
            quoted: M.message
        }))
    }
}

type TGamblingDirections = 'left' | 'right'
