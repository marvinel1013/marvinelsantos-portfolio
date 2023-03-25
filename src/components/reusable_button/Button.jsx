function Button({ children, style }) {
  return (
    <button
      className={
        style +
        " " +
        "bg-gradient-to-r dark:hover:from-primary dark:hover:to-secondary dark:from-secondary dark:to-primary from-indigo-800 to-blue-700 hover:from-blue-700 hover:to-indigo-800 duration-300 ease-in hover:scale-105 text-light"
      }
    >
      {children}
    </button>
  );
}

export default Button;
