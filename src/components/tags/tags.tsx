import React from 'react';

import { TagsContainer, Tag } from './styles';

interface IProps {
  items: string[];
}

const TagsComponent: React.FC<IProps> = ({ items }) => {
  return (
    <TagsContainer>
      {items.map((name, index) => (
        <Tag key={`${name}-${index}`}>{name}</Tag>
      ))}
    </TagsContainer>
  );
};

export const Tags = React.memo(TagsComponent);
