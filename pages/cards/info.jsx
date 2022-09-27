import { Card, Text  , Avatar , Grid , User} from "@nextui-org/react";
import styles from '../../styles/info.module.css'
import React from 'react'



export const Info = () => {
  return (
    <div className={styles.info}>

    <Card isHoverable  isPressable variant="bordered" css={{ mw: "1009px" }}>
    <Card.Body>
    <Grid.Container gap={2}>
    <Grid>
        <Avatar
                size="xl"
          src="/icon.jpg"
          color="gradient"
                bordered
                squared
                css={{ size: "$32" }}
              
              />
      </Grid>
    </Grid.Container>
          <Text>
            13 year old full stack developer
      </Text>
    </Card.Body>
  </Card>
    </div>
  )
}

