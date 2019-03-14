import Screenshot1 from '../../assets/image/saasThree/screen-1.png';

import AuthorOne from '../../assets/image/saasThree/author-1.jpg';
import AuthorTwo from '../../assets/image/saasThree/author-2.jpg';
import AuthorThree from '../../assets/image/saasThree/author-3.jpg';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';
import { ic_create_new_folder, ic_verified_user } from 'react-icons-kit/md'
import { users } from 'react-icons-kit/fa'
import ScreenShot_AddMembers from '../../../../../assets/images/ScreenShot_AddMembers.png'
import ScreenShot_ManageClique from '../../../../../assets/images/ScreenShot_ManageClique.png'
import ScreenShot_CreateHandbook from '../../../../../assets/images/ScreenShot_CreateHandbook.png'
import ScreenShot_SignHandbook from '../../../../../assets/images/ScreenShot_SignHandbook.png'


export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Process',
    path: '#screenshot_section',
    offset: '0',
  },
  {
    label: 'Features',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '0',
  },
  {
    label: 'Testimonials',
    path: '#testimonial_section',
    offset: '0',
  },
];

export const SERVICE_ITEMS = [
  {
    icon: 'flaticon-stopwatch-1',
    title: 'Fast Performance',
  },
  {
    icon: 'flaticon-prototype',
    title: 'Prototyping',
  },
  {
    icon: 'flaticon-code',
    title: 'Coade Export',
  },
  {
    icon: 'flaticon-vectors',
    title: 'Vector Editing',
  },
  {
    icon: 'flaticon-export',
    title: 'Export Presets',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    // description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Per month',
    buttonLabel: 'Sign Up',
    url: '#',
    listItems: [
      {
        content: 'Hand book text editor',
      },
      {
        content: 'Members management',
      },
      {
        content: 'Member nudging',
      },
      {
        content: 'Up to 5 members',
      },
    ],
  },
  {
    name: 'Small Club',
    // description: 'For Mediums teams or group who need to build website ',
    price: '$5',
    priceLabel: 'Per month',
    buttonLabel: 'Sign Up',
    url: '#',
    // trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Hand book text editor',
      },
      {
        content: 'Members management',
      },
      {
        content: 'Member nudging',
      },
      {
        content: 'Up to 20 members',
      },
    ],
  },
  {
    name: 'Premium Club',
    // description: 'For Large teams or group who need to build website ',
    price: '$20',
    priceLabel: 'Per month',
    buttonLabel: 'Sign Up',
    url: '#',
    // trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Hand book text editor',
      },
      {
        content: 'Members management',
      },
      {
        content: 'Member nudging',
      },
      {
        content: 'Up to 500 members',
      },
    ],
  },
];

// export const YEARLY_PRICING_TABLE = [
//   {
//     name: 'Basic Account',
//     description: 'For a single client or team who need to build website ',
//     price: '$0',
//     priceLabel: 'Only for first month',
//     buttonLabel: 'Start for free',
//     url: '#',
//     listItems: [
//       {
//         content: 'Drag & Drop Builder',
//       },
//       {
//         content: '1,000s of Templates Ready',
//       },
//       {
//         content: 'Blog Tools',
//       },
//       {
//         content: 'eCommerce Store ',
//       },
//       {
//         content: '30+ Webmaster Tools',
//       },
//     ],
//   },
//   {
//     name: 'Business Account',
//     description: 'For Small teams or group who need to build website ',
//     price: '$6.00',
//     priceLabel: 'Per month & subscription yearly',
//     buttonLabel: 'Register Now',
//     url: '#',
//     trialButtonLabel: 'Or Start 14 Days trail',
//     trialURL: '#',
//     listItems: [
//       {
//         content: 'Unlimited secure storage',
//       },
//       {
//         content: '2,000s of Templates Ready',
//       },
//       {
//         content: 'Blog Tools',
//       },
//       {
//         content: '24/7 phone support',
//       },
//       {
//         content: '50+ Webmaster Tools',
//       },
//     ],
//   },
//   {
//     name: 'Premium Account',
//     description: 'For Large teams or group who need to build website ',
//     price: '$9.99',
//     priceLabel: 'Per month & subscription yearly',
//     buttonLabel: 'Register Now',
//     url: '#',
//     trialButtonLabel: 'Or Start 14 Days trail',
//     trialURL: '#',
//     listItems: [
//       {
//         content: 'Drag & Drop Builder',
//       },
//       {
//         content: '3,000s of Templates Ready',
//       },
//       {
//         content: 'Advanced branding',
//       },
//       {
//         content: 'Knowledge base support',
//       },
//       {
//         content: '80+ Webmaster Tools',
//       },
//     ],
//   },
// ];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: 'flaticon-security',
    title: 'Security',
    description:
      'Your information is protected using modern security measures.',
  },
  {
    icon: 'flaticon-stopwatch-1',
    title: 'Ease of Use',
    description:
      'Our built-in text editor makes it wasy to personalize your handbook.',
  },
  {
    icon: 'flaticon-upload',
    title: 'No Registration',
    description:
      'Your members do not need to register. They are quickly authenticated via a link sent directly to their inbox',
  },
  {
    icon: 'flaticon-magnifying-glass',
    title: 'Auditing',
    description:
      'We track we has viewed your handbook and agreed to your terms.',
  },
  {
    icon: 'flaticon-briefing',
    title: 'Document Editing',
    description:
      'Making changes to your handbook is simple.',
  },
  {
    icon: 'flaticon-conversation',
    title: 'Member Outreach',
    description:
      'Easily contact your members if they have not viewed your handbook yet',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_create_new_folder,
    title: 'Create a Handbook',
    image: ScreenShot_CreateHandbook,
  },
  {
    icon: users,
    title: 'Add Members',
    image: ScreenShot_AddMembers,
  },
  {
    icon: ic_verified_user,
    title: 'Sign the Handbook',
    image: ScreenShot_SignHandbook,
  },
  {
    icon: briefcase,
    title: 'Manage Your Clique',
    image: ScreenShot_ManageClique,
  },
];

export const TESTIMONIALS = [
  {
    title: '',
    review:
      'CliqueBook is such a powerful tool. I love the ability to share the culture of our club in a visual way. The layout tools were super easy to use to add images and change font colors. Everything looks so professional and is easy to keep up-to-date.',
    name: 'Joshua',
    designation: 'Software Engineer Project Lead',
    avatar: `${AuthorThree}`,
  },
  {
    title: '',
    review:
      'Easy to Use with a very nice user flow!',
    name: 'Albert',
    designation: 'Wordpress Developer',
    avatar: `${AuthorThree}`,
  },
  {
    title: '',
    review:
      `Very professional looking app. It's easy to use and very quick startup.`,
    name: 'Dave',
    designation: 'B.S. Computer Science',
    avatar: `${AuthorOne}`,
  },
  {
    title: '',
    review:
      'The handbook renderer section is fun to use on mobile view!',
    name: 'Paolo',
    designation: 'B.S. Tourism',
    avatar: `${AuthorTwo}`,
  },
  {
    title: '',
    review:
      'I love the Handbook Renderer Section. So Clean and so Intuitive. Makes me so excited to start Lambda School.',
    name: 'Jacob',
    designation: 'Upcoming Lambda Student',
    avatar: `${AuthorThree}`,
  },
];
