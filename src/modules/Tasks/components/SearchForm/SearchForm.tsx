import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { TasksStatusFilter } from '../index';
import { TasksStoreInstance } from '../../store/index';
import { StyledSearchField, StyledSearchForm, StyledButton } from 'components/index';

import { FilterTypes, SearchFormEntity } from 'domains/index';
import { FILTER_TYPES } from 'constants/filter_types';

export const SearchForm = (): JSX.Element => {
  const { updateTasks } = TasksStoreInstance;

  const defaultValues: SearchFormEntity = {
    searchValue: '',
    filterType: FILTER_TYPES.ALL,
  };

  const { setValue, handleSubmit, control } = useForm<SearchFormEntity>({ defaultValues });

  const onChangeTasksStatusFilter = (type: FilterTypes) => setValue('filterType', type);
  const onChangeSearchInput = (value: string) => setValue('searchValue', value);

  const onResetSearchInput = () => setValue('searchValue', '');

  const onSubmitFormSearch: SubmitHandler<SearchFormEntity> = (data: SearchFormEntity): void => {
    updateTasks(data);
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(onSubmitFormSearch)}>
      <Controller
        control={control}
        name="searchValue"
        render={({ field: { value } }) => (
          <StyledSearchField onReset={onResetSearchInput} onChange={onChangeSearchInput} value={value} />
        )}
      />
      <Controller
        control={control}
        name="filterType"
        render={({ field: { value } }) => <TasksStatusFilter taskType={value} onChange={onChangeTasksStatusFilter} />}
      />
      <StyledButton type="submit" variant="primary" fontSize="14px">
        Send
      </StyledButton>
    </StyledSearchForm>
  );
};
