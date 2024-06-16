import { NextUIProvider } from "@nextui-org/react"
import AppRoutes from "./routes/AppRoutes"



function App() {

  return (
    <NextUIProvider>
      <AppRoutes/>
    </NextUIProvider>
  )
}

export default App
