import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
    userId: belongsTo('user'),
    title: DS.attr('string'),
    body: DS.attr('string'),

});
