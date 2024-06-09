'use client'
import { Input } from '@/components/ui'
import { Search } from 'lucide-react'

interface IProps {
  placeholder?: string
  inputValue?: string
  setInputValue?: (value: string) => void
}

export const TopSection = (props: IProps) => {
  const { placeholder, inputValue, setInputValue } = props
  return (
    <section>
      {/* <Search className="w-6 h-6 text-gray-500" /> */}
      <Input
        aria-label="search"
        placeholder={placeholder || 'Escribe para buscar...'}
        value={inputValue || ''}
        onChange={(e) => setInputValue && setInputValue(e.target.value)}
      />
    </section>
  )
}
