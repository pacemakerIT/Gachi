export const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for checking email format
  return re.test(String(email).toLowerCase());
};
