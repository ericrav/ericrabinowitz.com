export const Section: React.FC = ({ children }) => (
  <section
    css={{
      maxWidth: '45rem',
      margin: '1.5rem auto',
      'ul, p': {
        margin: '1.5rem 1.5rem 2rem',

        '@media (max-width: 45em)': {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    }}
  >
    {children}
  </section>
);
