import ContainerSkill from "@/components/skill/container-skill"
import { getFrontEndSkills, getBackEndSkills, getToolsSkills } from "@/lib/skills";

const SkillsSection = async () => {
  const frontEndSkills = await getFrontEndSkills();
  const backEndSkills = await getBackEndSkills();
  const toolsSkills = await getToolsSkills();
  return (
      <ContainerSkill frontEndSkills={frontEndSkills} backEndSkills={backEndSkills} toolsSkills={toolsSkills}/>
  )
}

export default SkillsSection
