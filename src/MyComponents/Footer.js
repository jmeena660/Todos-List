import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: "100%",
    backgroundColor: "#343a40",
    color: "white",
    textAlign: "center",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };

  return (
    <footer style={footerStyle}>
      <p>
        Copyright &copy; MyTodosList.com
      </p>
    </footer>
  );
}

export default Footer;

