import NilavuURL from 'nilavu/lib/url';

const HeaderController = Ember.Controller.extend({
  topic: null,
  showExtraInfo: null,
  hamburgerVisible: true,
  searchVisible: false,
  userMenuVisible: false,
  needs: ['application'],

  canSignUp: Em.computed.alias('controllers.application.canSignUp'),

  showSignUpButton: function() {
    return this.get('canSignUp') && !this.get('showExtraInfo');
  }.property('canSignUp', 'showExtraInfo'),

  showStarButton: function() {
    return Nilavu.User.current() && !this.get('topic.isPrivateMessage');
  }.property('topic.isPrivateMessage'),


  actions: {

    createSocket() {
      const socket = this.SocketIOService.socketFor('http://localhost:8090/');
      socket.emit('init', {
      host: "136.243.49.217",
      port: 6227,
      password: ""
    });
    },

    toggleSearch() {
      this.toggleProperty('searchVisible');
    },
    showUserMenu() {
      if (!this.get('userMenuVisible')) {
        this.appEvents.trigger('dropdowns:closeAll');
        this.set('userMenuVisible', true);
      }
    },

    fullPageSearch() {
      const searchService = this.container.lookup('search-service:main');
      const context = searchService.get('searchContext');
      var params = "";

      if (context) {
        params = `?context=${context.type}&context_id=${context.id}&skip_context=true`;
      }

      NilavuURL.routeTo('/search' + params);
    },
    toggleMenuPanel(visibleProp) {
      this.toggleProperty(visibleProp);
      this.appEvents.trigger('dropdowns:closeAll');
    },

    toggleStar() {
      const topic = this.get('topic');
      if (topic) topic.toggleStar();
      return false;
    }
  }
});

// Allow plugins to add to the sum of "flags" above the site map
const _flagProperties = [];
function addFlagProperty(prop) {
  _flagProperties.pushObject(prop);
}

function applyFlaggedProperties() {
  const args = _flagProperties.slice();
  args.push(function() {
    let sum = 0;
    _flagProperties.forEach((fp) => sum += (this.get(fp) || 0));
    return sum;
  });
  HeaderController.reopen({ flaggedPostsCount: Ember.computed.apply(this, args) });
}

addFlagProperty('currentUser.site_flagged_posts_count');
addFlagProperty('currentUser.post_queue_new_count');

export { addFlagProperty, applyFlaggedProperties };
export default HeaderController;
