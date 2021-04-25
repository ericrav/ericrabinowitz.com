export const Section: React.FC = ({ children }) => (
  <section
    css={{
      maxWidth: '40rem',
      margin: '4rem auto',
      'ul, p': {
        margin: '1.5rem',
      },
    }}
  >
    {children}
  </section>
);