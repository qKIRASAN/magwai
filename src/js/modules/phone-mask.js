import IMask from 'imask';

export function createPhoneMask(selector) {
  const input = selector.querySelector(`input[type=tel]`);
  const maskPattern = {
    'mask': '{+7} (000) 000-00-00'
  };
  const mask = new IMask(input, maskPattern);

  return {
    init() {
      return mask;
    }
  }
}
