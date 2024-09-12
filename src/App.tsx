import { Container, Typography } from "@mui/material"
import { useAppSelector } from "./redux/hooks"

const App = () => {
  const count = useAppSelector(state => state.todo.tasks)
  return (
    <Container>
      <Typography variant="h3" textAlign={"center"} mt={3} mb={5}>
        To Do App with Redux
      </Typography>
    </Container>
  )
}

export default App
