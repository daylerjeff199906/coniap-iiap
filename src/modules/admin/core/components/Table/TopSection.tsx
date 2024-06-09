'use client'
import { Input } from '@/components/ui'

interface IProps {
  hiddenInput?: boolean
  placeholder?: string
  inputValue?: string
  setInputValue?: (value: string) => void
  rightSection?: React.ReactNode
}

export const TopSection = (props: IProps) => {
  const { hiddenInput, placeholder, inputValue, setInputValue, rightSection } =
    props
  return (
    <section className="flex gap-4">
      {!hiddenInput && (
        <Input
          aria-label="search"
          placeholder={placeholder || 'Escribe para buscar...'}
          value={inputValue || ''}
          onChange={(e) => setInputValue && setInputValue(e.target.value)}
          className="w-full max-w-[300px]"
        />
      )}
      {rightSection && rightSection}
    </section>
  )
}
