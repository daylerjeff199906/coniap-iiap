'use client'
import { TableCustom } from '@/modules/admin'
import { ICol, ITopic } from '@/types'
import { useFilterFromUrl } from '@/modules/core'

const columns: ICol[] = [
  {
    id: 1,
    key: 'id',
    label: 'ID',
    justify: 'left',
  },
  {
    id: 2,
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
    id: 5,
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
  const { getParams, updateFilter } = useFilterFromUrl()

  const rows = topicList?.map((topic) => {
    return {
      id: topic?.id,
      topic: topic?.name,
      description: topic?.description,
      status: topic?.isActived ? 'Activo' : 'Inactivo',
    }
  })

  const search = getParams('search', '')

  const handleSearch = (value: string) => {
    updateFilter('search', value)
  }

  return (
    <>
      <section>
        <TableCustom
          cols={columns}
          rows={rows}
          inputValue={search}
          setInputValue={handleSearch}
        />
      </section>
    </>
  )
}
