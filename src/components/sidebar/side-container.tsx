import "../../styles/side-container.scss";

function SideContainer({
  children,
  open = true,
}: {
  children: any;
  open: boolean;
}) {
  let content = open ? children : null;

  return (
    <div className={open ? "side-container--expanded" : "side-container"}>
      {content}
    </div>
  );
}

export default SideContainer;
