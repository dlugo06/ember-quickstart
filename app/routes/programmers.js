import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Grace Hopper', 'Ada Lovelace', 'Steve Wozniak', 'Yukihiro Matsumoto'];
  }
});
