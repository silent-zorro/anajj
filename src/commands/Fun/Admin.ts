import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'dev',
            description: 'Displays the info',
            category: 'misc',
            usage: `${client.config.prefix}void`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const image = this.client.assets.get('fb')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `🖤 *Cortana* 🖤\n\n👨🏾‍🚀 *Description: Devoloped by Isuru Anuradha*\n\n🌐 *FB: https://www.facebook.com/isuru.anuradha.Iz.Silent.Zorro*\n`
        )
    }
}
