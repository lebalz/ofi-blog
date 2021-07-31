const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
  if (mutations.length == 0) {
    return;
  }
  const isBody = mutations.length > 1 && (['BODY', 'HTML'].includes(mutations[0].target.tagName.toUpperCase()))
  if (!isBody && !mutations[0].target.classList.contains('menu__link')) {
    try {
      if (window._LOG_MUTATIONS_) {
        console.log(mutations);
      }
    } catch (e) {
    }
    return;
  }
  const pagination = document.querySelector(".pagination-nav");
  if (pagination && pagination.parentElement) {
    pagination.parentElement.removeChild(pagination);
  }
});

// define what element should be observed by the observer
// and what types of mutations trigger the callback
observer.observe(document, {
  subtree: true,
  attributes: true
});