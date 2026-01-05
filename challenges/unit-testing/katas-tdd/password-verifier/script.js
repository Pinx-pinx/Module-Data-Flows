function verify(password) {
  
  if (password === null || password.length < 8) {
    return 'Password rejected';
  }
  
 
  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase() && /[A-Za-z]/.test(password[i])) {
      hasUppercase = true;
      break;
    }
  }

  if (!hasUppercase) {
    return 'Password rejected';
  }

  
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (/[0-9]/.test(password[i])) {
      hasNumber = true;
      break;
    }
  }

  if (!hasNumber) {
    return 'Password rejected';
  }

  
  return 'Password accepted';
}

module.exports = verify; 
