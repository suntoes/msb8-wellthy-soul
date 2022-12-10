import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Heading
} from '@chakra-ui/react'
import { MinusIcon, AddIcon } from '@chakra-ui/icons'

import Delayed from './delayed'

const StyledAccordion = ({ data }) => (
  <Accordion w="full" defaultIndex={[0]} allowMultiple allowToggle>
    {data.map(({ title, description }, i) => (
      <Delayed from="down">
        <AccordionItem
          bg="beige"
          color="dark-beige"
          my={[1, 2, 5]}
          borderRadius={12}
        >
          {({ isExpanded }) => (
            <>
              <AccordionButton>
                <Box flex="1" align="left">
                  <Heading
                    fontSize={[24, 28, 40]}
                    display="inline-block"
                    w={12}
                    mr={2}
                    align="center"
                  >
                    {i + 1}
                  </Heading>
                  <Heading fontSize={[18, 21, 30]} display="inline-block">
                    {title}
                  </Heading>
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize={[18, 21, 30]} fontWeight={700} />
                ) : (
                  <AddIcon fontSize={[18, 21, 30]} fontWeight={700} />
                )}
              </AccordionButton>
              <AccordionPanel
                fontSize={[16, 18, 26]}
                lineHeight={1.25}
                pl={8}
                pr={12}
                align="left"
              >
                {description}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Delayed>
    ))}
  </Accordion>
)

export default StyledAccordion
