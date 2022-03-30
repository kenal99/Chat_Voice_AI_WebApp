import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./Components/NewsCards";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import "./index.css";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "78c14ff484e5656700a9f398d20c01942e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    console.log("cnn".split(" ").join("-"));
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          console.log(articles);
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prev) => prev + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else if (parsedNumber > articles.length) {
            alanBtn().playText(`Article number ${number} not available`);
          }
        }
      },
    });
  }, []);
  return (
    <Box>
      <Box d="flex" justifyContent="center" alignItems="center">
        <Image
          height="xs"
          src="https://thumbs.dreamstime.com/b/online-news-update-breaking-news-banner-tiny-people-laptop-flat-cartoon-vector-illustration-announcements-189844354.jpg"
        />
      </Box>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </Box>
  );
};

export default App;
