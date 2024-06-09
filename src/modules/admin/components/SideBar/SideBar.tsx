import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface ItemMenu {
  title: string
  icon: string
  path: string | null
  subItems?: ItemMenu[] | null
}

const itemsMenu: ItemMenu[] = [
  {
    title: 'Dashboard',
    icon: 'home',
    path: '/admin',
    subItems: null,
  },
  {
    title: 'Users',
    icon: 'users',
    path: '/admin/users',
  },
  {
    title: 'Settings',
    icon: 'cog',
    path: '/admin/settings',
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
            <AccordionItem
              key={index}
              value={index.toString()}
            >
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <i className={`fas fa-${item.icon}`}></i>
                  <span>{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2">
                  {item.subItems?.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <i className={`fas fa-${subItem.icon}`}></i>
                      <span>{subItem.title}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </>
  )
}
