import { Container, Grid, Grid2, Typography } from "@mui/material"
import { InProgressColumn } from "./components/InProgress"

const App = () => {
  return (
    <Container>
      <Typography variant="h3" textAlign={"center"} mt={3} mb={5}>
        To Do App with Redux
      </Typography>

      <InProgressColumn />
    </Container>
  )
}

export default App
