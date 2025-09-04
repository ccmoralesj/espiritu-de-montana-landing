import React from "react";

interface BulletListProps {
  text?: string; // opcional
}

const BulletList: React.FC<BulletListProps> = ({ text }): JSX.Element => {
  if (!text || text.trim().length === 0) {
    return <div />; // fallback limpio
  }

  const items: string[] = text
    .split("*")
    .map(item => item.trim())
    .filter(item => item.length > 0);

  return (
    <ul className="list-disc pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BulletList;