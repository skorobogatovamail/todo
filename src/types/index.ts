export interface IModel {
  id: number
  text: string
  isFinished: boolean
}

export interface ISliceState {
  tasks: IModel[]
}
