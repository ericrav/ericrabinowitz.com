export const Container: React.FC = ({ children }) => (
  <div
    css={{
      padding: '1rem',
      maxWidth: '48rem',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);
