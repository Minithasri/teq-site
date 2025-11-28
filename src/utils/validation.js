/**
 * Email validation
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Phone number validation
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
}

/**
 * URL validation
 */
export function isValidUrl(string) {
  try {
    new URL(string);
    return true;
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (_) {
    return false;
  }
}

/**
 * Required field validation
 */
export function isRequired(value) {
  return value !== null && value !== undefined && value.toString().trim() !== '';
}

/**
 * Minimum length validation
 */
export function minLength(value, min) {
  return value && value.length >= min;
}

/**
 * Maximum length validation
 */
export function maxLength(value, max) {
  return value && value.length <= max;
}
