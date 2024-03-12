import { ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: ReactNode;
}

// export const Child = ({ color, onClick }: ChildProps) => {
//   return (
//     <div>
//       Child component with color = {color} content 
//       <button onClick={onClick}></button>
//     </div>  
//   )
// }


export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div style={{ color }} onClick={onClick}>
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};