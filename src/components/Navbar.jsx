import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Image,
  useDisclosure,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="gray.100"
        px={{ base: "5", md: "120px" }}
        py="1"
        position="sticky"
        top="0"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src="https://preview.colorlib.com/theme/echo/images/logo.png"
                alt="logo"
              />
            </Box>
          </HStack>
          <Flex alignItems={"center"} gap="5">
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
              fontSize="15px"
            >
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>FAQ</Text>
              <Text>Contact Us</Text>
            </HStack>

            <Button colorScheme="facebook" size="sm" borderRadius="30" variant="outline">
              Get Started
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={5} textAlign="left" mt="5">
              <Text>Home</Text>
              <Text>About</Text>
              <Text>Services</Text>
              <Text>FAQ</Text>
              <Text>Contact Us</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
