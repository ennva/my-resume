import { Curriculum } from 'src/models/curriculum.model';
import { about } from './mock-about';
import { esperiences } from './mock-experiences';
import { educations } from './mock-educations';
import { skills } from './mock-skills';
import { interests } from './mock-interests';
import { certifications } from './mock-certifications';

export const resume: Curriculum = {
    about: about,
    experiences: esperiences,
    educations: educations,
    skills: skills,
    interests: interests,
    certifications: certifications
}