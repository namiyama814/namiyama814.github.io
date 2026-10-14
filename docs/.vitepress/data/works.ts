export type Work = {
  id: string;
  name: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  context?: string;
  contextEn?: string;
  live?: string;
  code?: string;
};

export const works: Work[] = [
  {
    id: 'anzdrop',
    name: 'Anzdrop',
    description: 'ファイル転送の仕組みへの興味から構想したサービス。暗号化や使い勝手を工夫しながら開発中。',
    descriptionEn:
      'An in-development file transfer service inspired by an interest in encryption and usability.',
    technologies: ['TypeScript'],
  },
  {
    id: 'tsugihands-website',
    name: 'TSUGIHANDS Webサイト',
    description:
      '既存サイトの改善、note記事の自動取得、お問い合わせフォームからDiscordへの通知を実装。メール基盤の管理も担当。',
    descriptionEn:
      'Improved an existing website, added automatic note article retrieval and Discord form notifications, and helped manage email infrastructure.',
    technologies: ['Cloudflare Email Routing', 'SMTP2GO'],
    live: 'https://tsugihands.org',
  },
  {
    id: 'tsugihands-bot',
    name: 'TSUGIHANDSBot',
    description:
      'ミーティング設定やWorkers AIを用いたRAG質問応答などを開発。Discordの内容をChatGPTから読むMCPも制作。',
    descriptionEn:
      'Built meeting-related features, a Workers AI RAG question-answering system, and an MCP server for accessing Discord content from ChatGPT.',
    technologies: ['Cloudflare Workers AI', 'RAG', 'MCP'],
  },
  {
    id: 'nocancel',
    name: 'Nocancel',
    description:
      '株式会社MISAKAでフロントエンドとバックエンドを担当し、紹介コード、複数店舗管理、お知らせ表示などを実装。',
    descriptionEn:
      'Full-stack work at MISAKA Inc., including referral codes, multi-store account management, and in-app announcements.',
    technologies: ['TypeScript', 'Next.js'],
    live: 'https://nocancel.jp',
  },
  {
    id: 'probplan',
    context: '前身のestimateから発展させたプロジェクト。',
    contextEn: 'Developed from the earlier estimate project.',
    name: 'ProbPlan',
    description: 'ZENStudy Webアプリケーションコンテスト 2026夏の応募作品。',
    descriptionEn: 'Entry for the ZENStudy Web Application Contest, Summer 2026.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'GitHub Pages'],
    live: 'https://namiyama814.github.io/probPlan',
    code: 'https://github.com/namiyama814/probPlan',
  },
  {
    id: 'govsparkbot',
    name: 'GovSparkBot',
    description: 'Discord VCの録音と、メンバーへのタスク割り振り・管理を行うBot。',
    descriptionEn:
      'A Discord bot for recording voice channels and assigning and managing tasks for members.',
    technologies: ['TypeScript', 'Discord.js', 'Cloudflare', 'Render'],
    code: 'https://github.com/GovSpark/GovSparkDiscord',
  },
  {
    id: 'serialforge',
    name: 'SerialForge',
    description: 'シリアルナンバーを発行するサービス。',
    descriptionEn: 'A service for issuing serial numbers.',
    technologies: ['Pug', 'JavaScript', 'Render', 'Docker'],
    live: 'https://serialforge.onrender.com',
    code: 'https://github.com/namiyama814/serialForge',
  },
  {
    id: 'markov',
    name: 'Markov',
    description: '簡易的なマルコフ連鎖を実行するプログラム。',
    descriptionEn: 'A lightweight program for creating Markov chains.',
    technologies: ['JavaScript'],
    code: 'https://github.com/namiyama814/Markov',
  },
  {
    id: 'vistamp',
    name: 'Vistamp',
    description: '指定したURLにアクセスし、スクリーンショットを撮影するシステム。',
    descriptionEn: 'A system that visits a specified URL and captures a screenshot.',
    technologies: ['JavaScript', 'Pug', 'Docker', 'Render'],
    live: 'https://vistamp.onrender.com',
    code: 'https://github.com/namiyama814/Vistamp',
  },
  {
    id: 'staredu',
    name: 'StarEdu',
    description: '芸能人の学歴を取得するツール。',
    descriptionEn: 'A tool for retrieving educational backgrounds of public figures.',
    technologies: ['Pug', 'JavaScript', 'Docker', 'Wiki.js', 'Render'],
    live: 'https://staredu-w5cf.onrender.com',
    code: 'https://github.com/namiyama814/human-school',
  },
  {
    id: 'link',
    name: 'link',
    description: '自分のリンク一覧を表示するシステム。',
    descriptionEn: 'A personal link directory.',
    technologies: ['HTML', 'Tailwind CSS'],
    live: 'https://namiyama814.github.io/link/link.html',
    code: 'https://github.com/namiyama814/link',
  },
  {
    id: 'nico-rikari',
    name: 'nico-rikari',
    description: 'ニコニコ動画 Re:仮を復元したサービス。',
    descriptionEn: 'A service that recreates Niconico Video Re:仮.',
    technologies: ['Pug', 'JavaScript', 'CSS', 'Docker'],
    live: 'https://nico-rikari.onrender.com',
    code: 'https://github.com/namiyama814/nico-rikari',
  },
  {
    id: 'estimate',
    name: 'estimate',
    description: '見積もり計算シミュレーター。ProbPlanの前身となったプロジェクト。',
    descriptionEn: 'An estimate-calculation simulator and the predecessor to ProbPlan.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://namiyama814.github.io/estimate/',
    code: 'https://github.com/namiyama814/estimate',
  },
  {
    id: 'elongator',
    name: 'Elongator',
    description: 'URL延長サービス。',
    descriptionEn: 'A URL extension service.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://namiyama814.github.io/longUrl/',
    code: 'https://github.com/namiyama814/longUrl',
  },
];
