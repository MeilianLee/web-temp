import {
  Button,
  Heading,
  Text,
  Box,
  Flex,
  SimpleGrid,
  Image,
  HStack,
  VStack,
  Link,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Box
        as="section"
        bgImage="/images/pexels-photo-2606532.jpeg"
        bgSize="cover"
        h="100vh"
        w="100%"
        p={2}
      >
        <Flex
          h="100%"
          justify="center"
          align="center"
          flexDir="column"
          mt={20}
          gap={10}
        >
          <Heading
            as="h2"
            size="3xl"
            letterSpacing="tight"
            color="#F6F8EA"
            textShadow="1px 1px 3px #0F2935"
          >
            The Captain Project
          </Heading>

          <Link href="https://github.com/MeilianLee/web-temp">
            <Button bg="white" variant="solid" leftIcon={<DownloadIcon />}>
              Download
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box as="main" py={20}>
        <SimpleGrid
          as="article"
          columns={{ base: 1, lg: 2 }}
          spacing={"8rem"}
          mx="auto"
          px="1rem"
          maxWidth={{ base: "60ch", lg: "120ch" }}
        >
          <Box>
            <Heading as="h2" size="xl" id="download">
              How do we best protect biodiversity in a rapidly changing world
              and with limited resources?
            </Heading>

            <Text mt={8}>
              Over a million species face extinction, carrying with them untold
              options for food medicine, fibre, shelter, ecological resilience,
              aesthetic and cultural values. We urgently need to design
              conservation policies that maximize the protection of biodiversity
              and its contributions to people, within the constraints of limited
              budgets.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/figure-1.jpg"
              alt="Forestry"
              borderRadius="xl"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Harnessing the power of AI to optimize conservation efforts
            </Heading>

            <Text mt={8}>
              We use reinforcement learning to train models for conservation
              prioritization that best use the available data and resources.
              CAPTAIN models can work with basic species distribution data but
              can handle complex multidimensional data and their temporal
              trends, including land use and climate change.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/RL_framework_researchstat_thumb.png"
              alt="Captain flow"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Conservation policies outperforming the state-of-the-art
            </Heading>

            <Text mt={8}>
              Our experiments using simulated and empirical data indicate that
              CAPTAIN yields more reliable conservation solutions than
              alternative state-of-the-art software for systematic conservation
              planning.
            </Text>
          </Box>
          <Box>
            <Image
              src="/images/performance.png"
              alt="Captain vs Marxan performance"
            />
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Customized prioritization targets
            </Heading>

            <Text mt={8}>
              Optimize policies toward different conservation targets, e.g.
              aiming to minimize species loss or to maximize the amount of
              protected area, and compare their outcomes and tradeoffs.
            </Text>
          </Box>
          <Box textAlign="center" fontSize="sm">
            <HStack spacing={4} align="start">
              <VStack w="30%">
                <Image
                  src="/images/min-species-loss.png"
                  alt="Minimize species loss"
                />
                <Text as="figcaption">Minimize species loss</Text>
              </VStack>
              <VStack w="30%">
                <Image
                  src="/images/max-carbon-storage.png"
                  alt="Maximize carbon storage"
                />
                <Text as="figcaption">Minimize economic value loss</Text>
              </VStack>
              <VStack w="30%">
                <Image
                  src="/images/max-protected-area.png"
                  alt="Maximize protected area"
                />
                <Text as="figcaption">Maximize protected area</Text>
              </VStack>
            </HStack>
          </Box>

          <Box>
            <Heading as="h2" size="xl" id="download">
              Download
            </Heading>
            <Text mt={5}>
              A desktop app is coming soon. The Python source code is available
              on <a href="//github.com/MeilianLee/web-temp">GitHub</a>.
            </Text>
            <Text mt={5}>
              We provide{" "}
              <a href="//github.com/captain-project/notebooks">
                Jupyter Notebooks
              </a>{" "}
              that showcase the capabilities of Captain.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" size="xl" id="download">
              Join the community
            </Heading>
            <Text mt={5}>
              Ask questions and get help on{" "}
              <a href="//github.com/captain-project/captain/discussions">
                GitHub Discussions
              </a>
              .
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
}
