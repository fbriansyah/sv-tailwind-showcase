/** 
 * checkInclude mencari strSearch didalam strCheck
 * return berupa boolean
*/
export function checkInclude(strCheck: string, strSearch: string): boolean {
  return strCheck.toLocaleLowerCase().includes(strSearch.toLocaleLowerCase())
}