export type Work = {
  name: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  live?: string;
  code?: string;
};

export const works: Work[] = [
  {
    name: 'Nocancel',
    description: '株式会社MISAKAで、バックエンドとフロントエンドを含むフルスタック開発を担当',
    descriptionEn: 'Full-stack development covering both backend and frontend at MISAKA Inc.',
    technologies: ['TypeScript', 'Next.js'],
    live: 'https://nocancel.jp',
  },
  {
    name: 'ProbPlan',
    description: 'ZENStudy Webアプリケーションコンテスト 2026夏の応募作品',
    descriptionEn: 'Entry for the ZENStudy Web Application Contest, Summer 2026.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
    live: 'https://namiyama814.github.io/probPlan',
    code: 'https://github.com/namiyama814/probPlan',
  },
  {
    name: 'GovSparkBot',
    description: 'Discord VCの録音、所属メンバーのタスク割り振りと管理を行うDiscord Bot',
    descriptionEn:
      'A Discord bot for recording voice channels and assigning and managing tasks for members.',
    technologies: ['TypeScript', 'Discord.js', 'Cloudflare', 'Render'],
    code: 'https://github.com/GovSpark/GovSparkDiscord',
  },
  {
    name: 'SerialForge',
    description: 'シリアルナンバーの発行を行うサービス',
    descriptionEn: 'A service for issuing serial numbers.',
    technologies: ['Pug', 'JavaScript', 'Render', 'Docker'],
    live: 'https://serialforge.onrender.com',
    code: 'https://github.com/namiyama814/serialForge',
  },
  {
    name: 'Markov',
    description: '簡易的なマルコフ連鎖を行うプログラム',
    descriptionEn: 'A lightweight program for creating Markov chains.',
    technologies: ['JavaScript'],
    code: 'https://github.com/namiyama814/Markov',
  },
  {
    name: 'Vistamp',
    description: '指定したURLにアクセスし、スクリーンショットを撮影するシステム',
    descriptionEn: 'A system that visits a specified URL and captures a screenshot.',
    technologies: ['JavaScript', 'Pug', 'Docker', 'Render'],
    live: 'https://vistamp.onrender.com',
    code: 'https://github.com/namiyama814/Vistamp',
  },
  {
    name: 'StarEdu',
    description: '芸能人の学歴を取得するツール',
    descriptionEn: 'A tool for retrieving educational backgrounds of public figures.',
    technologies: ['Pug', 'JavaScript', 'Docker', 'Wiki.js', 'Render'],
    live: 'https://staredu-w5cf.onrender.com',
    code: 'https://github.com/namiyama814/human-school',
  },
  {
    name: 'link',
    description: '自分のリンク一覧を表示するシステム',
    descriptionEn: 'A personal link directory.',
    technologies: ['HTML', 'Tailwind CSS'],
    live: 'https://namiyama814.github.io/link/link.html',
    code: 'https://github.com/namiyama814/link',
  },
  {
    name: 'nico-rikari',
    description: 'ニコニコ動画 Re:仮を復元したサービス',
    descriptionEn: 'A service that recreates Niconico Video Re:仮.',
    technologies: ['Pug', 'JavaScript', 'CSS', 'Docker'],
    live: 'https://nico-rikari.onrender.com',
    code: 'https://github.com/namiyama814/nico-rikari',
  },
  {
    name: 'estimate',
    description: '見積もり計算シミュレーター。ProbPlanの前身となったプロジェクト',
    descriptionEn: 'An estimate-calculation simulator and the predecessor to ProbPlan.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://namiyama814.github.io/estimate/',
    code: 'https://github.com/namiyama814/estimate',
  },
  {
    name: 'Elongator',
    description: 'URL延長サービス',
    descriptionEn: 'A URL extension service.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://namiyama814.github.io/longUrl/',
    code: 'https://github.com/namiyama814/longUrl',
  },
];
