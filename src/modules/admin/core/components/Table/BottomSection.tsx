import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { IRow } from '@/types'

interface IProps {
  rows: IRow[]
  page: number
  size: number
  total: number
  setPage: (page: number) => void
  setSize: (size: number) => void
}

export const BottomSection = (props: IProps) => {
  const { page, rows, setPage, setSize, size, total } = props
  return (
    <>
      <main className="flex justify-between items-center w-full px-4 pb-2">
        <section className="w-full">
          <p className="text-xs font-medium">
            {`Showing ${page * size + 1} to ${
              page * size + rows.length
            } of ${total} entries`}
          </p>
        </section>
        <section className="w-full flex justify-end">
          <div className="flex items-center gap-3">
            <h1 className="text-xs w-full">
              Página {page + 1} de {Math.ceil(total / size)}
            </h1>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="text-xs"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="text-xs"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
    </>
  )
}
