import DS from 'ember-data';

export default DS.RESTSerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
        return this._super(...arguments);
    }
});
