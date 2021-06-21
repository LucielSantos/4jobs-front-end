import React from 'react';
import Linkify from 'react-linkify';

import { IResponse } from '../../../../types';
import { Flex } from '../../../flex';
import { Typography } from '../../../typography';

interface IProps {
  response: IResponse[];
}

const BodyComponent: React.FC<IProps> = ({ response }) => {
  return (
    <Flex flexDirection="column" padding="1rem">
      {response.map((field, index) => (
        <Flex key={`field-${index}`} flexDirection="column">
          <Typography weight="medium" marginBottom="xs" size="sm">
            {field.title}
          </Typography>

          <Linkify
            componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key}>
                {decoratedText}
              </a>
            )}
          >
            <Typography marginBottom="md">{field.value || '-'}</Typography>
          </Linkify>
        </Flex>
      ))}
    </Flex>
  );
};

export const Body = React.memo(BodyComponent);
