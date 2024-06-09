import { HeaderPage, ListTopics } from '@/modules/admin'
import { ITopic } from '@/types'
import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = createClient()

  const { data } = await supabase.from('topics').select().eq('isActived', true)

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
