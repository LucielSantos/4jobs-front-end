import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IApplicationState } from '../../../../store';

interface IProps {}

let displayedKeys: number[] = [];

const NotifierComponent: React.FC<IProps> = () => {
  const notifications = useSelector(({ main }: IApplicationState) => main.notifications);

  const { enqueueSnackbar } = useSnackbar();

  const addDisplayedKeys = (id: number) => {
    displayedKeys = [...displayedKeys, id];
  };

  useEffect(() => {
    notifications.forEach(({ message, variant, key, duration = 5000 }) => {
      if (displayedKeys.includes(key)) return;

      enqueueSnackbar(message, {
        key,
        variant,
        autoHideDuration: duration,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
      });

      addDisplayedKeys(key);
    });
    // eslint-disable-next-line
  }, [notifications]);

  return null;
};

export const Notifier = React.memo(NotifierComponent);
