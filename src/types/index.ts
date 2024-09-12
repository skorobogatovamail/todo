export interface IModel {
  id: number
  text: string
}

export interface ISliceState {
  tasks: IModel[]
  count: number
}
