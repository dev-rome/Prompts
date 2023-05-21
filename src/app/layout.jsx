import "../styles/base.css";

export const metadata = {
  title: "Prompts",
  description: "Discover & Share AI Prompts from around the world.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
