import { AbstractControl } from "@angular/forms";
import { Bookmark } from "src/app/core/services/bookmark.model";

/**
 * Checks if the input already exists in the provided list 
 * @param list List of strings to compare input with
 * @returns { [key: string]: boolean } | null
 */
export function repeat(list: string[]) {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== null && list.includes(control.value)) {
      return { repeat: true };
    }
    return null;
  };
}