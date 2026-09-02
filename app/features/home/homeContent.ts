import type { Locale } from '../../lib/i18n';

type LocalizedText = Record<Locale, string>;

export type HomeCopy = {
  heroLabel: string;
  heroLines: string[];
  heroDescription: string;
  scroll: string;
  aboutTitleLines: string[];
  aboutLead: string;
  qualities: Array<{ title: string; descriptionLines: string[] }>;
  aboutNote: string;
  skillsTitle: string;
  skillsLead: string;
  careerTitle: string;
  worksTitle: string;
  worksLead: string;
  certificationsTitle: string;
  socialsTitle: string;
  viewAll: string;
  featured: string;
};

export const homeCopy: Record<Locale, HomeCopy> = {
  ja: {
    heroLabel: 'DIGITAL CREATOR & ENGINEER',
    heroLines: ['つくることを', 'もっと自由に'],
    heroDescription: 'Webサイトやツールを通じて、複雑なことを、わかりやすい体験へ変えていきます。',
    scroll: 'SCROLL TO EXPLORE',
    aboutTitleLines: ['好奇心を起点に', '誰かに届く仕組みを作る'],
    aboutLead:
      'アイデアを形にするだけでなく、使う人が迷わず前に進めることまで考えて設計と実装を行っています。',
    qualities: [
      {
        title: '考える',
        descriptionLines: ['複雑な情報や課題を整理し', '必要な体験を見つけます。'],
      },
      {
        title: '設計する',
        descriptionLines: ['目的と使う人をつなぐ', 'わかりやすい流れを組み立てます。'],
      },
      {
        title: '実装する',
        descriptionLines: ['Webサイトやツールとして、', '実際に動く形まで落とし込みます。'],
      },
    ],
    aboutNote:
      '学生団体での制作・開発活動とエンジニアインターンを行き来しながら、技術とデザインの両面を磨いています。',
    skillsTitle: 'できること',
    skillsLead: '現在学んでいること、日常的に使っていること。',
    careerTitle: '経歴',
    worksTitle: 'つくったもの',
    worksLead: 'Webサービス、ツール、Botなどの制作実績です',
    certificationsTitle: '資格',
    socialsTitle: 'SNS',
    viewAll: 'VIEW ALL',
    featured: 'FEATURED',
  },
  en: {
    heroLabel: 'DIGITAL CREATOR & ENGINEER',
    heroLines: ['Make things', 'more freely'],
    heroDescription:
      'I turn complex ideas into clear, approachable experiences through websites and tools.',
    scroll: 'SCROLL TO EXPLORE',
    aboutTitleLines: ['Curiosity first.', 'Systems that reach people.'],
    aboutLead:
      'Beyond shaping ideas, I design and build experiences that help people move forward with confidence.',
    qualities: [
      {
        title: 'Think',
        descriptionLines: ['Organize complex information', 'and uncover the right experience.'],
      },
      {
        title: 'Design',
        descriptionLines: ['Connect goals with people', 'through clear, useful flows.'],
      },
      {
        title: 'Build',
        descriptionLines: ['Turn ideas into working websites', 'and practical tools.'],
      },
    ],
    aboutNote:
      'I develop both technical and design skills through student organizations and an engineering internship.',
    skillsTitle: 'What I do',
    skillsLead: 'What I am learning and using every day.',
    careerTitle: 'Career',
    worksTitle: 'Selected work',
    worksLead: 'A selection of web services, tools, and bots I have built.',
    certificationsTitle: 'Certifications',
    socialsTitle: 'Socials',
    viewAll: 'VIEW ALL',
    featured: 'FEATURED',
  },
};

export const skills = [
  {
    id: '01',
    title: { ja: 'プログラミング言語', en: 'Languages' },
    items: ['HTML', 'CSS', 'JavaScript', 'Pug', 'Python'],
  },
  {
    id: '02',
    title: { ja: 'フレームワーク', en: 'Frameworks' },
    items: ['Node.js', 'Next.js', 'React', 'Hono', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    id: '03',
    title: { ja: 'ツール', en: 'Tools' },
    items: ['Docker', 'Git', 'GitHub', 'Codex', 'Claude Code', 'Cloudflare'],
  },
  { id: '04', title: { ja: 'OS', en: 'Operating systems' }, items: ['Windows', 'macOS', 'Linux'] },
] as const;

export const timeline: Array<{
  date: string;
  organization: string;
  role: LocalizedText;
  href?: string;
}> = [
  {
    date: '2026.04',
    organization: '角川ドワンゴ学園 S高等学校',
    role: { ja: '入学', en: 'Enrolled' },
    href: 'https://nnn.ed.jp',
  },
  {
    date: '2026.06',
    organization: '学生団体 GovSpark',
    role: { ja: '開発部門', en: 'Development team' },
  },
  {
    date: '2026.07',
    organization: '株式会社MISAKA',
    role: { ja: 'エンジニアインターン', en: 'Engineering intern' },
    href: 'https://misakainc.com',
  },
  {
    date: '2026.08',
    organization: '学生団体 CONNECTOR',
    role: { ja: 'サイト制作部門', en: 'Web production team' },
  },
  {
    date: '2026.08',
    organization: '学生団体 TSUGIHANDS',
    role: { ja: 'サイト制作部門・DX部門', en: 'Web production & DX team' },
    href: 'https://tsugihands.org',
  },
  {
    date: '2026.08',
    organization: 'N高グループ生徒会',
    role: { ja: 'デジタル委員会', en: 'Digital committee' },
  },
  {
    date: '2026.10',
    organization: 'ZEN大学',
    role: { ja: '特別聴講生', en: 'Special auditor' },
    href: 'https://zen.ac.jp',
  },
  {
    date: '2026.8',
    organization: '瑞鶴グループ',
    role: { ja: '代表', en: 'Representative' },
  },
];

export const certifications = [
  {
    name: { ja: 'パソコン能力評価試験 4級', en: 'Computer Skills Assessment Test, Grade 4' },
    year: '2023',
  },
  { name: { ja: 'タイピング技能検定 8級', en: 'Typing Skills Test, Grade 8' }, year: '2023' },
] as const;

export const socialLinks = [
  { name: 'X', href: 'https://x.com/namiyama_814' },
  { name: 'Instagram', href: 'https://www.instagram.com/namiyama_814' },
  { name: 'Qiita', href: 'https://qiita.com/namiyama' },
  { name: 'GitHub', href: 'https://github.com/namiyama814' },
  { name: 'note', href: 'https://note.com/namiyama' },
] as const;
