export const Container: React.FC = ({ children }) => (
  <div
    css={{
      padding: '1rem',
      maxWidth: '75rem',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);
