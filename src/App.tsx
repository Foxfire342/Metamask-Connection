// App.tsx
import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./Components/Layout";
import ConnectButton from "./Components/ConnectButton";
import AccountModal from "./Components/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    // let us use Chakra UI syntax across our app:
    <ChakraProvider theme={theme}>
       <Layout>
         <ConnectButton handleOpenModal={onOpen} />

         <AccountModal isOpen={isOpen} onClose={onClose} />

       </Layout>
    </ChakraProvider>
  );
}

export default App;
