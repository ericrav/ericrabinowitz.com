export const Container: React.FC = ({ children }) => (
  <div
    css={{
      padding: '1rem',
      maxWidth: '34rem',
      margin: '0 auto',
    }}
  >
    {children}
  </div>
);
