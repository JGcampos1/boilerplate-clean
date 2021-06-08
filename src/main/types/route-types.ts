export type IRoute = {
  name: string
  path: string
  exact: boolean
  fallback?: React.ReactNode
  component?: React.LazyExoticComponent<React.ComponentType<any>>
  routes?: IRoute[]
  redirect?: string
  private?: boolean
}
