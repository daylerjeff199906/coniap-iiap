import { HeaderPage } from '@/modules/admin'

export default function Page() {
  return (
    <main>
      <HeaderPage
        title="Temáticas"
        subtitle="Listado de temáticas. Estos son los temas que se pueden asignar a los resúmenes."
        href="/admin/topics/new"
        label="Nuevo tema"
      />
    </main>
  )
}
