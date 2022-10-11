import React, { useRef } from "react";
import styles from "../styles/cards.module.css";
import { Text, Card, Grid, Input, Textarea, Button } from "@nextui-org/react";
import Link from "next/link";

export const Contact = () => {
  const fnm = useRef(null);
  const msg = useRef(null);

  const onsubmit = () => {
    window.open(
      `mailto:vikramksm@hotmail.com?subject=${fnm.current.value}&body=${msg.current.value}`
    );
  };
  return (
    <div className={styles.contact}>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Contact
      </Text>
      <div className={styles.tech}>
        <Link href={"https://github.com/vikram2009"}>
          <a target={"_blank"} rel="noopener noreferrer">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{ mw: "200px" }}
            >
              <Card.Body>
                <Text
                  size={25}
                  css={{
                    textAlign: "center",
                  }}
                >
                  Github
                </Text>
              </Card.Body>
            </Card>
          </a>
        </Link>

        <Link href={"https://twitter.com/hey_vikram"}>
          <a target={"_blank"} rel="noopener noreferrer">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{ mw: "200px" }}
            >
              <Card.Body>
                <Text
                  size={25}
                  css={{
                    textAlign: "center",
                  }}
                >
                  Twitter
                </Text>
              </Card.Body>
            </Card>
          </a>
        </Link>

        <Link href={"mailto:vikramksm@hotmail.com"}>
          <a target={"_blank"} rel="noopener noreferrer">
            <Card
              isPressable
              isHoverable
              variant="bordered"
              css={{ mw: "200px" }}
            >
              <Card.Body>
                <Text
                  size={25}
                  css={{
                    textAlign: "center",
                  }}
                >
                  {" "}
                  Mail
                </Text>
              </Card.Body>
            </Card>
          </a>
        </Link>
      </div>

      <div className={styles.form}>
        <Grid.Container gap={3}>
          <Grid>
            <Input
              clearable
              bordered
              labelPlaceholder="Full Name"
              color="default"
              type={"text"}
              ref={fnm}
            />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={3}>
          <Grid>
            <Textarea labelPlaceholder="Message" status="default" ref={msg} />
          </Grid>
        </Grid.Container>
        <Grid.Container gap={1.5}>
          <Grid>
            <Button shadow color="success" auto onClick={onsubmit}>
              Submit
            </Button>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
};
