console.log(1);

const startOrMax = (v, start, max) => {
  if (v < start) {
    return start;
  }
  return v < max ? v : max;
};
const END_SCROLL = 4000;
const OPACITY_DELAY = 800;
const OPACITY_VALUE = 800;

window.addEventListener("scroll", (e) => {
  const body = document.documentElement;
  console.log(body.scrollTop);
  const scrollIdx =
    body.scrollTop < END_SCROLL ? body.scrollTop : END_SCROLL - 1000;
  const u = document.getElementById("u");
  const p = document.getElementById("p");
  const uspan = document.getElementById("u").childNodes[1];
  const pspan = document.getElementById("p").childNodes[1];

  uspan.style.cssText = `
      opacity: ${(scrollIdx - OPACITY_DELAY) / OPACITY_VALUE}
      
  `;
  u.style.cssText = `
    width:${startOrMax(scrollIdx / 10 + 18, 0, 135)}px;
  `;

  pspan.style.cssText = `
  opacity: ${(scrollIdx - OPACITY_DELAY) / OPACITY_VALUE}
  
`;
  p.style.cssText = `
width:${startOrMax(scrollIdx / 10 + 18, 0, 105)}px;
`;
});
