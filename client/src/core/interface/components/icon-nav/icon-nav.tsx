export interface IconNavProps {
  icon: string;
  title: string;
}
export const IconNav: React.FC<IconNavProps> = (props) => {
  return <img src={props.icon} alt={props.title} style={{ width: 30 }} />;
};
