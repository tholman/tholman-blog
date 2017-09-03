(function() {
  var posts;
  var filters;

  function init() {
    posts = document.querySelector('.content');
    filters = document.querySelectorAll('input');

    filters.forEach(function(element) {
      element.addEventListener('change', onFilterChange);
    });
  }

  function onFilterChange(event) {
    var data = this.dataset.type;
    var checked = this.checked;
    var changedClass = 'no-' + data;

    if (checked === true) {
      posts.classList.remove(changedClass);
    } else {
      posts.classList.add(changedClass);
    }
  }

  init();
})();
