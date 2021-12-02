import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'screenshot',
            aliases: ['ss', 'ssweb'],
            description: 'Gives you the screenshot of the given url. Exclusive from ISURU ',
            category: 'media',
            usage: `${client.config.prefix}screenshot [url]`,
            baseXp: 30
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the url`))
        const url = joined.trim()
        return void M.reply(
            await request.buffer(
                `https://shot.screenshotapi.net/screenshot?&url=${url}&full_page=true&fresh=true&output=image&file_type=png&wait_for_event=load`
            ),
            MessageType.image,
            undefined,
            undefined,
            `🧐 This is the preview 🧐\n`,
            undefined
        ).catch((reason: any) => M.reply(`✖ An error occurred with cortana server. Please try again later. ${reason}`))
    }
}
