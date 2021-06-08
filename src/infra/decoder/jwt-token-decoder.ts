import { injectable } from 'inversify'
import jwtDecode from 'jwt-decode'
import { TokenDecoder } from '~/application/protocols/decoder'

@injectable()
export class JWTTokenDecoder implements TokenDecoder {
  decode<T>(token: string): T {
    const decodedToken = jwtDecode<T>(token)
    return decodedToken
  }
}
