import { RecoverPassword } from "./pages/RecoverPassword";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ChakraProvider } from '@chakra-ui/react'
import { AboutYou } from "./pages/AboutYou";

function App() {
  return (
    <ChakraProvider>
      <AboutYou />
    </ChakraProvider>
)
}

export default App;
