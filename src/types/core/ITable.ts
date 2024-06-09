export interface IRow {
  id: number
  [key: string]: string | React.ReactNode
}

export interface ICol {
  id: number
  key: string
  label: string
  justify: 'left' | 'center' | 'right'
}

export interface IActions {
  id: number
  label: string
  path: string
}
