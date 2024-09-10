import { Typography } from "@mui/material"
import ColumnLayout from "./ColumnLayout"
import { useSelector } from "react-redux"
import { StoreState } from "../redux/store"

export function InProgressColumn() {
  const { inProgress } = useSelector((state: StoreState) => state)
  return (
    <>
      <Typography>In progress</Typography>
      <ColumnLayout selectorState={inProgress}></ColumnLayout>
    </>
  )
}
