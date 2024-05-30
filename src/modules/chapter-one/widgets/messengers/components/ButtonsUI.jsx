const ButtonPrimary = ({ children, items, action }) => {
  return (
    <button
      className={`btn btn-success ${items.btn_class}`}
      type="submit"
      title={items.title}
      onClick={action}
    >
      {children}
    </button>
  );
};

const ButtonSecondary = ({ children, items, action }) => {
  return (
    <button
      className={`btn ${items.btn_class}`}
      type="submit"
      title={items.title}
      onClick={action}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary };
