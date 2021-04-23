import { createNumberMask } from 'text-mask-addons';

export const masksInput = {
  number: createNumberMask({
    prefix: '',
    thousandsSeparatorSymbol: '.',
  }),
};
