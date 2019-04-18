var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**技能工厂 */
var SkillFactor = (function () {
    function SkillFactor() {
    }
    SkillFactor.createSkill = function (skill) {
        var nowskill;
        switch (skill) {
            case SkillType.skill1:
                //不是new 从内存池中获取
                nowskill = new SkillWiteCell();
                break;
        }
        return nowskill;
    };
    return SkillFactor;
}());
__reflect(SkillFactor.prototype, "SkillFactor");
//# sourceMappingURL=SkillFactor.js.map