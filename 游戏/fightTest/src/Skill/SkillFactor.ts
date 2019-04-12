/**技能工厂 */
class SkillFactor{
    public static createSkill(skill:string){

        let nowskill:Skill;
        switch(skill){
            case SkillType.skill1:
                 //不是new 从内存池中获取
                 nowskill = new SkillWiteCell();
                 break;
        }
        return nowskill;
    }
}