import { HeaderPage, ListTopics } from '@/modules/admin'
import { ISearchParams, ITopic } from '@/types'
import { createClient } from '@/utils/supabase/server'

interface IProps {
  searchParams: ISearchParams
}

export default async function Page(props: IProps) {
  const {
    searchParams: { search = '', page, limit },
  } = props
  const supabase = createClient()

  const currentPage = page ? parseInt(page as string) : 1
  const currentLimit = limit ? parseInt(limit as string) : 10

  const { data } = await supabase
    .from('topics')
    .select()
    .ilike('name', `%${search}%`)
    .range((currentPage - 1) * currentLimit, currentPage * currentLimit)

  const topics: ITopic[] = data || []

  return (
    <main>
      <HeaderPage
        title="Temáticas"
        subtitle="Listado de temáticas. Estos son los temas que se pueden asignar a los resúmenes."
        href="/admin/topics/new"
        label="Nuevo tema"
      />
      <ListTopics topicList={topics} />
    </main>
  )
}
