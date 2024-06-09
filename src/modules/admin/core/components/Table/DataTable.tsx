'use client'
// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   })

//   //   const renderCell = (cell: any) => {
//   //     console.log(cell)
//   //     if (cell.column.columnDef.id === 'actions') {
//   //       return (
//   //         <DropdownMenu>
//   //           <DropdownMenuTrigger
//   //             className="p-0"
//   //             asChild
//   //           >
//   //             <Button
//   //               variant="ghost"
//   //               className="h-8 w-8 p-0"
//   //             >
//   //               <MoreHorizontal className="h-4 w-4" />
//   //             </Button>
//   //           </DropdownMenuTrigger>
//   //           <DropdownMenuContent align="end">
//   //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//   //             <DropdownMenuItem
//   //               onClick={() => navigator.clipboard.writeText(cell.row.id)}
//   //             >
//   //               Copy payment ID
//   //             </DropdownMenuItem>
//   //             <DropdownMenuSeparator />
//   //             <DropdownMenuItem>View customer</DropdownMenuItem>
//   //             <DropdownMenuItem>View payment details</DropdownMenuItem>
//   //           </DropdownMenuContent>
//   //         </DropdownMenu>
//   //       )
//   //     } else {
//   //       return flexRender(cell.value, cell.getContext())
//   //     }
//   //   }

//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <TableHead
//                     key={header.id}
//                     className="text-xs text-center font-bold text-gray-900 bg-gray-100 h-10"
//                   >
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 )
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 data-state={row.getIsSelected() && 'selected'}
//                 className="text-sm text-gray-700"
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell
//                     key={cell.id}
//                     className={`${
//                       cell.column.columnDef.id === 'actions' && 'text-center '
//                     } text-gray-500 `}
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell
//                 colSpan={columns.length}
//                 className="h-24 text-center"
//               >
//                 No results.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   )
// }
