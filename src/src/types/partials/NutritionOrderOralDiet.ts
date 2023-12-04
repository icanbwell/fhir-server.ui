/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
// This file is auto-generated by generate_classes so do not edit manually

import { TExtension } from '../partials/Extension';
import { TCodeableConcept } from '../partials/CodeableConcept';
import { TTiming } from '../partials/Timing';
import { TNutritionOrderNutrient } from '../partials/NutritionOrderNutrient';
import { TNutritionOrderTexture } from '../partials/NutritionOrderTexture';

export type TNutritionOrderOralDiet = {
    id?: String;
    extension?: TExtension[];
    modifierExtension?: TExtension[];
    type?: TCodeableConcept[];
    schedule?: TTiming[];
    nutrient?: TNutritionOrderNutrient[];
    texture?: TNutritionOrderTexture[];
    fluidConsistencyType?: TCodeableConcept[];
    instruction?: String;
};
