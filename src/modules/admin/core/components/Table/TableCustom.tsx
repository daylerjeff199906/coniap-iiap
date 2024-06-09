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

interface IProps {
  cols: ICol[]
  rows: IRow[]
  tableCaption?: string
}

export const TableCustom = (props: IProps) => {
  const { cols, rows, tableCaption } = props

  return (
    <main className="flex flex-col gap-2">
      <TopSection />
      <Table>
        <TableCaption>{tableCaption}</TableCaption>
        <TableHeader className="bg-gray-100">
          <TableRow>
            {cols.map((col, index) => (
              <TableHead
                key={index}
                className={`text-${col.justify} w-[${
                  100 / cols.length
                }%] font-bold text-xs text-gray-900`}
              >
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs">
          {rows.map((row) => (
            <TableRow key={row.id}>
              {cols.map((col) => (
                <TableCell key={col.id}>{row[col.key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </main>
  )
}
