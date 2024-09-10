import {
  Alert,
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material"
import { useState } from "react"
import { ISliceState } from "../types"

interface IColumnLayoutProps {
  selectorState: ISliceState
}

const ColumnLayout: React.FC<IColumnLayoutProps> = ({ selectorState }) => {
  const [isError, setIsError] = useState({
    isShow: false,
    message: "Too long item text",
  })
  return (
    <Box>
      <TextField value={"example"} fullWidth></TextField>

      <Collapse in={isError.isShow}>
        <Alert severity="error">{isError.message}</Alert>
      </Collapse>

      <Box>
        <Button>Add Item</Button>
        <List>
          {selectorState.tasks.map(({ text }) => {
            return (
              <ListItem>
                <ListItemText>
                  <Box>{text}</Box>
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </Box>
  )
}

export default ColumnLayout
