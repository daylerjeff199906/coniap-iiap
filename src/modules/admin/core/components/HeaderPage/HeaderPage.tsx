import { Button } from '@/components/ui'
import Link from 'next/link'
import { Plus } from 'lucide-react'

interface IProps {
  title: string
  subtitle: string
  href?: string
  label?: string
  hiddenButton?: boolean
  children?: React.ReactNode
}

export const HeaderPage = (props: IProps) => {
  const { title, subtitle, href, label, children, hiddenButton } = props
  return (
    <>
      <main className="py-4 flex justify-between gap-3 items-start">
        <section>
          <h1 className="font-bold">{title}</h1>
          <p className="text-gray-500 text-xs">{subtitle} </p>
        </section>
        <section className="flex items-center gap-3">
          {children}
          {!hiddenButton && (
            <Button
              asChild
              size="sm"
              className='text-xs'
            >
              <Link
                href={href || '#'}
                className="flex items-center gap-1"
              >
                <Plus size={16} />
                {label}
              </Link>
            </Button>
          )}
        </section>
      </main>
    </>
  )
}
