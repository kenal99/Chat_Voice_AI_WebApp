import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import NewsCard from "./NewsCard";
import "../index.css";

const NewsCards = ({ articles, activeArticle }) => {
  const infoCards = [
    { color: "#0295B1", title: "Latest News", text: "Give the latest news" },
    {
      color: "#1565c0",
      title: "News by Categories",
      info: "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Show the latest Technology news",
    },
    {
      color: "#4527a0",
      title: "News by Terms",
      info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump, Laptops",
      text: "News on Bitcoin",
    },
    {
      color: "#283593",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Time, IGN, ABC News, Buzzfeed",
      text: "Show the news from CNN",
    },
  ];

  if (!articles.length) {
    return (
      <SimpleGrid
        columns={{ base: "1", md: "3", lg: "4" }}
        spacing={3}
        alignItems="stretch"
        padding="0 5%"
        width="100%"
        mx="auto"
      >
        {infoCards.map((infocard) => (
          <Box
            h={330}
            overflow="hidden"
            boxShadow="md"
            color="white"
            backgroundColor={infocard.color}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
            borderRadius={10}
          >
            <Box
              mt="2"
              fontWeight="bold"
              fontSize="2xl"
              className="line-clamp-title"
            >
              {infocard.title}
            </Box>
            <Box className="line-clamp-info">
              {infocard.info ? (
                <Text
                  fontSize="lg"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  px={5}
                >
                  <strong>{infocard.title.split(" ")[2]}:</strong>
                  {infocard.info}
                </Text>
              ) : (
                <></>
              )}
            </Box>
            <Text
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              px={5}
              mb={2}
            >
              <strong>Try saying: </strong>
              <i>{infocard.text}</i>
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    );
  }

  return (
    <div>
      <Center>
        <SimpleGrid
          columns={{ base: "1", md: "3", lg: "4" }}
          spacing={3}
          alignItems="stretch"
          padding="0 5%"
          width="100%"
          mx="auto"
        >
          {articles.map((article, i) => (
            <Box display="flex">
              <NewsCard article={article} activeArticle={activeArticle} i={i} />
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </div>
  );
};

export default NewsCards;
