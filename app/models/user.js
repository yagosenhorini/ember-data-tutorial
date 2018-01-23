import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    post: hasMany('user'),

    name: DS.attr('string'),
    username: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    website: DS.attr('string'),
});
