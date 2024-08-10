import EductionContainer from "@/components/eduction/eduction-container";
import { getEductions } from "@/lib/eductions";


const Education = async () => {

  const eductions = await getEductions();
  return (
    <EductionContainer eductions={eductions} />
  );
}

export default Education
