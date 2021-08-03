const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

const isRelevantMutation = (mutation) => {
  if ((['BODY', 'HTML'].includes(mutation.target.tagName.toUpperCase()))) {
    return true;
  }
  if (mutation.target.classList.contains('menu__link')) {
    return true;
  }
  return false;
}

var observer = new MutationObserver(function (mutations, observer) {
  if (mutations.length == 0) {
    return;
  }
  if (!mutations.some(isRelevantMutation)) {    
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