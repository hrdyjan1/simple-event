import { Nullish } from '@/types/Nullish';

/**
 * Function: isDefined
 *
 * This utility function checks if a given variable is defined (i.e., not null or undefined).
 * It is a TypeScript type guard function that refines the type within its scope when the function returns true.
 *
 * Type Parameters:
 * T: The type of the input variable 'x'.
 *
 * Parameters:
 * x: The input variable of type 'T' or Nullish (i.e., 'undefined' or 'null').
 *
 * Returns:
 * The function returns a boolean value, 'true' if 'x' is not 'null' or 'undefined',
 * otherwise it returns 'false'.
 * The returned value also serves as a type guard, refining 'x' to 'T' when the function returns 'true'.
 */
function isDefined<T>(x: T | Nullish): x is T {
  return !(typeof x === 'undefined' || x === null);
}

export { isDefined };
