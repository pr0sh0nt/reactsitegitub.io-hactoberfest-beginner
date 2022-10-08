const getVariableCss = (varibleCss) => {
  const docStyle = getComputedStyle(document.documentElement);
  return docStyle.getPropertyValue(varibleCss);
};
export default getVariableCss;
