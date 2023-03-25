function Text({ children }) {
  return (
    <span className=" bg-gradient-to-r dark:from-secondary from-indigo-800 to-blue-700 dark:to-primary text-transparent bg-clip-text">
      {children}
    </span>
  );
}

export default Text;
