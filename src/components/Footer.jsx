import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Image,
  Flex,
  Text,
  Tag,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box bg="gray.100" fontSize="15px" mt="140">
        <Container as={Stack} maxW={"6xl"} px={{ base: "10", md: "0" }} py="10">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Box textAlign="left" fontSize="20px">
              <Image
                src="https://preview.colorlib.com/theme/echo/images/logo.png"
                alt="logo"
              />
              <Text mt="3" fontSize="14px">
                © 2023. All rights reserved
              </Text>
              <Flex gap="5" mt="5">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </Flex>
            </Box>
            <Stack align={"flex-start"}>
              <Text fontWeight="bold">Product</Text>
              <Link href={"#"}>Overview</Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"#"}>Features</Link>
                <Tag size={"sm"} bg={"#ff915a"} ml={2} color={"white"}>
                  New
                </Tag>
              </Stack>
              <Link href={"#"}>Tutorials</Link>
              <Link href={"#"}>Pricing</Link>
              <Link href={"#"}>Releases</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight="bold">Company</Text>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Press</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>Partners</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Text fontWeight="bold">Legal</Text>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
              <Link href={"#"}>Law Enforcement</Link>
              <Link href={"#"}>Status</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
      <Box bg="gray.100" py="3" borderTop="1px solid #cecece">
        <Text fontSize="14px">© 2023, Made by Vrushabh Veer</Text>
      </Box>
    </>
  );
}
