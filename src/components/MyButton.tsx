type MyButtonProps = {
  count: number;
  onClick: () => void;
};

function MyButton(m: MyButtonProps) {
  const { count, onClick } = m;
  return (
    <div>
      <button onClick={onClick}> {count}</button>
    </div>
  );
}

export default MyButton;
