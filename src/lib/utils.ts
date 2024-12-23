/**
 * Utility function to conditionally join class names.
 * Filters out falsy values like `undefined`, `null`, `false`, and empty strings.
 *
 * @param classes Array of class names or falsy values.
 * @returns A single string of valid class names joined by spaces.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
  }
  