import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const Cards: CollectionConfig = {
  slug: Slugs.Cards,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Cards,
      childOf: [Slugs.DatasourceFolder],
      children: [Slugs.Card]
    }),
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'richText',
    }
  ],
}


export const Card: CollectionConfig = {
  slug: Slugs.Card,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.Card,
      childOf: [Slugs.Cards]
    }),
    CommonFields.Heading,
    CommonFields.Subheading,
    CommonFields.Body,
    CommonFields.Image,
    CommonFields.Link
  ],
}

