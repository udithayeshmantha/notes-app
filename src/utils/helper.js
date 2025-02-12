export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
};

export const getInitials = (name) =>{
  if (!name) return "";
  
  const words = name.split("");
  let initials = "";
  
  for (let i = 0; i < Math.min(words.length, 2); i++) {
  initials += words[i] [0];
  
  }
  
  return initials.toUpperCase();
};