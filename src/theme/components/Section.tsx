export const Section: React.FC = ({ children }) => (
  <section
    css={{
      maxWidth: '40rem',
      margin: '1.5rem auto',
      'ul, p': {
        margin: '1.5rem 1.5rem 2rem',
      },
    }}
  >
    {children}
  </section>
);
