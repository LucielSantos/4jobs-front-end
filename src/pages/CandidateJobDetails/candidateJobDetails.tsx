import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { Icon } from '../../assets/icons';
import { Flex, LoadingMessage, MessagesModal, Typography } from '../../components';
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
  handleReplyForm,
  handleCleanMessage,
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

  const handleClickReply = useCallback(() => handleSetDialog('reply', true), [handleSetDialog]);

  const handleCloseReply = useCallback(() => handleSetDialog('reply', false), [handleSetDialog]);

  const handleClickMessage = useCallback(() => {
    handleCleanMessage();
    handleSetDialog('messages', true);
  }, [handleSetDialog, handleCleanMessage]);

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
        <JobDetails
          jobDetails={jobDetails}
          onClickReply={handleClickReply}
          onClickMessage={handleClickMessage}
        />
      ) : null}

      {jobDetails ? (
        <ReplyModal
          open={dialogs.reply}
          jobId={jobDetails.id}
          fields={jobDetails.job.fields}
          isLoading={loadings.saveForm}
          handleClose={handleCloseReply}
          handleReplyForm={handleReplyForm}
        />
      ) : null}

      {jobDetails ? (
        <MessagesModal
          open={dialogs.messages}
          handleClose={() => {
            handleSetDialog('messages', false);
          }}
          jobResponseId={jobDetails.id}
        />
      ) : null}
    </div>
  );
};
