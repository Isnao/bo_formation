import type { Schema, Struct } from '@strapi/strapi';

export interface DefaultBilanComportement extends Struct.ComponentSchema {
  collectionName: 'components_default_bilan_comportements';
  info: {
    displayName: 'bilan_comportement';
  };
  attributes: {
    capture: Schema.Attribute.Date;
    comportement: Schema.Attribute.String;
    distance: Schema.Attribute.Date;
    distraction: Schema.Attribute.Date;
    duree: Schema.Attribute.Date;
    generalisation: Schema.Attribute.Date;
    maitrise: Schema.Attribute.Date;
    niveau: Schema.Attribute.String;
    position: Schema.Attribute.Date;
    signal: Schema.Attribute.Date;
  };
}

export interface DefaultComportement extends Struct.ComponentSchema {
  collectionName: 'components_default_comportements';
  info: {
    displayName: 'comportement';
  };
  attributes: {
    objectif: Schema.Attribute.String;
    valeur: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'default.bilan-comportement': DefaultBilanComportement;
      'default.comportement': DefaultComportement;
    }
  }
}
