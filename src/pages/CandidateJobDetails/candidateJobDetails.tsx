import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { Icon } from '../../assets/icons';
import { Flex, LoadingMessage, Typography } from '../../components';
import { routePaths } from '../../routes';
import { goBack, querySearchParse } from '../../utils';

import { TCandidateJobDetailsProps } from './';
import { JobDetails, ReplyModal } from './components';

export const CandidateJobDetailsView: React.FC<TCandidateJobDetailsProps> = ({
  history,
  jobDetails,
  loadings,
  dialogs,
  handleLoadJobDetails,
  handleSetDialog,
}) => {
  const searchParams = useMemo<{ jobId?: string }>(() => querySearchParse(), []);

  const onEnterScreen = useCallback(() => {
    if (!searchParams?.jobId) {
      history.push(routePaths.CANDIDATE_JOBS);

      return '';
    }

    handleLoadJobDetails(searchParams.jobId);
  }, [handleLoadJobDetails, history, searchParams?.jobId]);

  useLayoutEffect(() => {
    onEnterScreen();
  }, [onEnterScreen]);

  const handleClickReply = useCallback(() => handleSetDialog('reply', true), [
    handleSetDialog,
  ]);

  const handleCloseReply = useCallback(() => handleSetDialog('reply', false), [
    handleSetDialog,
  ]);

  return (
    <div>
      <Flex>
        <Icon name="arrowBack" clickable size="sm" isButton onClick={goBack} />

        <Typography size="xl" marginLeft="sm">
          Detalhes da vaga
        </Typography>
      </Flex>

      {loadings.getDetails ? (
        <Flex justifyItems="center" marginTop="xl">
          <LoadingMessage text="Carregando detalhes" />
        </Flex>
      ) : jobDetails ? (
        <JobDetails jobDetails={jobDetails} onClickReply={handleClickReply} />
      ) : null}

      {jobDetails ? (
        <ReplyModal
          open={dialogs.reply}
          handleClose={handleCloseReply}
          fields={jobDetails.job.fields}
        />
      ) : null}
    </div>
  );
};
