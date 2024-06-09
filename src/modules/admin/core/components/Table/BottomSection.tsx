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

  const handleSetPage = (page: number) => {
    setPage(page)
  }

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
              Página {page} de {Math.ceil(total / size)}
            </h1>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className="text-xs hover:cursor-pointer"
                    onClick={() => {
                      page > 1 && handleSetPage(page - 1)
                    }}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className="text-xs hover:cursor-pointer"
                    onClick={() => {
                      page < Math.ceil(total / size) && handleSetPage(page + 1)
                    }}
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
