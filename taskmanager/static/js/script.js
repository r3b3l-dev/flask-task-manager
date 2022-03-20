document.addEventListener('DOMContentLoaded', function() {
  // sidenav initialization
  let sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
});


// modal trigger
document.addEventListener('DOMContentLoaded', function() {
  let modal = document.querySelectorAll('.modal');
  M.Modal.init(modal);
});