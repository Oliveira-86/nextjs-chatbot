import { FC, HtmlHTMLAttributes } from 'react'

// When extends this interface because i want to be able to pass a custom className.
//  The reason i am passing a HTMLDivElement is that the props that i am going to receive i going to pass that on to a div
// HtmlHTMLAttributes is going to give me access to the attributes passed in the props
interface ChatInputProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({}) => {
  return <div>ChatInput</div>
}

export default ChatInput
