import { Container, Box, Heading, Link, Text } from "@chakra-ui/react";

const GoogleScholarIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={size}
    height={size}
    style={{ display: "inline-block" }}
  >
    <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 21 11 L 11 20 L 17.78125 20 C 17.80125 22.847 19.967531 25.730469 23.769531 25.730469 C 24.129531 25.730469 24.529688 25.690391 24.929688 25.650391 C 24.749688 26.100391 24.560547 26.470078 24.560547 27.080078 C 24.560547 28.230078 25.140391 28.920078 25.650391 29.580078 C 24.020391 29.690078 20.989766 29.879531 18.759766 31.269531 C 16.629766 32.559531 15.980469 34.43 15.980469 35.75 C 15.980469 38.47 18.500469 41 23.730469 41 C 29.930469 41 33.220703 37.510547 33.220703 34.060547 C 33.220703 31.530547 31.779453 30.279922 30.189453 28.919922 L 28.900391 27.890625 C 28.500391 27.570625 27.949219 27.120312 27.949219 26.320312 C 27.949219 25.510313 28.500703 24.989766 28.970703 24.509766 C 30.480703 23.309766 32 21.960234 32 19.240234 C 32 18.197234 31.756203 17.348391 31.408203 16.650391 L 35 13.570312 L 35 17.277344 C 34.405 17.623344 34 18.261 34 19 L 34 25 C 34 26.104 34.896 27 36 27 C 37.104 27 38 26.104 38 25 L 38 19 C 38 18.262 37.595 17.624344 37 17.277344 L 37 12 C 37 11.957 36.980609 11.920906 36.974609 11.878906 L 38 11 L 21 11 z M 24.269531 14.240234 C 27.269531 14.240234 28.820312 18.35 28.820312 21 C 28.820312 21.65 28.739922 22.819922 27.919922 23.669922 C 27.339922 24.259922 26.370938 24.699219 25.460938 24.699219 C 22.370938 24.699219 20.949219 20.620156 20.949219 18.160156 C 20.949219 17.210156 21.14 16.220938 21.75 15.460938 C 22.33 14.710938 23.339531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 26.409063 30.609375 26.590859 30.610391 26.880859 30.650391 C 29.620859 32.630391 30.800781 33.620234 30.800781 35.490234 C 30.800781 37.760234 28.97 39.460938 25.5 39.460938 C 21.64 39.460938 19.160156 37.590469 19.160156 34.980469 C 19.160156 32.370469 21.459766 31.499219 22.259766 31.199219 C 23.769766 30.679219 25.719062 30.609375 26.039062 30.609375 z" />
  </svg>
);

