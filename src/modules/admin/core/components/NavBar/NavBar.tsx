'use client'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui'
import Link from 'next/link'

const getBreadcrumb = (pathname: string) => {
  const path = pathname.split('/').filter((item) => item)
  return path?.map((item, index) => {
    if (item === 'admin') {
      return null
    }
    return (
      <div
        className="flex items-center gap-1"
        key={item}
      >
        <BreadcrumbSeparator />
        <BreadcrumbItem key={index}>
          <BreadcrumbLink asChild>
            <Link
              href={`/${path.slice(0, index + 1).join('/')}` || '#'}
              className="capitalize text-xs"
            >
              {item}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </div>
    )
  })
}

export const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="w-full flex justify-between px-4 py-2 sticky top-0 z-10 border-b items-center">
      <section>
        <Breadcrumb>
          <BreadcrumbList>
            {pathname !== '/admin' && (
              <BreadcrumbPage>
                <BreadcrumbLink asChild>
                  <Link href="/admin" className='text-xs'>Inicio</Link>
                </BreadcrumbLink>
              </BreadcrumbPage>
            )}
            {getBreadcrumb(pathname)}
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </nav>
  )
}
