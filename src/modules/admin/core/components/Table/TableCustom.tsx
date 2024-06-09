import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { IRow, ICol } from '@/types'
import { TopSection } from './TopSection'
import { RenderActions } from './RendeActions'
import { BottomSection } from './BottomSection'

interface IProps {
  cols: ICol[]
  rows: IRow[]
  tableCaption?: string
  //Top section
  hiddenInput?: boolean
  placeholder?: string
  inputValue?: string
  setInputValue?: (value: string) => void
  rightSection?: React.ReactNode
  //Bottom section
  page?: number
  size?: number
  setPage?: (page: number) => void
  setSize?: (size: number) => void
}

export const TableCustom = (props: IProps) => {
  const { cols, rows, tableCaption, setPage, setSize } = props

  const renderRow = (row: IRow) => {
    return (
      <TableRow
        key={row.id}
        className="py-0"
      >
        {cols.map((col) => (
          <TableCell
            key={col.id}
            className={`${
              col.key === 'actions' && 'text-center'
            } text-gray-500 font-medium py-2 min-w-24`}
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
    <main className="flex flex-col gap-4">
      <TopSection
        hiddenInput={props.hiddenInput}
        placeholder={props.placeholder}
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
        rightSection={props.rightSection}
      />
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
        </Table>
        <BottomSection
          page={props.page || 1}
          size={props.size || 10}
          rows={rows}
          setPage={setPage || (() => {})}
          setSize={setSize || (() => {})}
          total={rows.length}
        />
      </main>
    </main>
  )
}
