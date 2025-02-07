import ExperienceInfoProps from "../types/ExperienceInfoProps";

const ExperienceInfo = ({company, role, duration, description} : ExperienceInfoProps) => {
  return (
    <div className="w-80">
      <h4 className="text-lg uppercase font-bold">{role}</h4>
      <p className="font-light text-base my-2">{company} ({duration})</p>
      <p className="font-light text-sm">{description}</p>
    </div>
  );
};

export default ExperienceInfo;
