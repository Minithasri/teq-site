export default function Footer() {
  return (
    <footer
      id='landing-footer'
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: '#de8263',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Outfit', sans-serif",
        position: 'relative',
        zIndex: 1, // To ensure it stacks correctly below FooterCTA
      }}
    >
      <div
        style={{
          color: '#ffffff',
          fontSize: 'clamp(48px, 6vw, 80px)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
        }}
      >
        Footer
      </div>
    </footer>
  );
}
