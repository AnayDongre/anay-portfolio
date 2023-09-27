interface NavButtonProps {
  id: number;
  name: string;
  isActive: boolean;
  onNavButtonClick: (id: number) => void;
}
function NavButton(props: NavButtonProps) {
  const { id, name, isActive, onNavButtonClick } = { ...props };
  return (
    <div
      className={isActive ? "active nav-button" : "nav-button"}
      onClick={() => onNavButtonClick(id)}
    >
      {name}
    </div>
  );
}

export default NavButton;
