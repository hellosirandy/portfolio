const listItem = {
  border: 'none',
  paddingTop: 6,
  paddingBottom: 8,
  paddingLeft: 0,
  paddingRight: '2rem',
  outline: 0,
};

export default {
  container: {
    width: 300,
    paddingBottom: 60,
    height: '100%',
    position: 'fixed',
    overflowY: 'scroll',
  },
  listItem,
  highlitedListItem: {
    ...listItem,
    fontWeight: 600,
  },
  divider: {
    ...listItem,
    padding: 0,
  },
  header: {
    ...listItem,
    display: 'flex',
    alignItems: 'center',
    paddingTop: '0',
    paddingBottom: '1.5rem',
  },
};
