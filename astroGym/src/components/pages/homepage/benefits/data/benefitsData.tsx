import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/24/solid';
import { BenefitProps } from '../../../../types/types';

export const dataOfBenefit: Array<BenefitProps> =
[
    {
        title: "State of the Art Facilities",
        icon: <HomeModernIcon className="h-6 w-6" />,
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        title: "100's of Diverse Classes",
        icon: <UserGroupIcon className="h-6 w-6" />,
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        title: "Expert and Pro Trainers",
        icon: <AcademicCapIcon className="h-6 w-6" />,
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]