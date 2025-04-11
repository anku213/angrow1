// components/shared/SkillTag.tsx
import { FC } from "react";

type Props = {
  name: string;
  level?: number;
};

const SkillTag: FC<Props> = ({ name, level }) => {
  return (
    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
      {name} {level ? `- Level ${level}` : ""}
    </span>
  );
};

export default SkillTag;
