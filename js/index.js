(function() {
  var posts;
  var filters;
  var wrapper;

  var ammountOfItemsToRevealAtATime = 5;
  var bottomScrollReveal = 1000; //px

  function init() {
    posts = document.querySelector('.content');
    filters = document.querySelectorAll('input');
    wrapper = document.querySelector('.wrapper');

    filters.forEach(function(element) {
      element.addEventListener('change', onFilterChange);
    });

    wrapper.addEventListener('scroll', onScroll);
  }

  // Show/Hide elements based on filters
  function onFilterChange(event) {
    var data = this.dataset.type;
    var checked = this.checked;
    var changedClass = 'no-' + data;

    if (checked === true) {
      posts.classList.remove(changedClass);
    } else {
      posts.classList.add(changedClass);
    }

    loadMoreItems();
  }

  // Reveal templates/new posts as you scroll down
  function onScroll(event) {
    if (
      wrapper.scrollHeight - wrapper.scrollTop - bottomScrollReveal <
      wrapper.clientHeight
    ) {
      loadMoreItems();
    }
  }

  function loadMoreItems() {
    var template = document.querySelector('template');

    if (template === null) {
      return;
    }

    template.parentNode.replaceChild(
      document.importNode(template.content, true),
      template
    );
  }

  init();
})();
