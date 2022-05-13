export interface CreateCar {
  create: (params: CreateCar.Params) => Promise<void>
}

export namespace CreateCar {
  export type Params = {
    name: string
    placa: string
    photo: {
      link: string
    }
  }
}
