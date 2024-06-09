import { HeaderPage, TableCustom } from '@/modules/admin'
import { DataTable } from '@/modules/admin/core/components/Table/DataTable'
import { ICol, IRow } from '@/types'
import { ColumnDef } from '@tanstack/react-table'

// const columns: ICol[] = [
//   {
//     id: 2,
//     key: 'image',
//     label: 'Imagen',
//     justify: 'center',
//   },
//   {
//     id: 1,
//     key: 'topic',
//     label: 'Tema ',
//     justify: 'center',
//   },
//   {
//     id: 3,
//     key: 'description',
//     label: 'Descripción',
//     justify: 'center',
//   },
//   {
//     id: 4,
//     key: 'status',
//     label: 'Estado',
//     justify: 'center',
//   },
//   // {
//   //   id: 3,
//   //   key: 'actions',
//   //   label: 'Acciones',
//   //   justify: 'center',
//   // },
// ]

// const invoices: IRow[] = [
//   {
//     id: 1,
//     topic: 'Tema 1',
//     description: 'Descripción del tema 1',
//     status: 'Activo',
//   },
//   {
//     id: 2,
//     topic: 'Tema 2',
//     description: 'Descripción del tema 2',
//     status: 'Activo',
//   },
//   {
//     id: 3,
//     topic: 'Tema 3',
//     description: 'Descripción del tema 3',
//     status: 'Activo',
//   },
// ]

export interface ITopic {
  id: number
  topic: string
  description: string
  status: string
}

const columns: ColumnDef<ITopic>[] = [
  {
    id: 'topic',
    header: 'Tema',
  },
  {
    id: 'description',
    header: 'Descripción',
  },
  {
    id: 'status',
    header: 'Estado',
  },
  {
    id: 'actions',
    header: 'Acciones',
  },
]

const topics: ITopic[] = [
  {
    id: 1,
    topic: 'Tema 1',
    description: 'Descripción del tema 1',
    status: 'Activo',
  },
  {
    id: 2,
    topic: 'Tema 2',
    description: 'Descripción del tema 2',
    status: 'Activo',
  },
  {
    id: 3,
    topic: 'Tema 3',
    description: 'Descripción del tema 3',
    status: 'Activo',
  },
]

export default function Page() {
  return (
    <main>
      <HeaderPage
        title="Temáticas"
        subtitle="Listado de temáticas. Estos son los temas que se pueden asignar a los resúmenes."
        href="/admin/topics/new"
        label="Nuevo tema"
      />
      <section>
        {/* <TableCustom
          cols={columns}
          rows={invoices}
        /> */}
        <DataTable
          columns={columns}
          data={topics}
        />
      </section>
    </main>
  )
}
