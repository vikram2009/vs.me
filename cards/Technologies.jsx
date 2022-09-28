import React from "react";
import { Text, Avatar, Tooltip } from "@nextui-org/react";
import styles from "../styles/cards.module.css";

export const Technologies = () => {
  return (
    <div className={styles.skills}>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Technologies
      </Text>

      <div className={styles.tech}>
        <Tooltip content={"JavaScript"} rounded color="primary">
          <Avatar size="xl" src="/js.webp" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"Next"} rounded color="primary">
          <Avatar size="xl" src="/next.png" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"React"} rounded color="primary">
          <Avatar
            size="xl"
            src="/react.webp"
            color="success"
            bordered
            squared
          />
        </Tooltip>

        <Tooltip content={"TypeScript"} rounded color="primary">
          <Avatar size="xl" src="/ts.png" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"Rust"} rounded color="primary">
          <Avatar size="xl" src="/rust.png" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"Java"} rounded color="primary">
          <Avatar size="xl" src="/java.webp" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"C#"} rounded color="primary">
          <Avatar size="xl" src="/cs.png" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"Git"} rounded color="primary">
          <Avatar size="xl" src="/git.png" color="success" bordered squared />
        </Tooltip>

        <Tooltip content={"Radix"} rounded color="primary">
          <Avatar size="xl" src="/radix.png" color="success" bordered squared />
        </Tooltip>
      </div>
    </div>
  );
};
