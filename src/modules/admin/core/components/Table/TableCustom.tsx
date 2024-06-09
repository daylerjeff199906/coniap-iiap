import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IRow, ICol } from '@/types'
import { TopSection } from './TopSection'
import { RenderActions } from './RendeActions'

interface IProps {
  cols: ICol[]
  rows: IRow[]
  tableCaption?: string
}

export const TableCustom = (props: IProps) => {
  const { cols, rows, tableCaption } = props

  const renderRow = (row: IRow) => {
    return (
      <TableRow key={row.id}>
        {cols.map((col) => (
          <TableCell
            key={col.id}
            className={`${
              col.key === 'actions' && 'text-center'
            } text-gray-500 font-medium`}
          >
            {col.key === 'actions' ? (
              <RenderActions
                actions={[]}
                row={row}
              />
            ) : (
              row[col.key]
            )}
          </TableCell>
        ))}
      </TableRow>
    )
  }

  return (
    <main className="flex flex-col gap-2">
      <TopSection />
      <main className="border rounded-lg">
        <Table>
          <TableCaption>{tableCaption}</TableCaption>
          <TableHeader>
            <TableRow>
              {cols.map((col, index) => (
                <TableHead
                  key={index}
                  className={`text-${col.justify} w-[${
                    100 / cols.length
                  }%] font-bold text-xs text-gray-900 h-9`}
                >
                  {col.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {rows.map((row) => renderRow(row))}
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </main>
    </main>
  )
}
