import { CollectionConfig } from 'payload/types';
import { Hierarchical } from '../hierarchical';
import { CommonFields } from '../_fields/common.fields';
import { Slugs } from '../_slugs';

export const RichText: CollectionConfig = {
  slug: Slugs.RichText,
  admin: {
    useAsTitle: 'heading',
  },
  fields: [
    ...Hierarchical({
      belongsToCollection: Slugs.RichText,
      childOf: [Slugs.DatasourceFolder]
    }),
    CommonFields.Body
  ],
}
