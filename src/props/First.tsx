interface FirstComponent {
  name: string;
  lastname: string;
  onClick: () => void;
  chilren: React.ReactNode;
}
const First: React.FC<FirstComponent> = ({
  name,
  lastname,
  onClick,
  chilren,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h2>{lastname}</h2>
      <button onClick={onClick}>Click ME </button>
      {chilren}
    </div>
  );
};

export default First;
