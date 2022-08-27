import { RecoverPassword } from "./pages/RecoverPassword";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <SignUp />
    </ChakraProvider>
)
}

export default App;
