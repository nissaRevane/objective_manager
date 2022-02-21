import Model, { attr } from '@ember-data/model';

export default class ObjectiveModel extends Model {
  @attr('string') title;
  @attr('number') weight;
}
