const ua = navigator.userAgent;

const Device = {
  isTablet: /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua),
  isMobile: /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua),
};

export { Device };
