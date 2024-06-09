import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@/components/ui'

import {
  LayoutDashboard,
  CalendarCheck,
  CalendarDays,
  Users,
  Contact,
} from 'lucide-react'
import Link from 'next/link'

interface ItemMenu {
  title: string
  icon?: JSX.Element
  path: string | null
  subItems?: ItemMenu[] | null
}

const itemsMenu: ItemMenu[] = [
  {
    title: 'Dashboard',
    icon: <LayoutDashboard />,
    path: '/admin',
    subItems: null,
  },
  {
    title: 'Programas',
    icon: <CalendarCheck />,
    path: '/admin/programs',
    subItems: null,
  },
  {
    title: 'Eventos',
    icon: <CalendarDays />,
    path: '/admin/events',
    subItems: [
      {
        title: 'Crear',
        path: '/admin/events/create',
      },
      {
        title: 'Listar',
        path: '/admin/events',
      },
      {
        title: 'Calendario',
        path: '/admin/events/calendar',
      },
    ],
  },
  {
    title: 'Participantes',
    icon: <Contact />,
    path: '/admin/events',
    subItems: [
      {
        title: 'Todos',
        path: '/admin/participants',
      },
      {
        title: 'Asistentes',
        path: '/admin/participants/attendees',
      },
      {
        title: 'Ponentes',
        path: '/admin/participants/speakers',
      },
    ],
  },
  {
    title: 'Usuarios',
    icon: <Users />,
    path: '/admin/users',
    subItems: null,
  },
]

export const SideBar = () => {
  return (
    <>
      <header className="border p-2 rounded-lg">
        <h1 className="font-bold">Admin</h1>
        <p className="text-xs text-gray-500">IIAP-CONIAP</p>
      </header>
      <main>
        <Accordion
          type="single"
          collapsible
        >
          {itemsMenu.map((item, index) => (
            <div
              key={index}
              className="w-full"
            >
              {item.subItems ? (
                <AccordionItem
                  value={index.toString()}
                  className="border-b-0 "
                >
                  <AccordionTrigger className="py-2">
                    <div className="flex items-center gap-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-0">
                      {item.subItems.map((subItem, subIndex) => (
                        <Button
                          key={subIndex}
                          className="flex justify-start items-center text-sm"
                          asChild
                          variant="ghost"
                        >
                          <Link href={item.path || '#'}>{subItem.title}</Link>
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Button
                  className="flex items-center gap-2 w-full justify-start px-0"
                  variant="ghost"
                  asChild
                >
                  <Link href={item.path || '#'}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </Accordion>
      </main>
    </>
  )
}
