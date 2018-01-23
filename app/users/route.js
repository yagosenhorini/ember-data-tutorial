import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('user');
    },

    setupController(controller, model){
        Ember.set(controller, 'users', model);
    }
});