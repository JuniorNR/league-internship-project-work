import { MouseEvent, memo, useState } from 'react';

import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from '@emotion/styled';

import { TasksStatusFilterProps } from './TasksStatusFilter.interface';
import { FilterTypes } from 'domains/index';
import { FILTER_TYPES } from 'constants/index';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)({
  height: '100%',
});

const TasksStatusFilterComponent = ({ taskType, onChange }: TasksStatusFilterProps): JSX.Element => {
  const [alignment, setAlignment] = useState(FILTER_TYPES.ALL);
  const handleChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    onChange(newAlignment as FilterTypes);
    setAlignment(newAlignment);
    console.log();
  };

  return (
    <StyledToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="Platform">
      <ToggleButton value="ALL">{FILTER_TYPES.ALL}</ToggleButton>
      <ToggleButton value="ACTIVE">{FILTER_TYPES.ACTIVE}</ToggleButton>
      <ToggleButton value="DONE">{FILTER_TYPES.DONE}</ToggleButton>
      <ToggleButton value="IMPORTANT">{FILTER_TYPES.IMPORTANT}</ToggleButton>
    </StyledToggleButtonGroup>
  );
};

export const TasksStatusFilter = memo(TasksStatusFilterComponent);
