export function isIdValid(id: number){
    return !isNaN(id) && id > 0;
}