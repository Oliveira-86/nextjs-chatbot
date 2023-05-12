import { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { MessagesProvider } from '@/context/messages'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  )
}

export default Providers
