import React from 'react';
import { IModalProps, Modal, Typography } from '../';

import {} from './styles';
import { useRequest } from '../../hooks';
import { getCandidateById } from '../../services';
import { ICandidateDetails } from '../../types';
import { Tags } from '../tags';
import { LoadingMessage } from '../loadingMessage';

interface IProps {
  open: boolean;
  handleClose: IModalProps['handleClose'];
  candidateId: string;
}

const UserDetailsModalComponent: React.FC<IProps> = ({
  open,
  handleClose,
  candidateId,
}) => {
  const [candidateDetails, isLoadingDetails] = useRequest<ICandidateDetails>({
    handleRequest: getCandidateById,
    initialReqParams: [candidateId],
  });

  return (
    <Modal
      open={open}
      handleClose={handleClose}
      title="Detalhes do candidato"
      width="sm"
    >
      {isLoadingDetails && (
        <LoadingMessage text="Carregando detalhes do candidato" />
      )}

      {candidateDetails && (
        <>
          <Typography color="three">Nome do candidato:</Typography>
          <Typography marginTop="xs">{candidateDetails.name}</Typography>

          <Typography marginTop="md" color="three">
            Email:
          </Typography>
          <Typography marginTop="xs">{candidateDetails.email}</Typography>

          <Typography marginTop="md" color="three">
            Localidade:
          </Typography>
          <Typography marginTop="xs">{candidateDetails.locality}</Typography>

          <Typography marginTop="md" color="three">
            Sobre:
          </Typography>
          <Typography marginTop="xs">{candidateDetails.about}</Typography>

          <Typography marginTop="md" color="three">
            Descrição:
          </Typography>
          <Typography marginTop="xs">{candidateDetails.description}</Typography>

          <Typography marginTop="md" marginBottom="xs" color="three">
            Formações:
          </Typography>
          <Tags items={candidateDetails.formations || []} />

          <Typography marginTop="sm" marginBottom="xs" color="three">
            Habilidades:
          </Typography>
          <Tags items={candidateDetails.skills || []} />

          <Typography marginTop="sm" marginBottom="xs" color="three">
            Experiências:
          </Typography>
          <Tags items={candidateDetails.experiences || []} />
        </>
      )}
    </Modal>
  );
};

export const UserDetailsModal = React.memo(UserDetailsModalComponent);
