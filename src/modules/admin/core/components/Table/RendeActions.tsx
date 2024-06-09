'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { IActions, IRow } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'

interface IProps {
  actions: IActions[]
  row: IRow
}

export const RenderActions = (props: IProps) => {
  const { actions, row } = props
  const pathname = usePathname()

  const urlBase = pathname

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="p-0"
        asChild
      >
        <Button
          variant="ghost"
          className="h-8 w-8 p-0"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        {actions.length > 0 ? (
          <>
            <DropdownMenuSeparator />
            {actions.map((action, index) => (
              <DropdownMenuItem
                key={index}
                asChild
              >
                <Link
                  href={`${urlBase}/${row.id}/${action.path}`}
                  className="text-xs font-medium"
                >
                  {action.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link
                href={`${pathname}/${row.id}/edit`}
                className="text-xs font-medium"
              >
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href={`${pathname}/${row.id}`}
                className="text-xs font-medium"
              >
                Detalles
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
