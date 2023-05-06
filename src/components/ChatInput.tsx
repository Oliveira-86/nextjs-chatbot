'use client'

import { cn } from '@/lib/utils'
import { FC, HtmlHTMLAttributes, useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { useMutation } from '@tanstack/react-query'
import { Message } from '@/lib/validator/message'
import { nanoid } from 'nanoid'

// When extends this interface because i want to be able to pass a custom className.
//  The reason i am passing a HTMLDivElement is that the props that i am going to receive i going to pass that on to a div
// HtmlHTMLAttributes is going to give me access to the attributes passed in the props
interface ChatInputProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>('')

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: 'hello' }),
      })

      return response.body
    },
    onSuccess: () => {
      console.log('Successfully')
    },
  })

  return (
    <div {...props} className={cn('border-t border-zinc-300', className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              }

              sendMessage(message)
            }
          }}
          rows={2}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          placeholder="Write a message..."
          className="peer disabled:opacity-50 pr-14 resize-none block w-full border-0 bg-zinc-100 py-1.5 text-gray-900 focus:ring-0 text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}

export default ChatInput
