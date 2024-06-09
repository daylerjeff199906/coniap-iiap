import { HeaderPage, TableCustom } from '@/modules/admin'
import { ICol, IRow } from '@/types'

const columns: ICol[] = [
  {
    id: 1,
    key: 'topic',
    label: 'Tema ',
    justify: 'left',
  },
  {
    id: 3,
    key: 'description',
    label: 'Descripción',
    justify: 'left',
  },
  {
    id: 4,
    key: 'status',
    label: 'Estado',
    justify: 'left',
  },
  {
    id: 3,
    key: 'actions',
    label: 'Acciones',
    justify: 'center',
  },
]

const invoices: IRow[] = [
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
        <TableCustom
          cols={columns}
          rows={invoices}
        />
      </section>
    </main>
  )
}
