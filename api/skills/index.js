import { SKILLS_ID_ENDPOINT, SKILLS_ENDPOINT } from "../endpoints.js";
import findSkill from "./findSkill.js";
import getSkills from "./getSkills.js";
import createSkill from "./createSkill.js";

export default (router) => {
    router.get(SKILLS_ID_ENDPOINT, findSkill);
    router.get(SKILLS_ENDPOINT, getSkills);
    router.post(SKILLS_ENDPOINT, createSkill);
};