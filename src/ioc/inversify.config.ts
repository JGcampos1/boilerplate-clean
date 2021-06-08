import 'reflect-metadata'
import { Container } from 'inversify'
import {
  InfraModule,
  ApplicationModule,
  ApiModule,
  ValidationModule
} from './modules'

const container = new Container()

container.load(
  ...ApiModule,
  ...InfraModule,
  ...ApplicationModule,
  ...ValidationModule
)

export { container }
