import logo from '../../assets/logo.svg'

export const Logo = (props: {

  width?: string
}) => {
  return (
    <img class={`${props.width || "w-8"}  aspect-square object-contain`} src={logo} alt="" />
  );
};
