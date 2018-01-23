import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('post', params.id);
    },
    setupController(controller, model){
        Ember.set(controller, 'post', model);
    }
});