const WebsiteIcon = ({ size }: { size: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={size}
    height={size}
    style={{ display: "inline-block" }}
  >
    <path d="M 25 2 C 14.394531 2 5.445313 9.21875 2.796875 19 L 4.882813 19 C 5.632813 16.496094 6.847656 14.199219 8.40625 12.183594 C 10.113281 13.144531 12.089844 13.949219 14.277344 14.566406 C 13.910156 15.96875 13.609375 17.445313 13.398438 19 L 15.4375 19 C 15.640625 17.625 15.917969 16.3125 16.246094 15.0625 C 18.65625 15.59375 21.261719 15.910156 24 15.96875 L 24 19 L 26 19 L 26 15.96875 C 28.738281 15.910156 31.34375 15.597656 33.753906 15.0625 C 34.082031 16.3125 34.359375 17.625 34.5625 19 L 36.601563 19 C 36.390625 17.445313 36.089844 15.96875 35.722656 14.566406 C 37.910156 13.949219 39.886719 13.144531 41.59375 12.183594 C 43.152344 14.199219 44.367188 16.496094 45.113281 19 L 47.203125 19 C 44.554688 9.21875 35.605469 2 25 2 Z M 24 4.121094 L 24 13.96875 C 21.457031 13.910156 19.039063 13.617188 16.8125 13.132813 C 18.457031 8.214844 21.0625 4.769531 24 4.121094 Z M 26 4.121094 C 28.9375 4.769531 31.542969 8.214844 33.1875 13.132813 C 30.960938 13.617188 28.542969 13.910156 26 13.96875 Z M 19.132813 4.851563 C 17.371094 6.710938 15.898438 9.390625 14.835938 12.640625 C 12.925781 12.101563 11.199219 11.417969 9.722656 10.625 C 12.253906 7.933594 15.492188 5.917969 19.132813 4.851563 Z M 30.867188 4.851563 C 34.507813 5.917969 37.746094 7.933594 40.277344 10.625 C 38.800781 11.417969 37.074219 12.101563 35.164063 12.640625 C 34.101563 9.390625 32.628906 6.710938 30.867188 4.851563 Z M 3 21 L 5.539063 29 L 7.867188 29 L 9.984375 23.019531 L 12.101563 29 L 14.378906 29 L 16.964844 21 L 14.800781 21 L 13.167969 26.589844 L 11.300781 21 L 8.75 21 L 6.804688 26.496094 L 5.199219 21 Z M 18.015625 21 L 20.558594 29 L 22.890625 29 L 25 23.019531 L 27.121094 29 L 29.398438 29 L 31.984375 21 L 29.816406 21 L 28.1875 26.589844 L 26.320313 21 L 23.765625 21 L 21.820313 26.496094 L 20.21875 21 Z M 32.984375 21 L 35.53125 29 L 37.871094 29 L 39.992188 23.019531 L 42.121094 29 L 44.40625 29 L 47 21 L 44.828125 21 L 43.1875 26.589844 L 41.316406 21 L 38.753906 21 L 36.800781 26.496094 L 35.1875 21 Z M 2.796875 31 C 5.445313 40.78125 14.394531 48 25 48 C 35.605469 48 44.554688 40.78125 47.203125 31 L 45.113281 31 C 44.367188 33.503906 43.152344 35.800781 41.59375 37.816406 C 39.886719 36.855469 37.910156 36.050781 35.722656 35.433594 C 36.089844 34.03125 36.390625 32.554688 36.601563 31 L 34.5625 31 C 34.359375 32.375 34.082031 33.6875 33.753906 34.9375 C 31.34375 34.40625 28.738281 34.089844 26 34.03125 L 26 31 L 24 31 L 24 34.03125 C 21.261719 34.089844 18.65625 34.402344 16.246094 34.9375 C 15.917969 33.6875 15.640625 32.375 15.4375 31 L 13.398438 31 C 13.609375 32.554688 13.910156 34.03125 14.277344 35.433594 C 12.089844 36.050781 10.113281 36.855469 8.40625 37.816406 C 6.847656 35.800781 5.632813 33.503906 4.882813 31 Z M 24 36.03125 L 24 45.878906 C 21.0625 45.230469 18.457031 41.785156 16.8125 36.867188 C 19.039063 36.382813 21.457031 36.089844 24 36.03125 Z M 26 36.03125 C 28.542969 36.089844 30.960938 36.382813 33.1875 36.867188 C 31.542969 41.785156 28.9375 45.230469 26 45.878906 Z M 14.839844 37.359375 C 15.902344 40.609375 17.371094 43.289063 19.132813 45.144531 C 15.492188 44.082031 12.253906 42.066406 9.722656 39.375 C 11.199219 38.578125 12.925781 37.898438 14.839844 37.359375 Z M 35.164063 37.359375 C 37.074219 37.898438 38.800781 38.582031 40.277344 39.375 C 37.746094 42.066406 34.507813 44.082031 30.867188 45.144531 C 32.628906 43.289063 34.101563 40.609375 35.164063 37.359375 Z" />
  </svg>
);

export default function Team() {
  return (
    <Box as="main" pt="150">
      <Container as="article" mb={20}>
        <Heading as="h2" size="xl">
          Our team
        </Heading>

        <Heading as="h3" size="md" mt={12}>
          Daniele Silvestro
        </Heading>
        <Text mt={2}>
          <Link
            href="https://www.unifr.ch/bio/en/groups/silvestro"
            isExternal
            title="Silvestro Group"
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <WebsiteIcon size={20} />
          </Link>
          <Link
            href="https://scholar.google.com/citations?hl=en&user=X1jlzMoAAAAJ&view_op=list_works&sortby=pubdate"
            isExternal
            ml={2}
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <GoogleScholarIcon size={20} />
          </Link>
        </Text>
        <Text mt={2}>
          Daniele Silvestro is a computational biologist and group leader at the
          Department of Biology at the University of Fribourg, Switzerland and a
          research associate at the Department of Biological and Environmental
          Sciences and Gothenburg Global Biodiversity Centre at Gothenburg
          University.
        </Text>

        <Heading as="h3" size="md" mt={12}>
          Stefano Gloria
        </Heading>
        <Text mt={2}>
          <Link
            href="https://thymia.ai/"
            isExternal
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <WebsiteIcon size={20} />
          </Link>
        </Text>
        <Text mt={2}>
          Stefano Goria has a PhD in theoretical physics and is the CTO and
          co-founder of Thymia Limited, a London-based mental health tech
          start-up.
        </Text>

        <Heading as="h3" size="md" mt={12}>
          Thomas Sterner
        </Heading>
        <Text mt={2}>
          <Link
            href="https://sternerthomas.com/thomas-sterner/"
            isExternal
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <WebsiteIcon size={20} />
          </Link>
          <Link
            href="https://scholar.google.com/citations?hl=en&user=QPcgMqwAAAAJ"
            isExternal
            ml={2}
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <GoogleScholarIcon size={20} />
          </Link>
        </Text>
        <Text mt={2}>
          Thomas Sterner is a Professor of Environmental Economics at the
          University of Gothenburg, His research and publications are mostly
          focused on the design of policy instruments which address
          environmental problems.
        </Text>

        <Heading as="h3" size="md" mt={12}>
          Alexandre Antonelli
        </Heading>
        <Text mt={2}>
          <Link
            href="https://antonelli-lab.net"
            isExternal
            title="Antonelli Lab"
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <WebsiteIcon size={20} />
          </Link>
          <Link
            href="https://scholar.google.se/citations?user=KYbhJxMAAAAJ"
            isExternal
            ml={2}
            opacity={0.5}
            _hover={{ opacity: 1 }}
          >
            <GoogleScholarIcon size={20} />
          </Link>
        </Text>
        <Text mt={2}>
          Alexandre Antonelli is the Director of Science at the Royal Botanic
          Gardens - Kew and Professor at the Department of Biological and
          Environmental Sciences and Gothenburg Global Biodiversity Centre at
          Gothenburg University.
        </Text>
      </Container>
    </Box>
  );
}
