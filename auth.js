const SESSION_KEYS = [
  'orgId',
  'orgName',
  'userName',
  'userRole',
  'userAge',
  'userTier',
  'userPassword'
];

function logoutSession() {
  SESSION_KEYS.forEach(function(key) {
    localStorage.removeItem(key);
  });
  window.location.href = 'index.html';
}
