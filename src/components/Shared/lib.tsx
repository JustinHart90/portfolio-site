
export const getImageAlt = (index: number) : string => {
  const numbersText: Array<string> = ['First', 'Second', 'Third'];
  return `${numbersText[index]} Slide`;
}
export const getId = (id: string, isContactForm: boolean) : string => {
  return (!isContactForm ? id : `${id}-2`);
}
export const openUrl = (url: string) : void => {
  if (!url || !url.length) return;
  window.open(url, "_blank");
}