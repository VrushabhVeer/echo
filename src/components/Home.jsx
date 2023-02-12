import {
    Box,
    Button,
    Flex,
    Image,
    Heading,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
    return (
        <>
            <Flex
                gap={{ base: "", md: "20" }}
                w="85%"
                m="auto"
                mt="10"
                flexDirection={{ base: "column", md: "row" }}
            >
                <Box
                    textAlign="left"
                    w={{ base: "100%", md: "70%" }}
                    mt={{ base: "", md: "20" }}
                >
                    <Text fontSize="13px" fontWeight="bold" color="#ff915a">
                        WELCOME TO OUR SITE
                    </Text>
                    <Heading
                        mt="2"
                        color="#2c2967"
                        fontSize={{ base: "32px", md: "42px" }}
                        fontWeight="bolder"
                        fontFamily="Montserrat, sans-serif"
                    >
                        Expert SEO, SEM Services in London
                    </Heading>
                    <Text mt="4" color="grey" fontSize="15px">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.
                    </Text>
                    <Flex gap="5" mt="8">
                        <Button
                            position="static"
                            borderRadius="30"
                            fontSize="15px"
                            colorScheme="facebook"
                        >
                            How We Work
                        </Button>
                        <Button
                            position="static"
                            borderRadius="30"
                            fontSize="15px"
                            colorScheme="facebook"
                            variant="outline"
                        >
                            Contact Us
                        </Button>
                    </Flex>
                </Box>

                <Box>
                    <Image
                        mt="10"
                        src="https://preview.colorlib.com/theme/echo/images/hero_1.png"
                        alt=""
                    />
                </Box>
            </Flex>

            <Box w="85%" m="auto" mt="20">
                <Box m="auto" w={{ base: "100%", md: "50%" }}>
                    <Text fontSize="13px" fontWeight="bold" color="#ff915a">
                        Features
                    </Text>
                    <Heading
                        color="#2c2967"
                        fontSize={{ base: "32px", md: "42px" }}
                        fontWeight="bolder"
                        fontFamily="Montserrat, sans-serif"
                        mt="2"
                    >
                        Our Features
                    </Heading>
                    <Text mt="4" color="grey" fontSize="15px">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.
                    </Text>
                </Box>
                <Flex
                    mt="20"
                    flexDirection={{ base: "column", md: "row" }}
                    gap={{ base: "10", md: "20" }}
                >
                    <Box>
                        <Image
                            w="20%"
                            m="auto"
                            src="https://cdn-icons-png.flaticon.com/512/1208/1208270.png"
                            alt=""
                        />
                        <Text fontWeight="bold" fontSize="20px" mt="5" color="#ff915a">
                            Marketing Analysis
                        </Text>
                        <Text mt="3" color="grey" fontSize="15px">
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            w="20%"
                            m="auto"
                            src="https://cdn-icons-png.flaticon.com/512/8301/8301354.png"
                            alt=""
                        />
                        <Text fontWeight="bold" fontSize="20px" mt="5" color="#ff915a">
                            Digital Marketing
                        </Text>
                        <Text mt="3" color="grey" fontSize="15px">
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </Text>
                    </Box>
                    <Box>
                        <Image
                            w="20%"
                            m="auto"
                            src="https://cdn-icons-png.flaticon.com/512/4050/4050019.png"
                            alt=""
                        />
                        <Text fontWeight="bold" fontSize="20px" mt="5" color="#ff915a">
                            SEO and Backlinks
                        </Text>
                        <Text mt="3" color="grey" fontSize="15px">
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </Text>
                    </Box>
                </Flex>
            </Box>

            <Flex
                gap={{ base: "", md: "20" }}
                w="85%"
                m="auto"
                mt={{ base: "20", md: "160" }}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Box>
                    <Image
                        mt="10"
                        src="https://preview.colorlib.com/theme/echo/images/about_1.png"
                        alt=""
                    />
                </Box>
                <Box
                    textAlign="left"
                    w={{ base: "100%", md: "70%" }}
                    mt={{ base: "10", md: "20" }}
                >
                    <Text fontSize="13px" fontWeight="bold" color="#ff915a">
                        ABOUT US
                    </Text>
                    <Heading
                        mt="2"
                        color="#2c2967"
                        fontSize={{ base: "32px", md: "42px" }}
                        fontWeight="bolder"
                        fontFamily="Montserrat, sans-serif"
                    >
                        Why our agency?
                    </Heading>
                    <Text mt="4" color="grey" fontSize="15px">
                        Separated they live in Bookmarksgrove right at the coast of the
                        Semantics, a large language ocean.
                    </Text>
                    <Text mt="3" color="grey" fontSize="15px">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.
                    </Text>
                    <Button
                        position="static"
                        mt="8"
                        borderRadius="30"
                        fontSize="15px"
                        colorScheme="facebook"
                    >
                        About Us
                    </Button>
                </Box>
            </Flex>

            <Box
                w={{ base: "85%", md: "60%" }}
                m="auto"
                mt={{ base: "20", md: "160" }}
            >
                <Text fontSize="13px" fontWeight="bold" color="#ff915a">
                    Services
                </Text>
                <Heading
                    mt="2"
                    color="#2c2967"
                    fontSize={{ base: "32px", md: "42px" }}
                    fontWeight="bolder"
                    fontFamily="Montserrat, sans-serif"
                >
                    Our Services
                </Heading>

                <SimpleGrid columns={[1, null, 2]} spacing="40px" mt="20">
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="3"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/5470/5470785.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                Design Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="5"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/4228/4228846.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                SEO Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="5"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/4545/4545606.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                Internet Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="5"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/4674/4674789.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                BackLinks Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="5"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/2065/2065064.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                Social Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        p="5"
                        alignItems="center"
                        gap="5"
                    >
                        <Box w={{ base: "90%", md: "45%" }}>
                            <Image
                                w="100%"
                                src="https://cdn-icons-png.flaticon.com/512/4185/4185383.png"
                                alt=""
                            />
                        </Box>
                        <Box textAlign="left">
                            <Text fontWeight="bold" fontSize="17px">
                                Bussiness Marketing
                            </Text>
                            <Text mt="3" fontSize="14px" color="grey">
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </Text>
                        </Box>
                    </Flex>
                </SimpleGrid>
            </Box>

            <Box m="auto" w="85%" mt={{ base: "20", md: "160" }}>
                <Box m="auto" w={{ base: "100%", md: "50%" }}>
                    <Text fontSize="13px" fontWeight="bold" color="#ff915a">
                        TESTIMONIALS
                    </Text>
                    <Heading
                        color="#2c2967"
                        fontSize={{ base: "32px", md: "42px" }}
                        fontWeight="bolder"
                        fontFamily="Montserrat, sans-serif"
                        mt="2"
                    >
                        Testimonials
                    </Heading>
                    <Text mt="4" color="grey" fontSize="15px">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </Text>
                </Box>

                <Flex
                    gap="5"
                    mt="20"
                    flexDirection={{ base: "column", md: "row" }}
                    textAlign="left"
                    color="grey"
                    fontSize="15px"
                >
                    <Box
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        borderRadius="md"
                        p="5"
                    >
                        <Text>
                            “Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.”
                        </Text>
                        <Flex mt="5" gap="8" alignItems="center">
                            <Box>
                                <Image
                                    w="60px"
                                    borderRadius="50"
                                    src="https://preview.colorlib.com/theme/echo/images/person_1.jpg"
                                    alt=""
                                />
                            </Box>
                            <Box>
                                <Text>Carl Anderson</Text>
                                <Text fontSize="12px" mt="1">
                                    Director at Google
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        borderRadius="md"
                        p="5"
                    >
                        <Text>
                            “Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.”
                        </Text>
                        <Flex mt="5" gap="8" alignItems="center">
                            <Box>
                                <Image
                                    w="60px"
                                    borderRadius="50"
                                    src="https://preview.colorlib.com/theme/echo/images/person_2.jpg"
                                    alt=""
                                />
                            </Box>
                            <Box>
                                <Text>Drew Wood</Text>
                                <Text fontSize="12px" mt="1">
                                    Director at Google
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box
                        border="1px solid #e8e8e7"
                        _hover={{ border: "1px solid" }}
                        borderRadius="md"
                        p="5"
                    >
                        <Text>
                            “Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.”
                        </Text>
                        <Flex mt="5" gap="8" alignItems="center">
                            <Box>
                                <Image
                                    w="60px"
                                    borderRadius="50"
                                    src="https://preview.colorlib.com/theme/echo/images/person_3.jpg"
                                    alt=""
                                />
                            </Box>
                            <Box>
                                <Text>Michelle Alisson</Text>
                                <Text fontSize="12px" mt="1">
                                    Director at Google
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default Home;
