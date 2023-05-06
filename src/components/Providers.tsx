import { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  const client = new QueryClient()

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default Providers
