/* ------------------------------
Checks if the given string is a valid JSON string
------------------------------ */
function checkJSON(string) {
  try {
    JSON.parse(string);
  } catch (e) {
    return false;
  }
  return true;
}

/* ------------------------------
Checks if local storage is available
------------------------------ */
function checkStorage(){
  return (typeof localStorage != 'undefined');
}

/* ------------------------------
Helper for Materialize.toast()
------------------------------ */
function toast(type, message, duration) {
  var icon = 'fa fa-fw fa-';
  switch (type) {
    case 'info':
      icon += 'info-circle';
      break;
    case 'success':
      icon += 'check';
      break;
    case 'warning':
      icon += 'exclamation-circle';
      break;
    case 'error':
      icon += 'exclamation-triangle';
      break;
    default:
      icon = '';
      type = 'default';
  }
  if (icon != '') {
    icon = '<i class="' + icon + '"></i> ';
  }
  Materialize.toast(icon + message, duration, 'message ' + type);
}
