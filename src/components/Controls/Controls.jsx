const Controls = ({ currentItem, totalItems, onChangeIndex }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChangeIndex(-1)}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={currentItem === totalItems}
        onClick={() => onChangeIndex(1)}
      >
        Next
      </button>
    </section>
  );
};

export default Controls;
