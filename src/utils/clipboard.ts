import { openNotification } from './notification';

export const copyToClipboard = (text: string, successCallback: () => void) =>
  navigator.clipboard
    .writeText(text)
    .then(successCallback)
    .catch(() =>
      openNotification(
        'Não foi possível copiar o texto para a área de transferência',
        'error'
      )
    );
