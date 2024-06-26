"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";
import Flex from "../../components/Flex";
import IconButton from "../../components/IconButton";
import { FaArrowRight } from "react-icons/fa6";
import Text from "../../components/Text";
import useIsTab from "../../hooks/useIsTab";
import useIsMobile from "../../hooks/useIsMobile";

const Container = styled.div`
  border-radius: 35px;
  padding: 2rem;
  background-color: ${({ bg }) => bg};
  min-width: ${({ width }) => width || "auto"};
  transition: all 0.4s ease-in-out;

  @media screen and (max-width: 520px) {
    padding: 1rem;
  }
`;
const Connector = styled.div`
  width: 10px;
  height: 20px;
  background-color: ${COLORS.white};
  clip-path: polygon(
    0 0,
    0% 20%,
    0 51%,
    0% 80%,
    0 100%,
    50% 70%,
    100% 100%,
    100% 80%,
    100% 51%,
    100% 20%,
    100% 0,
    50% 30%
  );
`;
const ConnectorDisable = styled.div`
  width: 10px;
  height: 20px;
  background-color: ${COLORS.transperant};
  clip-path: polygon(
    0 0,
    0% 20%,
    0 51%,
    0% 80%,
    0 100%,
    50% 70%,
    100% 100%,
    100% 80%,
    100% 51%,
    100% 20%,
    100% 0,
    50% 30%
  );
`;

function ConnectedCard({ isTail = true, title, description }) {
  const isTab = useIsTab();
  const isMobile = useIsMobile();
  const [hover, setHover] = useState(false);
  return (
    <Flex gap={"0px"}>
      <Container
        width={isTab ? "240px" : "250px"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        bg={hover ? COLORS.blue : COLORS.white}
      >
        <Flex direction={"column"} gap={'1.5rem'}>
          <Text
            size={"30px"}
            color={hover ? COLORS.white : COLORS.black}
            fontFamily={"bold"}
          >
            {title}
          </Text>
          <IconButton
            bg={hover ? COLORS.white : COLORS.blue}
            color={hover ? COLORS.blue : COLORS.white}
            isHover={false}
          >
            <FaArrowRight />
          </IconButton>
          <Text
            color={hover ? COLORS.light : COLORS.darkLight}
            align={"center"}
            maxWidth={"190px"}
            size={"15px"}
          >
            {description}
          </Text>
        </Flex>
      </Container>

      {isTail && !isMobile ? <Connector /> : <ConnectorDisable />}
    </Flex>
  );
}

export default ConnectedCard;
