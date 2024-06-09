import { TableCustom } from '@/modules/admin'
import { ICol, IRow, ITopic } from '@/types'

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

interface IProps {
  topicList: ITopic[]
}

export const ListTopics = (props: IProps) => {
  const { topicList } = props

  const rows = topicList?.map((topic) => {
    return {
      id: topic?.id,
      topic: topic?.name,
      description: topic?.description,
      status: topic?.isActived ? 'Activo' : 'Inactivo',
    }
  })

  return (
    <>
      <section>
        <TableCustom
          cols={columns}
          rows={rows}
        />
      </section>
    </>
  )
}
