import styled from '@emotion/styled';

export const StyledUl = styled('ul')({
  listStyle: 'none',
  margin: '0',
  padding: '0',
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledBadge = styled('span')({
  backgroundColor: '#6c757d',
  color: '#fff',
  display: 'inline-block',
  padding: '0.35em 0.65em',
  fontSize: '.75em',
  fontWeight: '700',
  lineHeight: '1',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'baseline',
  borderRadius: '0.25rem',
});
