import { Address } from './address.model';
import { Experience } from './experience.model';
import { Education } from './education.model';
import { Skill } from './skill.model';
import { Interest } from './interest.model';
import { Certification } from './certification.model';

export class Curriculum {
    about: {
        firstname: string,
        lastname: string,
        address: Address,
        email: string,
        description: string
    };
    experiences: Experience[];
    educations: Education[];
    skills: Skill[]; 
    interests: Interest[];
    certifications: Certification[];    

}