import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState, useEffect, createRef } from "react";
import classNames from "classnames";
import "../index.css";

const NewsCard = ({
  article: {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  },
  activeArticle,
  i,
}) => {
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);
  return (
    <Box
      ref={elRefs[i]}
      maxW="sm"
      overflow="hidden"
      bgColor={activeArticle === i ? "black" : "#014667"}
      color="whitesmoke"
      boxShadow="lg"
      mx="auto"
      borderRadius={10}
    >
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          width="100%"
          height={{ base: "30vw", md: "25vw", lg: "15vw" }}
          src={
            urlToImage ||
            "https://media.istockphoto.com/photos/media-concept-with-tv-screens-picture-id1301983459?b=1&k=20&m=1301983459&s=170667a&w=0&h=rh_XkYTuyt6DCkDvmTSsAM5gdlEp74RXMdgui2GHXK4="
          }
        />
      </a>
      <Box px="6" mt={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={7}
        >
          <Text fontWeight="semibold" letterSpacing="wide" fontSize="xs">
            {new Date(publishedAt).toDateString()}
          </Text>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {source.name}
          </Box>
        </Box>

        <Box height={163}>
          <Box
            mt="2"
            mb={1}
            fontWeight="bold"
            fontSize="xl"
            className="line-clamp-title"
          >
            {title}
          </Box>
          <Box className="line-clamp-desc" mt={1}>
            <Text fontSize="md">{description}</Text>
          </Box>
        </Box>

        <Box
          display="flex"
          mt="2"
          mb="2"
          alignItems="center"
          justifyContent="space-between"
        >
          <a href={url} target="_blank" rel="noreferrer">
            <Button color="blue" bgColor="#F9E9FC">
              Learn More
            </Button>
          </a>
          <Text>{i + 1}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
