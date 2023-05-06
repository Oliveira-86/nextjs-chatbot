import { chatbotPrompt } from '@/helpers/constant/chatbot-prompt'
import { ChatGPTMessage } from '@/lib/openai-stream'
import { MessageArraySchema } from '@/lib/validator/message'

export async function POST(request: Request) {
  const { message } = await request.json()

  const parsedMessages = MessageArraySchema.parse(message)

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? 'user' : 'system',
    content: message.text,
  }))

  outboundMessages.unshift({
    role: 'system',
    content: chatbotPrompt,
  })
}
